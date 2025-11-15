# Setup Guide - Unlock My Heart 💕

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Customize Personal Content**
   - Open `src/data/gameData.ts`
   - Update `personalData.herName` with her name
   - Add your photos to the `public/images/` directories
   - Customize all messages, memories, and challenges
   - Add background music to `public/audio/background.mp3`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Personalization Checklist

Before sharing the game, make sure to:

- [ ] Update her name in `src/data/gameData.ts`
- [ ] Add your first photo to `public/images/level1/first-photo.jpg`
- [ ] Add adventure photos to `public/images/level2/`
- [ ] Add inside joke photos to `public/images/level3/`
- [ ] Add favorite things photos to `public/images/level5/`
- [ ] Add milestone photos to `public/images/level6/`
- [ ] Add background music to `public/audio/background.mp3`
- [ ] Customize all messages in `src/data/gameData.ts`
- [ ] Update trivia questions with your personal inside jokes
- [ ] Update timeline events with your actual dates
- [ ] Customize the final certificate message

## Security Features

- All data stored locally in browser (localStorage)
- No external API calls
- No data transmission
- Images bundled with app
- Personal content stays private

## Cheat Code

Click the gift box on the landing page 10 times to unlock all levels (for testing purposes).

## File Structure

```
Proj_Lun/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Main pages
│   ├── store/            # State management
│   ├── data/             # Game data (CUSTOMIZE THIS!)
│   └── types/            # TypeScript types
├── public/
│   ├── images/           # Add your photos here
│   └── audio/            # Add background music here
└── package.json
```

## Troubleshooting

- **Images not showing**: Make sure image paths in `gameData.ts` match your file structure
- **Music not playing**: Check that `background.mp3` exists in `public/audio/`
- **Build errors**: Run `npm install` again to ensure all dependencies are installed

