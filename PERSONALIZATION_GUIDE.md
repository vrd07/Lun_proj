# Personalization Guide for Lun 💕🌷

This guide will help you customize the game with your personal memories and stories for Lun.

## ✅ Already Customized

- **Name**: Set to "Lun" 
- **Flower Theme**: Lilies and Tulips incorporated throughout
- **Special Gifts**: Added to rewards (Teddy Bear, Puppy, Dress, Chocolates, Belgium Waffles, Hugs)
- **Color Theme**: Soft pink like tulips (#FFB6E1)

## Step 1: Add Photos (See PHOTO_INSTRUCTIONS.md for details)

All photo paths are set up with placeholder instructions. Just add your photos to the folders!

## Step 2: Add Your Photos

### Level 1 - First Photo
- Add your first photo together to: `public/images/level1/first-photo.jpg`
- Update the path in `gameData.ts` if using a different filename

### Level 2 - Adventures
- Add photos from your first date/trip to: `public/images/level2/`
- Name them: `adventure1.jpg`, `adventure2.jpg`, etc.
- Update the array in `gameData.ts`

### Level 3 - Inside Jokes
- Add funny photos/moments to: `public/images/level3/`
- Name them: `joke1.jpg`, `joke2.jpg`, etc.

### Level 4 - Love Reasons
- No photos needed, but customize the messages in `loveReasons` array

### Level 5 - Favorite Things
- Add photos of her favorite things to: `public/images/level5/`
- Update the items in the scavenger challenge

### Level 6 - Milestones
- Add milestone photos to: `public/images/level6/`
- Name them: `milestone1.jpg`, `milestone2.jpg`, etc.

## Step 3: Customize Messages

### First Meeting Message
Update `messages.firstMeeting` with your actual first meeting story.

### Love Reasons
Update the `loveReasons` array with 8 reasons you love her (these appear in the constellation challenge).

### Future Plans
Update `messages.futurePlans` with your message for the final level.

## Step 4: Customize Challenges

### Level 1 - Puzzle
- The puzzle uses your first photo automatically
- Adjust `pieces: 9` for a different puzzle size (4, 9, 16, 25)

### Level 2 - Timeline
- Update the `events` array with your actual dates and descriptions
- Make sure they're in the correct chronological order

### Level 3 - Trivia
- Replace the placeholder questions with your actual inside jokes
- Update the options and correct answers

### Level 4 - Constellation
- The number of stars matches the number of love reasons
- Each star reveals one reason when clicked

### Level 5 - Scavenger Hunt
- Update the `items` array with her actual favorite things
- Customize the hints

### Level 6 - Rhythm
- Adjust `beats: 10` for difficulty
- The pattern is randomly generated each time

### Level 7 - Maze
- The maze is automatically generated
- The heart shape is symbolic

## Step 5: Add Background Music (See MUSIC_INSTRUCTIONS.md for details)

1. Add your background music file to: `public/audio/background.mp3`
2. The music will automatically play (can be toggled)
3. Supported formats: MP3, OGG, WAV
4. Detailed instructions in `MUSIC_INSTRUCTIONS.md`

## Step 6: Test Everything

1. Run `npm run dev`
2. Test each level
3. Verify all photos load correctly
4. Check that messages display properly
5. Test the cheat code (click gift box 10 times)

## Tips

- **Image Sizes**: Keep images under 2MB for faster loading
- **Image Formats**: Use JPG for photos, PNG for graphics
- **Music**: Keep background music under 5MB
- **Messages**: Keep messages concise but heartfelt
- **Testing**: Test on mobile devices too!

## Quick Reference

| Level | Challenge Type | What to Customize |
|-------|---------------|------------------|
| 1 | Puzzle | First photo, first meeting message |
| 2 | Timeline | Adventure photos, timeline events |
| 3 | Trivia | Inside joke photos, trivia questions |
| 4 | Constellation | Love reasons (8 messages) + 🌷💐 Lilies & Tulips, 🍫 Chocolates, 🤗 Hugs |
| 5 | Scavenger | Favorite things photos, items list + 👗 Cute Dress, 🐶 Puppy, 🤗 Hugs |
| 6 | Rhythm | Milestone photos + 🧇 Belgium Waffles, 🍫 Chocolates, 🤗 Hugs |
| 7 | Maze | Final message, certificate text + All special gifts! |

## Need Help?

If you get stuck:
1. Check the console for errors
2. Verify all file paths are correct
3. Make sure images are in the right folders
4. Check that file names match exactly (case-sensitive)

Happy customizing! 💕

