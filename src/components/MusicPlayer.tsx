import { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  volume: number;
  enabled: boolean;
}

const MusicPlayer = ({ volume, enabled }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (enabled) {
        // Try to play, but handle autoplay restrictions
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented - user needs to interact first
            console.log('Music will start after user interaction');
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [enabled]);

  // Handle user interaction to start music
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && enabled && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // Ignore errors if still blocked
        });
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [enabled]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      className="hidden"
    >
      {/* Try MP4 first (smaller file size), then fallback to MP3 */}
      <source src="/audio/background.mp4" type="audio/mp4" />
      <source src="/audio/background.m4a" type="audio/mp4" />
      <source src="/audio/background.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;

