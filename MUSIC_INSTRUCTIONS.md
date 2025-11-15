# Background Music Instructions 🎵

## Adding Background Music

### Step 1: Prepare Your Music File

1. **Format**: MP4/M4A is recommended (smaller file size!)
   - **MP4/M4A**: Smaller file size, works great (your 4.7 MB file is perfect!)
   - **MP3**: Also supported, but often larger file size
   - Alternative formats: OGG, WAV
   - All formats work on modern browsers

2. **File Size**: 
   - Keep under 5MB for faster loading
   - **MP4 is often smaller than MP3** - use MP4 if you have it!
   - Consider using a shorter loop (30-60 seconds) that repeats
   - Or use a full song (2-4 minutes)

3. **Music Selection**:
   - Choose a romantic, soft background music
   - Instrumental works best (no lyrics to distract)
   - Consider: piano, acoustic guitar, soft orchestral
   - Or use "your song" - a song that's special to both of you

### Step 2: Add the File

1. **Location**: Place your music file here:
   ```
   public/audio/background.mp4
   ```
   (or `background.mp3` if using MP3 format)

2. **Naming**: The file must be named exactly:
   - `background.mp4` (for MP4/M4A files - recommended, smaller size!)
   - `background.mp3` (for MP3 files - also supported)
   - All lowercase

3. **File Path**: The game is already configured to use:
   - `/audio/background.mp4` (or `/audio/background.mp3`)

### Step 3: Test

1. Run the development server: `npm run dev`
2. The music should start playing automatically on the landing page
3. Use the volume control to adjust
4. Toggle the music on/off with the speaker icon

## Music Controls

- **Toggle**: Click the 🔊/🔇 button to turn music on/off
- **Volume**: Use the slider to adjust volume (0-100%)
- **Auto-play**: Music starts automatically when the page loads
- **Loop**: Music repeats automatically

## If Music Doesn't Play

1. **Check File Location**: 
   - File should be at `public/audio/background.mp4` (or `background.mp3`)
   - Not in `src/audio/` or anywhere else

2. **Check File Format**:
   - MP4/M4A format is supported and recommended (smaller file size!)
   - MP3 format is also supported
   - The game will automatically try both formats

3. **Browser Settings**:
   - Some browsers block autoplay
   - User may need to interact with page first
   - Check browser console for errors

4. **File Size**:
   - Very large files may take time to load
   - Consider compressing the audio file

## Alternative: No Background Music

If you don't want background music:
1. Simply don't add the file
2. The game will work fine without it
3. The music controls will still appear but won't play anything

## Recommended Music Sources

- Royalty-free music: Incompetech, Bensound, Free Music Archive
- Your special song: Convert to MP3 if needed
- Create a custom mix: Combine multiple songs into one file

## File Conversion

If you need to convert audio formats:
- Online: CloudConvert, Online-Convert
- Desktop: Audacity (free), VLC Media Player
- Command line: ffmpeg

## Current Configuration

The music player is configured in:
- `src/components/MusicPlayer.tsx` - Audio player component
- `src/pages/LandingPage.tsx` - Music controls
- `src/store/gameStore.ts` - Music state management

No code changes needed - just add your `background.mp3` file!

