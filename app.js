// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed'));
}

// Data Structure and Storage
const CEFR_LEVELS = {
    A1: {
        name: 'Beginner',
        description: 'Elementary proficiency',
        minWords: 500,
        lessons: []
    },
    A2: {
        name: 'Elementary',
        description: 'Basic fluency',
        minWords: 1000,
        lessons: []
    },
    B1: {
        name: 'Intermediate',
        description: 'Threshold proficiency',
        minWords: 2000,
        lessons: []
    },
    B2: {
        name: 'Upper-Intermediate',
        description: 'Vantage proficiency',
        minWords: 3500,
        lessons: []
    },
    C1: {
        name: 'Advanced',
        description: 'Effective operational proficiency',
        minWords: 5000,
        lessons: []
    },
    C2: {
        name: 'Mastery',
        description: 'Mastery or proficiency',
        minWords: 8000,
        lessons: []
    }
};

// Cognitive Engineering Principles
const COGNITIVE_PRINCIPLES = {
    'spaced-repetition': 'Spaced Repetition: Reviewing material at increasing intervals enhances long-term retention.',
    'elaboration': 'Elaboration: Connecting new information to existing knowledge deepens understanding.',
    'interleaving': 'Interleaving: Mixing different types of problems improves learning and transfer.',
    'retrieval-practice': 'Retrieval Practice: Testing yourself strengthens memory encoding.',
    'generation-effect': 'Generation Effect: Generating answers yourself aids memory more than passive reading.',
    'contextual-learning': 'Contextual Learning: Learning words in real-world contexts improves recall.',
    'multisensory': 'Multisensory Learning: Combining visual, auditory, and kinesthetic input enhances retention.',
    'metacognition': 'Metacognition: Reflecting on your learning improves strategy and performance.'
};

// Spanish Learning Content Database
const LESSON_DATABASE = {
    A1: [
        {
            id: 'A1-001',
            type: 'vocabulary',
            category: 'Greetings',
            content: {
                word: 'Hola',
                translation: 'Hello',
                pronunciation: 'OH-lah',
                example: 'Hola, ¿cómo estás?',
                exampleTranslation: 'Hello, how are you?'
            },
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is the Spanish word for "Hello"?',
                    options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
                    correct: 0,
                    explanation: 'Correct! "Hola" means "Hello"'
                }
            ]
        },
        {
            id: 'A1-002',
            type: 'vocabulary',
            category: 'Greetings',
            content: {
                word: 'Gracias',
                translation: 'Thank you',
                pronunciation: 'GRAH-see-ahs',
                example: 'Gracias por tu ayuda.',
                exampleTranslation: 'Thank you for your help.'
            },
            exercises: [
                {
                    type: 'translation',
                    question: 'Translate: Thank you',
                    correct: 'gracias',
                    explanation: 'Correct! "Gracias" means "Thank you"'
                }
            ]
        },
        {
            id: 'A1-003',
            type: 'vocabulary',
            category: 'Numbers',
            content: {
                word: 'Uno',
                translation: 'One',
                pronunciation: 'OO-noh',
                example: 'Tengo uno manzana.',
                exampleTranslation: 'I have one apple.'
            },
            exercises: [
                {
                    type: 'matching',
                    question: 'Match Spanish numbers with English',
                    pairs: [
                        { spanish: 'Uno', english: 'One', id: '1' },
                        { spanish: 'Dos', english: 'Two', id: '2' },
                        { spanish: 'Tres', english: 'Three', id: '3' }
                    ]
                }
            ]
        },
        {
            id: 'A1-004',
            type: 'grammar',
            category: 'Present Tense',
            content: {
                concept: 'Ser (To Be) - Present Tense',
                conjugation: [
                    { pronoun: 'Yo', verb: 'soy', meaning: 'I am' },
                    { pronoun: 'Tú', verb: 'eres', meaning: 'You are' },
                    { pronoun: 'Él/Ella', verb: 'es', meaning: 'He/She is' }
                ],
                example: 'Yo soy ingeniero.',
                exampleTranslation: 'I am an engineer.'
            },
            exercises: [
                {
                    type: 'fill-blank',
                    question: 'Complete: "Yo _____ María"',
                    options: ['soy', 'eres', 'es'],
                    correct: 0
                }
            ]
        }
    ],
    A2: [
        {
            id: 'A2-001',
            type: 'vocabulary',
            category: 'Family',
            content: {
                word: 'Familia',
                translation: 'Family',
                pronunciation: 'fah-MEE-lee-ah',
                example: 'Mi familia es grande.',
                exampleTranslation: 'My family is big.'
            },
            exercises: [
                {
                    type: 'translation',
                    question: 'Translate: My family',
                    correct: 'mi familia',
                    explanation: 'Correct! "Mi familia" means "My family"'
                }
            ]
        },
        {
            id: 'A2-002',
            type: 'grammar',
            category: 'Past Tense',
            content: {
                concept: 'Preterite Tense - Regular -AR verbs',
                conjugation: [
                    { pronoun: 'Yo', verb: 'hablé', meaning: 'I spoke' },
                    { pronoun: 'Tú', verb: 'hablaste', meaning: 'You spoke' },
                    { pronoun: 'Él/Ella', verb: 'habló', meaning: 'He/She spoke' }
                ],
                example: 'Hablé con mi profesor ayer.',
                exampleTranslation: 'I spoke with my teacher yesterday.'
            },
            exercises: [
                {
                    type: 'fill-blank',
                    question: 'Complete: "Yo _____ español ayer"',
                    options: ['hablo', 'hablé', 'hablaré'],
                    correct: 1
                }
            ]
        }
    ],
    B1: [
        {
            id: 'B1-001',
            type: 'vocabulary',
            category: 'Complex Concepts',
            content: {
                word: 'Perspectiva',
                translation: 'Perspective',
                pronunciation: 'per-spek-TEE-vah',
                example: 'Desde mi perspectiva, esto es importante.',
                exampleTranslation: 'From my perspective, this is important.'
            },
            exercises: [
                {
                    type: 'fill-blank',
                    question: 'Complete: "Desde tu _____, ¿qué piensas?"',
                    options: ['perspectiva', 'contexto', 'realidad'],
                    correct: 0
                }
            ]
        },
        {
            id: 'B1-002',
            type: 'grammar',
            category: 'Subjunctive Mood',
            content: {
                concept: 'Subjunctive Mood - Introduction',
                usage: 'Used to express doubt, desire, emotion, or necessity',
                example: 'Espero que entiendas mi posición.',
                exampleTranslation: 'I hope that you understand my position.'
            },
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'Which sentence uses subjunctive correctly?',
                    options: [
                        'Espero que vienes mañana',
                        'Espero que vengas mañana',
                        'Espero que vengo mañana',
                        'Espero que vienes el día'
                    ],
                    correct: 1,
                    explanation: 'Correct! "Espero que vengas" uses subjunctive after esperanza.'
                }
            ]
        }
    ],
    B2: [
        {
            id: 'B2-001',
            type: 'vocabulary',
            category: 'Academic',
            content: {
                word: 'Sintetizar',
                translation: 'To synthesize',
                pronunciation: 'sin-te-tee-SAHR',
                example: 'Necesitamos sintetizar los datos para sacar conclusiones.',
                exampleTranslation: 'We need to synthesize the data to draw conclusions.'
            },
            exercises: [
                {
                    type: 'fill-blank',
                    question: 'Para _____ los conceptos, debes revisar todos los puntos principales.',
                    options: ['sintetizar', 'memorizar', 'separar'],
                    correct: 0
                }
            ]
        },
        {
            id: 'B2-002',
            type: 'grammar',
            category: 'Advanced Structures',
            content: {
                concept: 'Conditional Sentences',
                structure: 'Si + imperfect subjunctive, conditional',
                example: 'Si tuviera más tiempo, viajaría por toda España.',
                exampleTranslation: 'If I had more time, I would travel all over Spain.'
            },
            exercises: [
                {
                    type: 'fill-blank',
                    question: 'Si yo _____ rico, compraría una casa en Barcelona.',
                    options: ['seré', 'sería', 'fuera'],
                    correct: 2
                }
            ]
        }
    ],
    C1: [
        {
            id: 'C1-001',
            type: 'vocabulary',
            category: 'Nuanced Language',
            content: {
                word: 'Ambigüedad',
                translation: 'Ambiguity',
                pronunciation: 'am-bee-gweh-DAHD',
                example: 'La ambigüedad del texto permite múltiples interpretaciones.',
                exampleTranslation: 'The ambiguity of the text allows for multiple interpretations.'
            },
            exercises: [
                {
                    type: 'translation',
                    question: 'Translate: The ambiguity of meaning',
                    correct: 'la ambigüedad del significado',
                    explanation: 'Correct! This phrase demonstrates understanding of nuanced language.'
                }
            ]
        }
    ],
    C2: [
        {
            id: 'C2-001',
            type: 'vocabulary',
            category: 'Mastery',
            content: {
                word: 'Fenómeno social',
                translation: 'Social phenomenon',
                pronunciation: 'fe-NOH-me-no so-see-AHL',
                example: 'La migración es un fenómeno social complejo que afecta múltiples aspectos de la sociedad.',
                exampleTranslation: 'Migration is a complex social phenomenon that affects multiple aspects of society.'
            },
            exercises: [
                {
                    type: 'essay',
                    question: 'Analiza un fenómeno social contemporáneo',
                    criteria: [
                        'Complex sentence structures',
                        'Advanced vocabulary',
                        'Clear argumentation',
                        'Nuanced perspective'
                    ]
                }
            ]
        }
    ]
};

// User Data Management
class UserData {
    constructor() {
        this.loadData();
    }

    loadData() {
        const saved = localStorage.getItem('spanishLearningData');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(this, data);
        } else {
            this.initializeData();
        }
    }

    initializeData() {
        this.userId = 'user_' + Date.now();
        this.totalXP = 0;
        this.streakDays = 0;
        this.lastActivityDate = null;
        this.wordsLearned = 0;
        this.lessonsCompleted = 0;
        this.accuracy = 0;
        this.currentLevel = 'A1';
        this.levelProgress = {
            A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0
        };
        this.completedLessons = new Set();
        this.incorrectAnswers = [];
        this.learningHistory = [];
        this.settings = {
            sound: true,
            spellCheck: true,
            timer: true,
            spacedRepetition: true,
            interleaving: true,
            elaboration: true
        };
        this.save();
    }

    save() {
        const data = {
            userId: this.userId,
            totalXP: this.totalXP,
            streakDays: this.streakDays,
            lastActivityDate: this.lastActivityDate,
            wordsLearned: this.wordsLearned,
            lessonsCompleted: this.lessonsCompleted,
            accuracy: this.accuracy,
            currentLevel: this.currentLevel,
            levelProgress: this.levelProgress,
            completedLessons: Array.from(this.completedLessons),
            incorrectAnswers: this.incorrectAnswers,
            learningHistory: this.learningHistory,
            settings: this.settings
        };
        localStorage.setItem('spanishLearningData', JSON.stringify(data));
    }

    updateStreak() {
        const today = new Date().toDateString();
        if (this.lastActivityDate === today) return;
        
        const lastDate = this.lastActivityDate ? new Date(this.lastActivityDate) : null;
        const lastDateStr = lastDate ? lastDate.toDateString() : null;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (lastDateStr === yesterday) {
            this.streakDays++;
        } else if (lastDateStr !== today) {
            this.streakDays = 1;
        }
        
        this.lastActivityDate = today;
        this.save();
    }

    addXP(amount) {
        this.totalXP += amount;
        this.updateStreak();
        this.save();
    }

    completeLesson(lessonId, score) {
        if (!this.completedLessons.has(lessonId)) {
            this.completedLessons.add(lessonId);
            this.lessonsCompleted++;
            this.wordsLearned++;
        }
        
        this.learningHistory.push({
            lessonId,
            score,
            timestamp: new Date().toISOString()
        });
        
        this.updateAccuracy();
        this.save();
    }

    updateAccuracy() {
        if (this.learningHistory.length === 0) {
            this.accuracy = 0;
            return;
        }
        
        const totalScore = this.learningHistory.reduce((sum, entry) => sum + entry.score, 0);
        this.accuracy = Math.round(totalScore / this.learningHistory.length);
    }

    recordIncorrectAnswer(lessonId, answer, correct) {
        this.incorrectAnswers.push({
            lessonId,
            userAnswer: answer,
            correctAnswer: correct,
            timestamp: new Date().toISOString()
        });
        this.save();
    }

    getDataForExport() {
        return {
            userId: this.userId,
            totalXP: this.totalXP,
            streakDays: this.streakDays,
            lessonsCompleted: this.lessonsCompleted,
            wordsLearned: this.wordsLearned,
            accuracy: this.accuracy,
            currentLevel: this.currentLevel,
            levelProgress: this.levelProgress,
            learningHistory: this.learningHistory,
            exportDate: new Date().toISOString()
        };
    }
}

// Learning Engine with Cognitive Strategies
class LearningEngine {
    constructor(userData) {
        this.userData = userData;
        this.currentLessonIndex = 0;
        this.currentLevel = userData.currentLevel;
        this.currentLessons = this.getLessonsForLevel(this.currentLevel);
    }

    getLessonsForLevel(level) {
        return LESSON_DATABASE[level] || [];
    }

    getCurrentLesson() {
        return this.currentLessons[this.currentLessonIndex];
    }

    getNextLesson() {
        this.currentLessonIndex = Math.min(this.currentLessonIndex + 1, this.currentLessons.length - 1);
        return this.getCurrentLesson();
    }

    getPreviousLesson() {
        this.currentLessonIndex = Math.max(this.currentLessonIndex - 1, 0);
        return this.getCurrentLesson();
    }

    selectExercise(lesson) {
        // Cognitive Strategy: Spacing and Interleaving
        if (this.userData.settings.spacedRepetition) {
            // Prioritize previously incorrect answers
            const incorrectIds = new Set(this.userData.incorrectAnswers.map(a => a.lessonId));
            if (incorrectIds.has(lesson.id)) {
                return this.getSpacedRepetitionExercise(lesson);
            }
        }

        if (this.userData.settings.interleaving) {
            return this.getInterleavedExercise(lesson);
        }

        return lesson.exercises[0];
    }

    getSpacedRepetitionExercise(lesson) {
        // Return the first exercise for review
        return lesson.exercises[0];
    }

    getInterleavedExercise(lesson) {
        // Mix different exercise types
        return lesson.exercises[Math.floor(Math.random() * lesson.exercises.length)];
    }

    getCognitivePrinciple() {
        const principles = Object.values(COGNITIVE_PRINCIPLES);
        return principles[Math.floor(Math.random() * principles.length)];
    }

    evaluateAnswer(exercise, userAnswer) {
        let isCorrect = false;
        let score = 0;

        if (exercise.type === 'multiple-choice' || exercise.type === 'matching') {
            isCorrect = userAnswer === exercise.correct;
            score = isCorrect ? 100 : 0;
        } else if (exercise.type === 'translation' || exercise.type === 'fill-blank') {
            const normalizedUser = userAnswer.toLowerCase().trim();
            const normalizedCorrect = exercise.correct.toLowerCase().trim();
            isCorrect = normalizedUser === normalizedCorrect;
            score = isCorrect ? 100 : 0;
        }

        return { isCorrect, score };
    }
}

// UI Controller
class UIController {
    constructor(userData, learningEngine) {
        this.userData = userData;
        this.learningEngine = learningEngine;
        this.currentScreen = 'home';
        this.initializeEventListeners();
        this.updateHomeScreen();
    }

    initializeEventListeners() {
        // Level selection
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', () => this.startLevel(btn.dataset.level));
        });

        // Navigation
        document.getElementById('backBtn').addEventListener('click', () => this.showScreen('home'));
        document.getElementById('prevBtn').addEventListener('click', () => this.previousLesson());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextLesson());

        // Settings
        document.getElementById('settingsBtn').addEventListener('click', () => this.showScreen('settings'));
        document.getElementById('closeSettingsBtn').addEventListener('click', () => this.showScreen('home'));

        // Settings toggles
        document.getElementById('soundToggle').addEventListener('change', (e) => {
            this.userData.settings.sound = e.target.checked;
            this.userData.save();
        });
        document.getElementById('spellCheckToggle').addEventListener('change', (e) => {
            this.userData.settings.spellCheck = e.target.checked;
            this.userData.save();
        });
        document.getElementById('timerToggle').addEventListener('change', (e) => {
            this.userData.settings.timer = e.target.checked;
            this.userData.save();
        });
        document.getElementById('spacedRepetitionToggle').addEventListener('change', (e) => {
            this.userData.settings.spacedRepetition = e.target.checked;
            this.userData.save();
        });
        document.getElementById('interleaving').addEventListener('change', (e) => {
            this.userData.settings.interleaving = e.target.checked;
            this.userData.save();
        });
        document.getElementById('elaborationToggle').addEventListener('change', (e) => {
            this.userData.settings.elaboration = e.target.checked;
            this.userData.save();
        });

        // Data export
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());
        document.getElementById('clearDataBtn').addEventListener('click', () => this.clearData());
    }

    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenName + 'Screen').classList.add('active');
        this.currentScreen = screenName;

        if (screenName === 'home') {
            this.updateHomeScreen();
        }
    }

    updateHomeScreen() {
        document.getElementById('streakCount').textContent = this.userData.streakDays;
        document.getElementById('totalXP').textContent = this.userData.totalXP;
        document.getElementById('wordsLearned').textContent = this.userData.wordsLearned;
        document.getElementById('lessonsCompleted').textContent = this.userData.lessonsCompleted;
        document.getElementById('accuracy').textContent = this.userData.accuracy + '%';

        // Update progress bars
        Object.keys(this.userData.levelProgress).forEach(level => {
            const progress = this.userData.levelProgress[level];
            const progressEl = document.getElementById('progress-' + level);
            if (progressEl) {
                progressEl.style.setProperty('--progress', progress + '%');
            }
        });

        // Update settings toggles
        document.getElementById('soundToggle').checked = this.userData.settings.sound;
        document.getElementById('spellCheckToggle').checked = this.userData.settings.spellCheck;
        document.getElementById('timerToggle').checked = this.userData.settings.timer;
        document.getElementById('spacedRepetitionToggle').checked = this.userData.settings.spacedRepetition;
        document.getElementById('interleaving').checked = this.userData.settings.interleaving;
        document.getElementById('elaborationToggle').checked = this.userData.settings.elaboration;
    }

    startLevel(level) {
        this.learningEngine.currentLevel = level;
        this.learningEngine.currentLessons = this.learningEngine.getLessonsForLevel(level);
        this.learningEngine.currentLessonIndex = 0;
        
        this.userData.currentLevel = level;
        this.userData.save();
        
        this.showScreen('learning');
        this.renderLesson();
    }

    renderLesson() {
        const lesson = this.learningEngine.getCurrentLesson();
        if (!lesson) return;

        // Update header
        document.getElementById('currentLevel').textContent = `Level ${this.learningEngine.currentLevel}`;
        document.getElementById('lessonProgress').textContent = 
            `${this.learningEngine.currentLessonIndex + 1} / ${this.learningEngine.currentLessons.length}`;

        // Render cognitive principle
        const principle = this.learningEngine.getCognitivePrinciple();
        document.getElementById('cognitivePrinciple').textContent = '💡 ' + principle;

        // Render content
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = '';

        if (lesson.type === 'vocabulary') {
            contentArea.innerHTML = `
                <div class="content-word">${lesson.content.word}</div>
                <div class="content-translation">${lesson.content.translation}</div>
                <div class="content-pronunciation">${lesson.content.pronunciation}</div>
                <div class="content-example">
                    <div class="example-label">Example:</div>
                    <div class="example-text">${lesson.content.example}</div>
                    <div class="example-text" style="color: var(--gray); font-size: 0.95rem; margin-top: 0.5rem;">
                        "${lesson.content.exampleTranslation}"
                    </div>
                </div>
            `;
        } else if (lesson.type === 'grammar') {
            let conjugationHTML = '<div class="conjugation-table">';
            if (lesson.content.conjugation) {
                lesson.content.conjugation.forEach(c => {
                    conjugationHTML += `
                        <div class="conjugation-row">
                            <strong>${c.pronoun}:</strong> ${c.verb} (${c.meaning})
                        </div>
                    `;
                });
            }
            conjugationHTML += '</div>';

            contentArea.innerHTML = `
                <div class="content-word">${lesson.content.concept}</div>
                ${conjugationHTML}
                <div class="content-example">
                    <div class="example-label">Example:</div>
                    <div class="example-text">${lesson.content.example}</div>
                    <div class="example-text" style="color: var(--gray); font-size: 0.95rem; margin-top: 0.5rem;">
                        "${lesson.content.exampleTranslation}"
                    </div>
                </div>
            `;
        }

        // Render exercise
        const exercise = this.learningEngine.selectExercise(lesson);
        this.renderExercise(exercise, lesson);

        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.learningEngine.currentLessonIndex === 0;
        document.getElementById('nextBtn').disabled = this.learningEngine.currentLessonIndex === this.learningEngine.currentLessons.length - 1;
    }

    renderExercise(exercise, lesson) {
        const exerciseArea = document.getElementById('exerciseArea');
        exerciseArea.innerHTML = '';

        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-area';

        if (exercise.type === 'multiple-choice') {
            exerciseDiv.innerHTML = `
                <div class="exercise-title">${exercise.question}</div>
                <div class="multiple-choice">
                    ${exercise.options.map((option, index) => `
                        <button class="choice-btn" data-index="${index}">${option}</button>
                    `).join('')}
                </div>
            `;

            exerciseDiv.querySelectorAll('.choice-btn').forEach(btn => {
                btn.addEventListener('click', () => this.handleMultipleChoice(btn.dataset.index, exercise, lesson));
            });
        } else if (exercise.type === 'translation') {
            exerciseDiv.innerHTML = `
                <div class="exercise-title">${exercise.question}</div>
                <input type="text" class="exercise-input" placeholder="Type your answer..." id="translationInput">
                <button class="btn btn-primary" id="submitBtn">Check Answer</button>
            `;

            document.getElementById('submitBtn').addEventListener('click', () => {
                const answer = document.getElementById('translationInput').value;
                this.handleTranslation(answer, exercise, lesson);
            });
        } else if (exercise.type === 'fill-blank') {
            exerciseDiv.innerHTML = `
                <div class="exercise-title">${exercise.question}</div>
                <div class="multiple-choice">
                    ${exercise.options.map((option, index) => `
                        <button class="choice-btn" data-index="${index}">${option}</button>
                    `).join('')}
                </div>
            `;

            exerciseDiv.querySelectorAll('.choice-btn').forEach(btn => {
                btn.addEventListener('click', () => this.handleMultipleChoice(btn.dataset.index, exercise, lesson));
            });
        }

        document.getElementById('exerciseArea').appendChild(exerciseDiv);
    }

    handleMultipleChoice(selectedIndex, exercise, lesson) {
        const result = this.learningEngine.evaluateAnswer(exercise, parseInt(selectedIndex));
        this.handleExerciseResult(result, exercise, lesson);
    }

    handleTranslation(answer, exercise, lesson) {
        const result = this.learningEngine.evaluateAnswer(exercise, answer);
        this.handleExerciseResult(result, exercise, lesson);
    }

    handleExerciseResult(result, exercise, lesson) {
        const exerciseArea = document.getElementById('exerciseArea');
        const feedback = document.createElement('div');
        feedback.className = `feedback ${result.isCorrect ? 'correct' : 'incorrect'}`;
        
        if (result.isCorrect) {
            feedback.innerHTML = `<span>✓</span><span>${exercise.explanation || 'Correct!'}</span>`;
            this.showToast('Great job! +10 XP', 'success');
            this.userData.addXP(10);
            this.userData.completeLesson(lesson.id, result.score);
            document.getElementById('xpGain').textContent = '+10 XP';
        } else {
            feedback.innerHTML = `<span>✗</span><span>Try again! The correct answer is: ${exercise.correct}</span>`;
            this.showToast('Incorrect, keep trying!', 'error');
            this.userData.recordIncorrectAnswer(lesson.id, '', exercise.correct);
        }

        exerciseArea.appendChild(feedback);
        
        // Disable interaction after answer
        document.querySelectorAll('.choice-btn, #submitBtn, .exercise-input').forEach(el => {
            el.disabled = true;
        });
    }

    nextLesson() {
        this.learningEngine.getNextLesson();
        this.renderLesson();
    }

    previousLesson() {
        this.learningEngine.getPreviousLesson();
        this.renderLesson();
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast show ${type}`;
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    exportData() {
        const data = this.userData.getDataForExport();
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `spanish-learning-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Data exported successfully', 'success');
    }

    clearData() {
        if (confirm('Are you sure you want to clear all learning data? This cannot be undone.')) {
            this.userData.initializeData();
            this.updateHomeScreen();
            this.showToast('All data cleared', 'success');
        }
    }
}

// Initialize Application
let userData;
let learningEngine;
let uiController;

document.addEventListener('DOMContentLoaded', () => {
    userData = new UserData();
    learningEngine = new LearningEngine(userData);
    uiController = new UIController(userData, learningEngine);
    
    console.log('LearnSpanish PWA initialized');
});

// Prevent pull-to-refresh on mobile
document.body.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });