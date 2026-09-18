export default function handler(_req: any, res: any) {
  const rawKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  const key = typeof rawKey === 'string' ? rawKey.trim().replace(/^["']|["']$/g, '') : '';
  const geminiConfigured = Boolean(key && key !== 'MY_GEMINI_API_KEY' && key !== 'placeholder');

  res.status(200).json({
    status: 'ok',
    platform: 'QubitLab',
    geminiConfigured,
  });
}
