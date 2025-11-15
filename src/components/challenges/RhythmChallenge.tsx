import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface RhythmChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const RhythmChallenge = ({ challenge, onComplete }: RhythmChallengeProps) => {
  const [beats, setBeats] = useState<number[]>([]);
  const [userBeats, setUserBeats] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [patternShown, setPatternShown] = useState(false);
  const beatCount = challenge.data.beats || 5;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Generate random beat pattern
    const pattern = Array.from({ length: beatCount }, () =>
      Math.random() > 0.5 ? 1 : 0
    );
    setBeats(pattern);
  }, [beatCount]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startChallenge = () => {
    setIsPlaying(true);
    setCurrentBeat(0);
    setUserBeats([]);
    setPatternShown(false);

    // Play beat pattern - slower tempo for easier gameplay
    const tempo = challenge.data.tempo === 'slow' ? 800 : challenge.data.tempo === 'fast' ? 400 : 600;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentBeat((prev) => {
        if (prev >= beatCount - 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsPlaying(false);
          setPatternShown(true);
          return 0;
        }
        return prev + 1;
      });
    }, tempo);
  };

  const handleTap = () => {
    if (!isPlaying && patternShown) {
      const newBeats = [...userBeats, Date.now()];
      setUserBeats(newBeats);

      // Check if pattern matches (simplified - just need to tap the right number of times)
      if (newBeats.length >= beatCount) {
        setTimeout(() => onComplete(), 500);
      }
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="text-center mb-6">
        {!isPlaying && userBeats.length === 0 && (
          <button
            onClick={startChallenge}
            className="bg-romantic-rose text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-romantic-purple transition-colors"
          >
            Play Pattern
          </button>
        )}
        {isPlaying && (
          <div className="space-y-4">
            <div className="text-4xl animate-heartbeat">
              {beats[currentBeat] ? '💖' : '○'}
            </div>
            <p className="text-romantic-purple">Watch the pattern...</p>
          </div>
        )}
        {!isPlaying && patternShown && (
          <div className="space-y-4">
            <p className="text-xl text-romantic-purple mb-4">
              Now tap the button {beatCount} times to match the rhythm!
            </p>
            <motion.button
              onClick={handleTap}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-romantic-rose text-white px-12 py-6 rounded-full text-4xl font-bold hover:bg-romantic-purple transition-colors"
            >
              TAP
            </motion.button>
            <p className="text-romantic-purple mt-4 text-2xl">
              Taps: {userBeats.length} / {beatCount}
            </p>
            {userBeats.length > 0 && userBeats.length < beatCount && (
              <p className="text-romantic-rose text-sm mt-2">
                Keep tapping! 💕
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RhythmChallenge;

