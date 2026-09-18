import dns from 'node:dns';
// Prioritize IPv4 to prevent IPv6 timeout delays in container environments
dns.setDefaultResultOrder('ipv4first');

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

function getGeminiApiKey(): string | undefined {
  const rawKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!rawKey) return undefined;
  const cleanKey = rawKey.trim().replace(/^["']|["']$/g, '');
  if (!cleanKey || cleanKey === 'MY_GEMINI_API_KEY' || cleanKey === 'placeholder') {
    return undefined;
  }
  return cleanKey;
}

function getAIClient(): GoogleGenAI | null {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Format multi-turn chat messages to comply with Gemini API requirements:
// 1. Must alternate between 'user' and 'model'
// 2. First message must be 'user'
// 3. Consecutive identical roles are merged
function formatMessagesForGemini(rawMessages: Array<{ role: string; content: string }>) {
  const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

  for (const m of rawMessages) {
    if (!m || typeof m.content !== 'string' || !m.content.trim()) continue;
    const role: 'user' | 'model' = m.role === 'assistant' || m.role === 'model' ? 'model' : 'user';

    if (contents.length === 0 && role !== 'user') {
      continue;
    }

    if (contents.length > 0 && contents[contents.length - 1].role === role) {
      contents[contents.length - 1].parts[0].text += `\n\n${m.content.trim()}`;
    } else {
      contents.push({
        role,
        parts: [{ text: m.content.trim() }],
      });
    }
  }

  if (contents.length === 0) {
    contents.push({
      role: 'user',
      parts: [{ text: 'Explain the quantum state and operations currently being explored.' }],
    });
  }

  return contents;
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    platform: 'QubitLab',
    geminiConfigured: Boolean(getGeminiApiKey()),
  });
});

// QubitLab Quantum Tutor AI Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { context, messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const ai = getAIClient();
    if (!ai) {
      // Intelligent physics-based fallback if GEMINI_API_KEY is not configured
      const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content?.toLowerCase() || '';

      let fallbackReply = `I am your QubitLab Quantum Tutor! 

Here is key information regarding your query:`;

      if (lastUserMsg.includes('hadamard') || lastUserMsg.includes('h gate')) {
        fallbackReply = `### The Hadamard Gate (H)
The Hadamard gate maps computational basis states into balanced superpositions:
- $H|0\\rangle = |+\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)$
- $H|1\\rangle = |-\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle - |1\\rangle)$

On the **Bloch Sphere**, the Hadamard operation represents a $180^\\circ$ ($\\pi$) rotation around the diagonal axis $\\frac{X + Z}{\\sqrt{2}}$. Applying $H$ twice returns the state back: $H^2 = I$.`;
      } else if (lastUserMsg.includes('entangle') || lastUserMsg.includes('bell')) {
        fallbackReply = `### Quantum Entanglement & Bell States
Entanglement occurs when the quantum state of a multi-qubit system cannot be written as a product of individual qubit states: $|\\psi\\rangle \\neq |q_0\\rangle \\otimes |q_1\\rangle$.

The canonical Bell state $|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}$ is generated using:
1. Apply **H** on qubit 0 ($q_0$)
2. Apply **CNOT** with $q_0$ as control and $q_1$ as target.

Measuring $q_0$ instantaneously determines $q_1$'s measurement outcome, demonstrating non-local quantum correlations!`;
      } else if (lastUserMsg.includes('grover')) {
        fallbackReply = `### Grover's Search Algorithm
Grover's algorithm provides a quadratic speedup for unstructured search over $N = 2^n$ items, requiring only $O(\\sqrt{N})$ queries compared to $O(N)$ classically.
Key stages:
1. **Equal Superposition**: Apply $H^{\\otimes n}$ to all qubits.
2. **Oracle**: Flips the phase of the target marked state: $|\\omega\\rangle \\mapsto -|\\omega\\rangle$.
3. **Diffusion Operator**: Inversion about the average amplitude ($2|s\\rangle\\langle s| - I$), which amplifies the target state while reducing non-marked states.`;
      } else if (lastUserMsg.includes('bloch') || lastUserMsg.includes('sphere')) {
        fallbackReply = `### The Bloch Sphere
The Bloch sphere is a geometric representation of pure single-qubit states:
$$|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$$
- North pole: $|0\\rangle$ ($\\theta = 0$)
- South pole: $|1\\rangle$ ($\\theta = \\pi$)
- Equator: Equal superpositions like $|+\\rangle$ and $|-\\rangle$ ($\\theta = \\pi/2$).
- For mixed or entangled states, the state vector length $r < 1$ contracts into the interior of the sphere.`;
      } else {
        fallbackReply = `Quantum computing leverages linear algebra in Hilbert space:
- **Superposition**: Linear combination of eigenstates $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ where $|\\alpha|^2 + |\\beta|^2 = 1$.
- **Unitary Evolution**: Quantum gates are represented by unitary matrices $U^\\dagger U = I$, preserving total probability.
- **Born Rule**: The probability of measuring state $|x\\rangle$ is $P(x) = |\\langle x|\\psi\\rangle|^2$.`;
      }

      return res.json({ reply: fallbackReply });
    }

    const systemPrompt = `You are QubitLab's Quantum Computing Tutor, an expert physicist and quantum computing professor.
You explain quantum mechanics, quantum circuits, quantum algorithms (Grover, Deutsch-Jozsa, Shor, VQE), Dirac bra-ket notation, Qiskit/Cirq code, and hardware concepts clearly, intuitively, and mathematically accurately.
When explaining circuits, reference the user's current circuit state if provided in context.
Use standard mathematical notation (such as |0⟩, |1⟩, |+⟩, |-⟩, amplitudes, matrices) and concise, educational language.
Context provided:
${context || 'No specific circuit context provided.'}`;

    const formattedContents = formatMessagesForGemini(messages);

    // Try fast gemini-3.1-flash-lite, fallback to gemini-3.8-flash if needed
    let replyText = '';
    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: formattedContents,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.6,
            maxOutputTokens: 1200,
          },
        });

        if (response.text && response.text.trim()) {
          replyText = response.text.trim();
          break;
        }
      } catch (modelErr: any) {
        console.warn(`Model ${model} attempt failed:`, modelErr?.message || modelErr);
        // Continue to next model in list
      }
    }

    if (!replyText) {
      throw new Error('Unable to generate response from Gemini at this moment.');
    }

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate tutor response' });
  }
});


// Production & Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`QubitLab Server running on port ${PORT}`);
  });
}

startServer();
