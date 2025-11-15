# How to Clear Cache and Fix Image Issues

If you're seeing errors about `.svg` files when you've uploaded `.jpg` files, it's because your browser has cached the old data.

## Quick Fix - Clear Browser Storage

1. **Open Browser Console:**
   - Press `F12` (or `Cmd+Option+I` on Mac)
   - Go to the "Console" tab

2. **Clear LocalStorage:**
   - Type this in the console and press Enter:
   ```javascript
   localStorage.clear()
   ```

3. **Refresh the Page:**
   - Press `F5` or `Ctrl+R` (or `Cmd+R` on Mac)

## Alternative Method

1. **Open Developer Tools:**
   - Press `F12`

2. **Go to Application Tab:**
   - Click "Application" (Chrome) or "Storage" (Firefox)
   - Find "Local Storage" in the left sidebar
   - Click on your website URL
   - Find the key `unlock-my-heart-storage`
   - Right-click and delete it

3. **Refresh the Page**

## After Clearing

The game will reset to use the new image paths. Your progress will be reset, but all levels will be unlocked again (or you can use the cheat code to unlock them).

