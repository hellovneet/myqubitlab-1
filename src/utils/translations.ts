export type Language = 'en' | 'hi';

export interface TranslationDictionary {
  nav: {
    home: string;
    learn: string;
    composer: string;
    bloch: string;
    code: string;
    practice: string;
    library: string;
    tutor: string;
    account: string;
    subtitle: string;
    langEn: string;
    langHi: string;
  };
  landing: {
    badge: string;
    heroH1Part1: string;
    heroH1Accent: string;
    heroH1Part2: string;
    heroDesc: string;
    ctaComposer: string;
    ctaLearn: string;
    ctaAskAI: string;
    previewBadge: string;
    previewTitle: string;
    workspaceSubtitle: string;
    workspaceTitle: string;
    openWorkspace: string;
    cards: {
      composer: { title: string; desc: string };
      bloch: { title: string; desc: string };
      code: { title: string; desc: string };
      curriculum: { title: string; desc: string };
      quiz: { title: string; desc: string };
      dashboard: { title: string; desc: string };
    };
  };
  composer: {
    title: string;
    subtitle: string;
    presets: string;
    presetBell: string;
    presetGhz: string;
    presetSuperposition: string;
    presetGrover: string;
    presetDeutsch: string;
    presetTeleportation: string;
    qubits: string;
    steps: string;
    shots: string;
    stepTimeline: string;
    stepAll: string;
    stepAt: string;
    tabState: string;
    tabBloch: string;
    tabCode: string;
    gatePalette: string;
    paletteSingle: string;
    paletteTwo: string;
    paletteRotate: string;
    paletteOther: string;
    targetWire: string;
    controlWire: string;
    angleRad: string;
    clearGrid: string;
    askAI: string;
    exportCode: string;
    copyCode: string;
    copied: string;
    diracState: string;
    probabilities: string;
    basisState: string;
    amplitude: string;
    phase: string;
    measurementOutcomes: string;
    simulateShots: string;
    shannonEntropy: string;
    isEntangled: string;
    separable: string;
  };
  bloch: {
    title: string;
    subtitle: string;
    singleQubitLab: string;
    thetaLabel: string;
    phiLabel: string;
    polarAngle: string;
    azimuthalAngle: string;
    presetStates: string;
    state0: string;
    state1: string;
    statePlus: string;
    stateMinus: string;
    statePlusI: string;
    stateMinusI: string;
    applyGates: string;
    cartesianCoord: string;
    probabilities: string;
    purity: string;
    pureState: string;
    mixedState: string;
    askAI: string;
    interactiveNotice: string;
    geometryExplanation: string;
  };
  sandbox: {
    title: string;
    subtitle: string;
    frameworks: string;
    templates: string;
    templateBell: string;
    templateGhz: string;
    templateGrover: string;
    templateTeleportation: string;
    templateQft: string;
    runSimulation: string;
    aiExplain: string;
    aiDebug: string;
    copyCode: string;
    downloadCode: string;
    terminalOutput: string;
    statusReady: string;
    statusRunning: string;
    statusCompleted: string;
    executingCode: string;
    simulationResults: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    backToMocks: string;
    foundationsTitle: string;
    foundationsDesc: string;
    conceptsTitle: string;
    conceptsDesc: string;
    gatesTitle: string;
    gatesDesc: string;
    mathTitle: string;
    mathDesc: string;
    algorithmsTitle: string;
    algorithmsDesc: string;
    hardwareTitle: string;
    hardwareDesc: string;
    questionCount: string;
    difficulty: string;
    beginner: string;
    intermediate: string;
    advanced: string;
    startMock: string;
    questionOf: string;
    score: string;
    streak: string;
    submitAnswer: string;
    nextQuestion: string;
    finishQuiz: string;
    askAIHelp: string;
    correct: string;
    incorrect: string;
    explanation: string;
    quizCompleted: string;
    yourScore: string;
    retakeQuiz: string;
    adaptiveLevel: string;
  };
  curriculum: {
    title: string;
    subtitle: string;
    moduleFoundations: string;
    moduleConcepts: string;
    moduleMath: string;
    moduleAlgorithms: string;
    moduleComposerLab: string;
    completed: string;
    markCompleted: string;
    markIncomplete: string;
    learningObjectives: string;
    prerequisites: string;
    keyTakeaways: string;
    startLesson: string;
    takeQuiz: string;
    askAIExplain: string;
    estimatedTime: string;
    minutes: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
    systemGoal: string;
    overallMastery: string;
    statMastery: string;
    statConcepts: string;
    statAccuracy: string;
    statPredictions: string;
    statXP: string;
    recommendedNext: string;
    openTopic: string;
    learningSignals: string;
    bestScore: string;
    conceptMap: string;
    whereYouStand: string;
    mastered: string;
    quickLearn: string;
    quickExperiment: string;
    quickCode: string;
  };
  library: {
    title: string;
    subtitle: string;
    interactiveTools: string;
    textbooks: string;
    researchers: string;
    lectureSeries: string;
    referenceLiterature: string;
    openTool: string;
    visitResource: string;
  };
  tutor: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    placeholder: string;
    send: string;
    suggestionsTitle: string;
    suggestion1: string;
    suggestion2: string;
    suggestion3: string;
    suggestion4: string;
    suggestion5: string;
    copy: string;
    copied: string;
    clearChat: string;
    close: string;
    offlineNote: string;
  };
  user: {
    title: string;
    subtitle: string;
    login: string;
    signup: string;
    welcomeBack: string;
    createAccount: string;
    loginDesc: string;
    signupDesc: string;
    googleContinue: string;
    orEmail: string;
    nameLabel: string;
    emailLabel: string;
    passwordLabel: string;
    signOut: string;
    accountActive: string;
    features: {
      profile: string;
      session: string;
      sync: string;
      auth: string;
    };
  };
  footer: {
    brandTag: string;
    composer: string;
    bloch: string;
    sandbox: string;
    curriculum: string;
    practice: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      learn: 'Learn',
      composer: 'Composer',
      bloch: 'Bloch',
      code: 'Code',
      practice: 'Practice',
      library: 'Library',
      tutor: 'Ask tutor',
      account: 'Account',
      subtitle: 'Interactive quantum workspace',
      langEn: 'EN',
      langHi: 'हि',
    },
    landing: {
      badge: 'Interactive quantum computing workspace',
      heroH1Part1: 'Learn the ideas.',
      heroH1Accent: 'Build the circuit.',
      heroH1Part2: 'See what changes.',
      heroDesc: 'QubitLab turns quantum concepts into things you can manipulate: states, gates, circuits, code, visualizations, and practice questions.',
      ctaComposer: 'Open composer',
      ctaLearn: 'Start learning',
      ctaAskAI: 'Ask a question',
      previewBadge: 'Live state preview',
      previewTitle: 'Single-qubit laboratory',
      workspaceSubtitle: 'One workspace, multiple ways to learn',
      workspaceTitle: 'Move between theory and experimentation without changing tools.',
      openWorkspace: 'Open workspace',
      cards: {
        composer: { title: 'Circuit Composer', desc: 'Place gates, build circuits, and inspect state changes.' },
        bloch: { title: 'Bloch Space', desc: 'See a single qubit as geometry you can reason about.' },
        code: { title: 'Code Workspace', desc: 'Explore quantum code without leaving the learning flow.' },
        curriculum: { title: 'Learning Path', desc: 'Move from foundations to algorithms at your own pace.' },
        quiz: { title: 'Practice Mocks', desc: 'Test understanding with focused 10-question modules.' },
        dashboard: { title: 'Progress', desc: 'Track what you completed during the active session.' },
      },
    },
    composer: {
      title: 'Quantum Composer',
      subtitle: 'Interactive State-Vector Simulator',
      presets: 'Presets',
      presetBell: 'Bell State |Φ⁺⟩',
      presetGhz: 'GHZ State |GHZ⟩',
      presetSuperposition: 'Equal Superposition',
      presetGrover: "Grover's Search",
      presetDeutsch: 'Deutsch-Jozsa',
      presetTeleportation: 'Quantum Teleportation',
      qubits: 'Qubits',
      steps: 'Steps',
      shots: 'Shots',
      stepTimeline: 'Step timeline',
      stepAll: 'Full Circuit',
      stepAt: 'Step',
      tabState: 'Statevector',
      tabBloch: 'Bloch Spheres',
      tabCode: 'Export Code',
      gatePalette: 'Gate Palette',
      paletteSingle: 'Single Qubit',
      paletteTwo: 'Two Qubit / Controlled',
      paletteRotate: 'Phase & Rotation',
      paletteOther: 'Multi-qubit & Measurement',
      targetWire: 'Target Wire',
      controlWire: 'Control Wire',
      angleRad: 'Angle (radians)',
      clearGrid: 'Clear Grid',
      askAI: 'Ask AI Explain',
      exportCode: 'Export Code',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      diracState: 'Statevector (Dirac Notation)',
      probabilities: 'Basis State Probabilities',
      basisState: 'Basis State',
      amplitude: 'Amplitude',
      phase: 'Phase (rad / deg)',
      measurementOutcomes: 'Simulated Measurement Outcomes',
      simulateShots: 'Run Measurement Shots',
      shannonEntropy: 'Shannon Entropy',
      isEntangled: 'Entangled State Detected',
      separable: 'Separable / Product State',
    },
    bloch: {
      title: '3D Bloch Sphere Playground',
      subtitle: 'Interactive single-qubit geometry & quantum state laboratory',
      singleQubitLab: 'Single-Qubit Bloch Space',
      thetaLabel: 'Polar Angle (θ)',
      phiLabel: 'Azimuthal Angle (φ)',
      polarAngle: 'Latitude: 0 to π radians',
      azimuthalAngle: 'Longitude: 0 to 2π radians',
      presetStates: 'Standard Basis & Superposition Presets',
      state0: '|0⟩ Ground State',
      state1: '|1⟩ Excited State',
      statePlus: '|+⟩ Equal Phase (X+)',
      stateMinus: '|−⟩ Opposite Phase (X-)',
      statePlusI: '|+i⟩ Circular (Y+)',
      stateMinusI: '|−i⟩ Circular (Y-)',
      applyGates: 'Apply Quantum Unitaries',
      cartesianCoord: 'Bloch Vector Coordinates (X, Y, Z)',
      probabilities: 'Measurement Probabilities',
      purity: 'Quantum State Purity',
      pureState: 'Pure State (Purity = 1.0)',
      mixedState: 'Mixed / Entangled Subsystem',
      askAI: 'Ask AI About This State',
      interactiveNotice: 'Drag with mouse or touch to orbit camera. Scroll to zoom.',
      geometryExplanation: 'Every pure single-qubit state |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩ corresponds to a unique point on the unit sphere.',
    },
    sandbox: {
      title: 'Multi-Framework Quantum Sandbox',
      subtitle: 'Simulate and compare Qiskit, Cirq, QASM, PennyLane, and Q# programs',
      frameworks: 'Quantum Framework',
      templates: 'Algorithm Template',
      templateBell: 'Bell State (|Φ⁺⟩)',
      templateGhz: 'GHZ State (3 Qubits)',
      templateGrover: 'Grover Search',
      templateTeleportation: 'Quantum Teleportation',
      templateQft: 'Quantum Fourier Transform',
      runSimulation: 'Run Simulation',
      aiExplain: 'AI Explain Code',
      aiDebug: 'AI Debug Code',
      copyCode: 'Copy Code',
      downloadCode: 'Download',
      terminalOutput: 'Terminal & Execution Output',
      statusReady: 'Ready to execute',
      statusRunning: 'Executing quantum algorithm...',
      statusCompleted: 'Simulation completed successfully',
      executingCode: 'Executing Python quantum runtime...',
      simulationResults: 'Simulated Measurement Distribution',
    },
    quiz: {
      title: 'Quantum Quiz & Practice Arena',
      subtitle: 'Master quantum computing through targeted mock quizzes with instant physical explanations',
      backToMocks: 'Back to Mock Quizzes',
      foundationsTitle: 'Foundations Mock',
      foundationsDesc: 'Bits, qubits, normalization, Hilbert space, and Dirac notation.',
      conceptsTitle: 'Core Concepts Mock',
      conceptsDesc: 'Superposition, interference, measurement collapse, and quantum entanglement.',
      gatesTitle: 'Gates & Circuits Mock',
      gatesDesc: 'Pauli gates, Hadamard, phase shifts, CNOT, and reversible circuits.',
      mathTitle: 'Quantum Mathematics Mock',
      mathDesc: 'Complex numbers, inner/outer products, unitary matrices, and tensor products.',
      algorithmsTitle: 'Quantum Algorithms Mock',
      algorithmsDesc: 'Deutsch-Jozsa, Grover search, Shor factoring, and quantum speedups.',
      hardwareTitle: 'Quantum Hardware Mock',
      hardwareDesc: 'Coherence time, decoherence, superconducting transmons, and error correction.',
      questionCount: 'Questions',
      difficulty: 'Difficulty',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      startMock: 'Start Mock Quiz',
      questionOf: 'Question',
      score: 'Score',
      streak: 'Streak',
      submitAnswer: 'Check Answer',
      nextQuestion: 'Next Question',
      finishQuiz: 'Finish Quiz',
      askAIHelp: 'Ask AI Tutor for Intuition',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      explanation: 'Explanation & Intuition',
      quizCompleted: 'Quiz Completed!',
      yourScore: 'Your Final Score',
      retakeQuiz: 'Retake This Quiz',
      adaptiveLevel: 'Adaptive Level',
    },
    curriculum: {
      title: 'Structured Quantum Curriculum',
      subtitle: 'From classical bits to fault-tolerant quantum algorithms in guided modules',
      moduleFoundations: '1. Foundations of Quantum Info',
      moduleConcepts: '2. Core Quantum Phenomena',
      moduleMath: '3. Quantum Mathematical Rigor',
      moduleAlgorithms: '4. Foundational Quantum Algorithms',
      moduleComposerLab: '5. Hands-on Circuit Laboratory',
      completed: 'Completed',
      markCompleted: 'Mark as Completed',
      markIncomplete: 'Mark as Incomplete',
      learningObjectives: 'Learning Objectives',
      prerequisites: 'Prerequisites',
      keyTakeaways: 'Key Takeaways & Formulae',
      startLesson: 'Start Lesson',
      takeQuiz: 'Take Practice Quiz',
      askAIExplain: 'Ask AI to Explain Concept',
      estimatedTime: 'Estimated Duration',
      minutes: 'min',
    },
    dashboard: {
      title: 'My Learning System',
      subtitle: 'Learn from evidence, not completion.',
      systemGoal: 'Goal',
      overallMastery: 'Overall mastery',
      statMastery: 'Mastery',
      statConcepts: 'Concepts mastered',
      statAccuracy: 'Prediction accuracy',
      statPredictions: 'Recorded predictions',
      statXP: 'Total XP',
      recommendedNext: 'Recommended next topic',
      openTopic: 'Open topic',
      learningSignals: 'Learning signals',
      bestScore: 'Best quiz score',
      conceptMap: 'Concept Map & Progress',
      whereYouStand: 'Where you stand',
      mastered: 'mastered',
      quickLearn: 'Learn',
      quickExperiment: 'Experiment',
      quickCode: 'Code',
    },
    library: {
      title: 'Quantum Resource Library & Literature',
      subtitle: 'Curated university courses, research papers, and classical reference texts',
      interactiveTools: 'Interactive Learning Tools',
      textbooks: 'Textbooks & Free eBooks',
      researchers: 'Pioneering Quantum Researchers',
      lectureSeries: 'University Lecture Series (MIT, Berkeley, Caltech)',
      referenceLiterature: 'Reference Literature & Community Blogs',
      openTool: 'Open tool',
      visitResource: 'Visit resource',
    },
    tutor: {
      title: 'QubitLab AI Guide',
      subtitle: 'Grounded Quantum Physics & Computing Tutor',
      welcomeMessage: 'Hi, I am your QubitLab guide. Ask any quantum question, paste code, debug an error, or ask about the circuit you just constructed.',
      placeholder: 'Ask a quantum question, paste code, or inspect your circuit...',
      send: 'Send',
      suggestionsTitle: 'Suggested Questions',
      suggestion1: 'Explain superposition like I am a beginner',
      suggestion2: 'What does a CNOT gate actually do?',
      suggestion3: 'What gates does the simulator support?',
      suggestion4: 'How does Grover search achieve quadratic speedup?',
      suggestion5: 'What is the physical meaning of the Bloch sphere?',
      copy: 'Copy',
      copied: 'Copied!',
      clearChat: 'Clear Chat',
      close: 'Close',
      offlineNote: 'Offline tutor response — model service is currently operating locally.',
    },
    user: {
      title: 'Personal Quantum Workspace',
      subtitle: 'Learn quantum computing with your progress saved in one place.',
      login: 'Log in',
      signup: 'Sign up',
      welcomeBack: 'Welcome back',
      createAccount: 'Create your account',
      loginDesc: 'Continue your quantum learning workspace.',
      signupDesc: 'Start with a free QubitLab learner account.',
      googleContinue: 'Continue with Google',
      orEmail: 'or continue with email',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      signOut: 'Sign out',
      accountActive: 'Active & Synchronized',
      features: {
        profile: 'Personal learner profile',
        session: 'Persistent Supabase session',
        sync: 'Progress-ready cloud backend',
        auth: 'Secure credential management',
      },
    },
    footer: {
      brandTag: 'SIH Flagship AI-Powered Quantum Computing Platform',
      composer: 'Composer',
      bloch: '3D Bloch Sphere',
      sandbox: 'Code Sandbox',
      curriculum: 'Curriculum',
      practice: 'Mock Quizzes',
      rights: 'All rights reserved.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      learn: 'पाठ्यक्रम',
      composer: 'सर्किट कंपोज़र',
      bloch: 'ब्लॉक स्फ़ीयर',
      code: 'कोड सैंडबॉक्स',
      practice: 'अभ्यास क्विज़',
      library: 'लाइब्रेरी',
      tutor: 'AI ट्यूटर से पूछें',
      account: 'खाता',
      subtitle: 'इंटरैक्टिव क्वांटम वर्कस्पेस',
      langEn: 'EN',
      langHi: 'हिन्दी',
    },
    landing: {
      badge: 'इंटरैक्टिव क्वांटम कंप्यूटिंग वर्कस्पेस',
      heroH1Part1: 'सिद्धांत सीखें।',
      heroH1Accent: 'सर्किट बनाएं।',
      heroH1Part2: 'परिणाम देखें।',
      heroDesc: 'QubitLab क्वांटम अवधारणाओं को व्यावहारिक और प्रयोग करने योग्य बनाता है: स्टेट्स, गेट्स, सर्किट, कोड, 3D विज़ुअलाइज़ेशन और अभ्यास प्रश्न।',
      ctaComposer: 'सर्किट कंपोज़र खोलें',
      ctaLearn: 'सीखना शुरू करें',
      ctaAskAI: 'सवाल पूछें',
      previewBadge: 'लाइव स्टेट पूर्वावलोकन',
      previewTitle: 'सिंगल-क्यूबिट प्रयोगशाला',
      workspaceSubtitle: 'एक ही वर्कस्पेस, सीखने के कई शक्तिशाली तरीके',
      workspaceTitle: 'टूल बदले बिना सिद्धांत और प्रयोग के बीच सहजता से नेविगेट करें।',
      openWorkspace: 'वर्कस्पेस खोलें',
      cards: {
        composer: { title: 'सर्किट कंपोज़र', desc: 'गेट्स लगाएं, क्वांटम सर्किट बनाएं और लाइव स्टेट बदलाव देखें।' },
        bloch: { title: '3D ब्लॉक स्फ़ीयर', desc: 'क्यूबिट को 3D ज्यामिति के रूप में समझें और विश्लेषित करें।' },
        code: { title: 'कोड वर्कस्पेस', desc: 'Qiskit, Cirq और PennyLane में क्वांटम कोड रन करें।' },
        curriculum: { title: 'संरचित पाठ्यक्रम', desc: 'बुनियादी बातों से लेकर उन्नत एल्गोरिदम तक अपनी गति से बढ़ें।' },
        quiz: { title: 'अभ्यास मॉक टेस्ट', desc: '10-प्रश्नों वाले केंद्रित टेस्ट के साथ अपनी समझ की जांच करें।' },
        dashboard: { title: 'प्रगति डैशबोर्ड', desc: 'सत्र के दौरान पूरे किए गए विषयों और एक्यूरेसी को ट्रैक करें।' },
      },
    },
    composer: {
      title: 'क्वांटम सर्किट कंपोज़र',
      subtitle: 'इंटरैक्टिव स्टेट-वेक्टर सिम्युलेटर और गेट ग्रिड',
      presets: 'प्रीसेट सर्किट',
      presetBell: 'बेल स्टेट |Φ⁺⟩',
      presetGhz: 'जीएचजेड स्टेट |GHZ⟩',
      presetSuperposition: 'समान सुपरपोजिशन (H Gates)',
      presetGrover: 'ग्रोवर खोज एल्गोरिदम',
      presetDeutsch: 'डॉयच-जोज़ा एल्गोरिदम',
      presetTeleportation: 'क्वांटम टेलीपोर्टेशन',
      qubits: 'क्यूबिट्स संख्या',
      steps: 'समय चरण (Steps)',
      shots: 'शॉट्स (Shots)',
      stepTimeline: 'चरण टाइमलाइन स्क्रबर',
      stepAll: 'पूर्ण सर्किट',
      stepAt: 'चरण',
      tabState: 'स्टेट-वेक्टर (Statevector)',
      tabBloch: '3D ब्लॉक स्फ़ीयर',
      tabCode: 'कोड निर्यात (Export)',
      gatePalette: 'गेट पैलेट (Gate Palette)',
      paletteSingle: 'सिंगल-क्यूबिट गेट्स',
      paletteTwo: 'कंट्रोल्ड व टू-क्यूबिट गेट्स',
      paletteRotate: 'फेज और रोटेशन गेट्स',
      paletteOther: 'मल्टी-क्यूबिट व मापन (Measure)',
      targetWire: 'टारगेट वायर (q)',
      controlWire: 'कंट्रोल वायर (q)',
      angleRad: 'कोण (रेडियन में)',
      clearGrid: 'ग्रिड साफ़ करें',
      askAI: 'AI से सर्किट समझें',
      exportCode: 'कोड निर्यात',
      copyCode: 'कोड कॉपी करें',
      copied: 'कॉपी हो गया!',
      diracState: 'स्टेट-वेक्टर (डिराक नोटेशन)',
      probabilities: 'बेसिस स्टेट संभाव्यता (Probabilities)',
      basisState: 'बेसिस स्टेट',
      amplitude: 'आयाम (Amplitude)',
      phase: 'फेज (रेडियन / अंश)',
      measurementOutcomes: 'सिम्युलेटेड मापन परिणाम (Histogram)',
      simulateShots: 'मापन शॉट्स चलाएं',
      shannonEntropy: 'शैनन एन्ट्रापी (Entropy)',
      isEntangled: 'क्वांटम उलझाव (Entanglement) मौजूद है',
      separable: 'पृथक करने योग्य (Separable) स्टेट',
    },
    bloch: {
      title: '3D ब्लॉक स्फ़ीयर प्लेग्राउंड',
      subtitle: 'इंटरैक्टिव सिंगल-क्यूबिट ज्यामिति और क्वांटम स्टेट प्रयोगशाला',
      singleQubitLab: 'सिंगल-क्यूबिट ब्लॉक स्पेस',
      thetaLabel: 'ध्रुवीय कोण θ (Polar Angle)',
      phiLabel: 'अज़ीमुथल कोण φ (Azimuthal Angle)',
      polarAngle: 'अक्षांश: 0 से π रेडियन',
      azimuthalAngle: 'देशांतर: 0 से 2π रेडियन',
      presetStates: 'मानक बेसिस व सुपरपोजिशन प्रीसेट्स',
      state0: '|0⟩ ग्राउंड स्टेट (उत्तरी ध्रुव)',
      state1: '|1⟩ एक्साइटेड स्टेट (दक्षिणी ध्रुव)',
      statePlus: '|+⟩ समान फेज (X-अक्ष धनात्मक)',
      stateMinus: '|−⟩ विपरीत फेज (X-अक्ष ऋणात्मक)',
      statePlusI: '|+i⟩ सर्कुलर (Y-अक्ष धनात्मक)',
      stateMinusI: '|−i⟩ सर्कुलर (Y-अक्ष ऋणात्मक)',
      applyGates: 'क्वांटम यूनिटरी गेट्स लागू करें',
      cartesianCoord: 'कार्टेशियन निर्देशांक (X, Y, Z)',
      probabilities: 'मापन की प्रायिकता (Probabilities)',
      purity: 'क्वांटम स्टेट शुद्धता (Purity)',
      pureState: 'शुद्ध स्टेट (शुद्धता = 1.0)',
      mixedState: 'मिश्रित / उलझी हुई सबसिस्टम स्टेट',
      askAI: 'AI से इस स्टेट के बारे में पूछें',
      interactiveNotice: 'माउस या टच से घुमाएं, ज़ूम करने के लिए स्क्रॉल करें।',
      geometryExplanation: 'प्रत्येक शुद्ध सिंगल-क्यूबिट स्टेट |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩ यूनिट स्फ़ीयर पर एक अद्वितीय बिंदु दर्शाती है।',
    },
    sandbox: {
      title: 'मल्टी-फ़्रेमवर्क क्वांटम सैंडबॉक्स',
      subtitle: 'Qiskit, Cirq, QASM, PennyLane और Q# कोड सिम्युलेट व टेस्ट करें',
      frameworks: 'क्वांटम फ़्रेमवर्क',
      templates: 'एल्गोरिदम टेम्पलेट',
      templateBell: 'बेल स्टेट (|Φ⁺⟩)',
      templateGhz: 'जीएचजेड स्टेट (3 क्यूबिट)',
      templateGrover: 'ग्रोवर खोज (Grover Search)',
      templateTeleportation: 'क्वांटम टेलीपोर्टेशन',
      templateQft: 'क्वांटम फूरियर रूपांतरण (QFT)',
      runSimulation: 'सिम्युलेशन चलाएं',
      aiExplain: 'AI से कोड समझें',
      aiDebug: 'AI से बग खोजें',
      copyCode: 'कोड कॉपी करें',
      downloadCode: 'डाउनलोड',
      terminalOutput: 'टर्मिनल और आउटपुट परिणाम',
      statusReady: 'निष्पादन के लिए तैयार',
      statusRunning: 'क्वांटम एल्गोरिदम चल रहा है...',
      statusCompleted: 'सिम्युलेशन सफलतापूर्वक पूरा हुआ',
      executingCode: 'पायथन क्वांटम रनटाइम निष्पादित हो रहा है...',
      simulationResults: 'मापन आवृत्ति वितरण (Measurement Counts)',
    },
    quiz: {
      title: 'क्वांटम क्विज़ और अभ्यास अखाड़ा',
      subtitle: 'विस्तृत मॉक टेस्ट और तात्कालिक भौतिक व्याख्याओं के साथ क्वांटम कंप्यूटिंग में महारत हासिल करें',
      backToMocks: 'मॉक टेस्ट सूची पर वापस जाएं',
      foundationsTitle: 'बुनियादी मॉक टेस्ट',
      foundationsDesc: 'बिट्स, क्यूबिट्स, सामान्यीकरण, हिल्बर्ट स्पेस और डिराक नोटेशन।',
      conceptsTitle: 'मूल अवधारणाएं मॉक टेस्ट',
      conceptsDesc: 'सुपरपोजिशन, इंटरफेरेंस, मापन पतन और क्वांटम एंटैंगलमेंट।',
      gatesTitle: 'गेट्स व सर्किट मॉक टेस्ट',
      gatesDesc: 'पाउली गेट्स, हाडामर्ड, फेज शिफ्ट, CNOT और रिवर्सिबल सर्किट।',
      mathTitle: 'क्वांटम गणित मॉक टेस्ट',
      mathDesc: 'सम्मिश्र संख्याएं, इनर/आउटर प्रोडक्ट, यूनिटरी मैट्रिक्स और टेंसर प्रोडक्ट।',
      algorithmsTitle: 'क्वांटम एल्गोरिदम मॉक टेस्ट',
      algorithmsDesc: 'डॉयच-जोज़ा, ग्रोवर खोज, शोर का फैक्टरिंग और क्वांटम स्पीडअप।',
      hardwareTitle: 'क्वांटम हार्डवेयर मॉक टेस्ट',
      hardwareDesc: 'कोहेरेंस समय, डीकोहेरेंस, सुपरकंडक्टिंग ट्रांसमॉन और त्रुटि सुधार।',
      questionCount: 'प्रश्न',
      difficulty: 'कठिनाई स्तर',
      beginner: 'शुरुआती',
      intermediate: 'मध्यम',
      advanced: 'उन्नत',
      startMock: 'मॉक टेस्ट शुरू करें',
      questionOf: 'प्रश्न संख्या',
      score: 'स्कोर',
      streak: 'लगातार सही',
      submitAnswer: 'उत्तर जांचें',
      nextQuestion: 'अगला प्रश्न',
      finishQuiz: 'क्विज़ समाप्त करें',
      askAIHelp: 'AI ट्यूटर से भौतिक अंतर्दृष्टि पूछें',
      correct: 'बिल्कुल सही!',
      incorrect: 'गलत उत्तर',
      explanation: 'विस्तृत व्याख्या व भौतिकी',
      quizCompleted: 'क्विज़ पूरा हुआ!',
      yourScore: 'आपका अंतिम स्कोर',
      retakeQuiz: 'क्विज़ पुनः हल करें',
      adaptiveLevel: 'अनुकूली स्तर',
    },
    curriculum: {
      title: 'संरचित क्वांटम पाठ्यक्रम',
      subtitle: 'क्लासिकल बिट्स से लेकर फॉल्ट-टॉलरेंट क्वांटम एल्गोरिदम तक चरणबद्ध मार्गदर्शन',
      moduleFoundations: '1. क्वांटम सूचना की बुनियादी बातें',
      moduleConcepts: '2. मुख्य क्वांटम परिघटनाएं',
      moduleMath: '3. क्वांटम गणित और फॉर्मूलेशन',
      moduleAlgorithms: '4. मौलिक क्वांटम एल्गोरिदम',
      moduleComposerLab: '5. प्रायोगिक सर्किट लैब',
      completed: 'पूर्ण हुआ',
      markCompleted: 'पूर्ण चिह्नित करें',
      markIncomplete: 'अपूर्ण चिह्नित करें',
      learningObjectives: 'सीखने के मुख्य उद्देश्य',
      prerequisites: 'आवश्यक पूर्वज्ञान',
      keyTakeaways: 'मुख्य सूत्र व निष्कर्ष',
      startLesson: 'पाठ शुरू करें',
      takeQuiz: 'अभ्यास क्विज़ दें',
      askAIExplain: 'AI से अवधारणा समझें',
      estimatedTime: 'अनुमानित समय',
      minutes: 'मिनट',
    },
    dashboard: {
      title: 'मेरा शिक्षण तंत्र',
      subtitle: 'साक्ष्य और समझ से सीखें, केवल पूरा करने से नहीं।',
      systemGoal: 'लक्ष्य',
      overallMastery: 'कुल दक्षता (Overall Mastery)',
      statMastery: 'दक्षता',
      statConcepts: 'मास्टर की गई अवधारणाएं',
      statAccuracy: 'सटीकता दर',
      statPredictions: 'दर्ज पूर्वानुमान',
      statXP: 'कुल अनुभव (XP)',
      recommendedNext: 'अनुशंसित अगला विषय',
      openTopic: 'विषय खोलें',
      learningSignals: 'सीखने के संकेत',
      bestScore: 'सर्वश्रेष्ठ क्विज़ स्कोर',
      conceptMap: 'अवधारणा मानचित्र व स्थिति',
      whereYouStand: 'आपकी वर्तमान स्थिति',
      mastered: 'दक्षता प्राप्त',
      quickLearn: 'पढ़ें व समझें',
      quickExperiment: 'सर्किट बनाएं',
      quickCode: 'कोड एक्सप्लोर करें',
    },
    library: {
      title: 'क्वांटम संसाधन लाइब्रेरी और साहित्य',
      subtitle: 'विश्वविद्यालय पाठ्यक्रम, शोध पत्र और शास्त्रीय संदर्भ पुस्तकें',
      interactiveTools: 'इंटरैक्टिव शिक्षण उपकरण',
      textbooks: 'मुफ्त ई-बुक्स व पाठ्यपुस्तकें',
      researchers: 'अग्रणी क्वांटम वैज्ञानिक व शोधकर्ता',
      lectureSeries: 'विश्वविद्यालय व्याख्यान श्रृंखला (MIT, Berkeley, Caltech)',
      referenceLiterature: 'संदर्भ साहित्य और ब्लॉग्स',
      openTool: 'उपकरण खोलें',
      visitResource: 'संसाधन देखें',
    },
    tutor: {
      title: 'QubitLab AI मार्गदर्शक',
      subtitle: 'क्वांटम भौतिकी और कंप्यूटिंग विशेषज्ञ ट्यूटर',
      welcomeMessage: 'नमस्ते! मैं आपका QubitLab मार्गदर्शक हूँ। कोई भी क्वांटम प्रश्न पूछें, कोड पेस्ट करें, त्रुटि समझें या अपने द्वारा बनाए गए सर्किट का विश्लेषण करवाएं।',
      placeholder: 'क्वांटम प्रश्न पूछें, कोड पेस्ट करें, या सर्किट के बारे में पूछें...',
      send: 'भेजें',
      suggestionsTitle: 'सुझाए गए प्रश्न',
      suggestion1: 'सुपरपोजिशन को सरल भाषा में समझाएं',
      suggestion2: 'CNOT गेट वास्तव में क्या करता है?',
      suggestion3: 'सिम्युलेटर किन गेट्स का समर्थन करता है?',
      suggestion4: 'ग्रोवर सर्च में द्विघात गति (Quadratic Speedup) कैसे मिलती है?',
      suggestion5: 'ब्लॉक स्फ़ीयर का भौतिक अर्थ क्या है?',
      copy: 'कॉपी करें',
      copied: 'कॉपी हो गया!',
      clearChat: 'चैट साफ़ करें',
      close: 'बंद करें',
      offlineNote: 'ऑफ़लाइन ट्यूटर प्रतिक्रिया — मॉडल सेवा वर्तमान में स्थानीय रूप से सक्रिय है।',
    },
    user: {
      title: 'व्यक्तिगत क्वांटम वर्कस्पेस',
      subtitle: 'अपनी प्रगति को एक सुरक्षित स्थान पर सहेज कर क्वांटम कंप्यूटिंग सीखें।',
      login: 'लॉग इन करें',
      signup: 'साइन अप करें',
      welcomeBack: 'वापसी पर स्वागत है',
      createAccount: 'अपना खाता बनाएं',
      loginDesc: 'अपने क्वांटम लर्निंग वर्कस्पेस को जारी रखें।',
      signupDesc: 'मुफ्त QubitLab शिक्षार्थी खाते से शुरुआत करें।',
      googleContinue: 'Google के साथ जारी रखें',
      orEmail: 'या ईमेल से जारी रखें',
      nameLabel: 'पूरा नाम',
      emailLabel: 'ईमेल पता',
      passwordLabel: 'पासवर्ड',
      signOut: 'लॉग आउट',
      accountActive: 'सक्रिय और सिंक किया गया',
      features: {
        profile: 'व्यक्तिगत शिक्षार्थी प्रोफ़ाइल',
        session: 'सुरक्षित सुपबेस सत्र',
        sync: 'क्लाउड बैकएंड से सिंक',
        auth: 'प्रबंधित क्रेडेंशियल सुरक्षा',
      },
    },
    footer: {
      brandTag: 'SIH फ्लैगशिप AI-संचालित क्वांटम कंप्यूटिंग प्लेटफॉर्म',
      composer: 'सर्किट कंपोज़र',
      bloch: '3D ब्लॉक स्फ़ीयर',
      sandbox: 'कोड सैंडबॉक्स',
      curriculum: 'पाठ्यक्रम',
      practice: 'अभ्यास टेस्ट',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
  },
};
