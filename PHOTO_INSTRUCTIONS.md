# Photo Instructions for Lun's Game 💕

## Where to Add Photos

### Level 1 - First Photo Together
**Location:** `public/images/level1/first-photo.jpg`
- This is the photo that will be used in the puzzle challenge
- Recommended size: 800x800px or larger (square works best for puzzle)
- Format: JPG or PNG

### Level 2 - Adventure Photos
**Location:** `public/images/level2/`
- Add photos from your first date, first trip, or adventures together
- Name them: `adventure1.jpg`, `adventure2.jpg`, `adventure3.jpg`, etc.
- Recommended: 2-5 photos
- Format: JPG or PNG
- Recommended size: 1200x800px or similar

### Level 3 - Inside Jokes & Funny Moments
**Location:** `public/images/level3/`
- Add photos of funny moments, inside jokes, or silly times together
- Name them: `joke1.jpg`, `joke2.jpg`, `joke3.jpg`, etc.
- Recommended: 2-4 photos
- Format: JPG or PNG

### Level 4 - Love Reasons
**No photos needed** - This level uses the constellation challenge with messages

### Level 5 - Favorite Things
**Location:** `public/images/level5/`
- Add photos of her favorite things, hobbies, or things she loves
- Name them: `thing1.jpg`, `thing2.jpg`, etc.
- Recommended: 2-3 photos
- Format: JPG or PNG

### Level 6 - Milestones
**Location:** `public/images/level6/`
- Add photos of important milestones in your relationship
- Name them: `milestone1.jpg`, `milestone2.jpg`, etc.
- Recommended: 2-4 photos
- Format: JPG or PNG

## Tips

1. **Image Optimization**: 
   - Keep file sizes under 2MB each for faster loading
   - Use JPG for photos, PNG for graphics with transparency

2. **Naming Convention**:
   - Use lowercase letters
   - Use numbers (1, 2, 3) not words (one, two, three)
   - Keep file extensions (.jpg, .png)

3. **If You Don't Have Photos Yet**:
   - The game will still work without photos
   - You can add placeholder images or use stock photos temporarily
   - Update the paths in `src/data/gameData.ts` when ready

4. **Testing**:
   - After adding photos, test each level to make sure images load
   - Check both desktop and mobile views

## Current File Structure

```
public/
└── images/
    ├── level1/
    │   └── first-photo.jpg  ← Add your first photo here
    ├── level2/
    │   ├── adventure1.jpg    ← Add adventure photos here
    │   └── adventure2.jpg
    ├── level3/
    │   ├── joke1.jpg        ← Add funny moment photos here
    │   └── joke2.jpg
    ├── level5/
    │   ├── thing1.jpg       ← Add favorite things photos here
    │   └── thing2.jpg
    └── level6/
        ├── milestone1.jpg   ← Add milestone photos here
        └── milestone2.jpg
```

## Need Help?

If images aren't showing:
1. Check that file names match exactly (case-sensitive)
2. Verify files are in the correct folders
3. Make sure file extensions are correct (.jpg not .jpeg)
4. Check the browser console for errors

