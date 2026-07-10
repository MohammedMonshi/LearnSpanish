# LearnSpanish - Cognitive Engineering PWA

A progressive web application for learning Spanish with scientifically-backed cognitive engineering principles integrated throughout the learning experience.

## Features

### 🎯 CEFR Level Structure
- **A1 (Beginner)**: Elementary proficiency with basic vocabulary and greetings
- **A2 (Elementary)**: Basic fluency with family terms and past tense
- **B1 (Intermediate)**: Threshold proficiency with complex concepts and subjunctive mood
- **B2 (Upper-Intermediate)**: Vantage proficiency with academic vocabulary and advanced structures
- **C1 (Advanced)**: Effective operational proficiency with nuanced language
- **C2 (Mastery)**: Complete mastery with sophisticated social phenomena and complex analysis

### 🧠 Cognitive Engineering Principles

1. **Spaced Repetition**: Review intervals increase over time to enhance long-term retention
2. **Elaboration**: Connect new information to existing knowledge for deeper understanding
3. **Interleaving**: Mix different problem types to improve learning transfer
4. **Retrieval Practice**: Test yourself frequently to strengthen memory encoding
5. **Generation Effect**: Create your own answers rather than passive review
6. **Contextual Learning**: Learn words in real-world usage contexts
7. **Multisensory Learning**: Combine visual, auditory, and kinesthetic input
8. **Metacognition**: Reflect on your learning strategy and performance

### 📊 Learning Analytics
- Track daily streak for consistency
- Monitor total XP earned
- View accuracy percentage
- See words learned and lessons completed
- Level-by-level progress tracking

### 🎮 Exercise Types
- **Multiple Choice**: Select correct answers from options
- **Translation**: Translate English to Spanish
- **Fill-in-the-Blank**: Complete sentences with correct forms
- **Matching Pairs**: Connect related vocabulary
- **Essay (C2)**: Write comprehensive analyses

### ⚙️ Customizable Learning Settings
- Sound effects toggle
- Spell check options
- Timed exercises
- Spaced repetition control
- Interleaved learning preference
- Elaboration question frequency

### 📱 PWA Features
- Offline-first architecture with Service Worker caching
- Works on all devices (mobile, tablet, desktop)
- Installable as native app
- Fast loading and smooth performance
- Local data persistence
- Export/Import progress data

## How to Use

### Installation

1. **Online**: Visit the PWA URL in a modern browser
2. **iOS**: Tap Share → Add to Home Screen
3. **Android**: Tap menu → Install app / Add to Home Screen
4. **Desktop**: Click the install button in the address bar

### Getting Started

1. Open the app and select your starting level (A1-C2)
2. Review the cognitive principle displayed for the lesson
3. Study the vocabulary or grammar concept
4. Complete the interactive exercise
5. Earn XP and track your progress
6. Continue through lessons at your own pace

## Technical Stack

- **HTML5**: Semantic markup and progressive enhancement
- **CSS3**: Responsive design with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modular architecture with classes
- **Service Worker**: Offline-first PWA architecture
- **LocalStorage**: Client-side data persistence
- **No External Dependencies**: Fully standalone application

## Architecture

### Core Classes

#### `UserData`
Manages all user learning data, preferences, and analytics:
- Streak tracking
- XP accumulation
- Progress by level
- Learning history
- Settings management

#### `LearningEngine`
Coordinates learning strategy and cognitive techniques:
- Lesson selection and navigation
- Spaced repetition scheduling
- Interleaving strategies
- Answer evaluation
- Cognitive principle selection

#### `UIController`
Handles all user interface interactions:
- Screen navigation
- Lesson rendering
- Exercise display
- Data export/import
- Settings management

## Cognitive Science Foundation

This application is built on decades of cognitive psychology research:

- **Ebbinghaus Forgetting Curve**: Spaced repetition prevents knowledge decay
- **Interleaving Effect**: Mixing problem types improves transfer learning
- **Generation Effect**: Producing answers boosts retention vs. passive reading
- **Levels of Processing**: Elaborative encoding creates stronger memories
- **Schema Theory**: Contextual learning helps organize knowledge
- **Metacognition**: Monitoring learning improves strategy selection

## Learning Content

### A1 Level Sample
- Hola (Hello)
- Gracias (Thank you)
- Numbers (Uno, Dos, Tres...)
- Verb Conjugation: Ser (To Be)

### Progressive Difficulty
Each level builds on previous knowledge:
- Vocabulary complexity increases
- Grammar structures become more abstract
- Contexts shift from personal to academic
- Required analyses become more sophisticated

## Data Privacy

- All data is stored locally on your device
- No data is sent to external servers
- Export your data anytime
- Clear your data with one click
- Complete user control and transparency

## Browser Support

- Chrome/Chromium 49+
- Firefox 44+
- Safari 11+ (iOS 11.3+)
- Edge 15+
- Opera 36+

## Performance Metrics

- **First Paint**: < 1s
- **Time to Interactive**: < 2s
- **Offline Ready**: Yes
- **Install Size**: < 100KB
- **Cache Strategy**: Network-first with cache fallback

## Future Enhancements

- [ ] Audio pronunciation with speech recognition
- [ ] Conversation practice with AI responses
- [ ] Immersive story-based lessons
- [ ] Peer leaderboards and challenges
- [ ] Integration with spaced repetition algorithms
- [ ] Machine learning for personalized difficulty
- [ ] Video content library
- [ ] Cultural context modules

## Contributing

Contributions are welcome! Focus areas:
- Additional lesson content
- New exercise types
- Improved cognitive science integration
- UI/UX enhancements
- Performance optimization

## License

MIT License - Feel free to use and modify for your learning needs.

## Resources

### Cognitive Science
- Dunlosky et al. (2013). Improving Students' Learning With Effective Learning Techniques
- Bjork & Bjork. Spaced Repetition Effect Research
- Royer. Elaboration Processing Theory

### CEFR Framework
- [Common European Framework of Reference for Languages](https://www.coe.int/en/web/common-european-framework-reference-languages)
- Official language proficiency standards

### Spanish Learning
- Real Academia Española (RAE) - Spanish Language Authority
- CEFR-aligned Spanish vocabulary lists

---

**LearnSpanish**: Master Spanish with Science-Backed Learning Methods 🚀
