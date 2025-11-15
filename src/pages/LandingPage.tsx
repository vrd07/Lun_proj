import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { personalData } from '../data/gameData';
import FloatingHeart from '../components/FloatingHeart';
import Sparkle from '../components/Sparkle';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const toggleMusic = useGameStore((state) => state.toggleMusic);
  const musicEnabled = useGameStore((state) => state.musicEnabled);
  const setMusicVolume = useGameStore((state) => state.setMusicVolume);
  const musicVolume = useGameStore((state) => state.musicVolume);
  const unlockAllLevels = useGameStore((state) => state.unlockAllLevels);
  const [giftClicks, setGiftClicks] = useState(0);
  const [showCheatMessage, setShowCheatMessage] = useState(false);

  useEffect(() => {
    // Create sparkles
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 500);

    setTimeout(() => setShowButton(true), 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (giftClicks >= 10) {
      unlockAllLevels();
      setShowCheatMessage(true);
      setTimeout(() => setShowCheatMessage(false), 3000);
    }
  }, [giftClicks, unlockAllLevels]);

  useEffect(() => {
    // Remove old sparkles
    const timeout = setTimeout(() => {
      setSparkles((prev) => prev.slice(-20));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [sparkles]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts and Flowers */}
      {[...Array(20)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.3} />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} x={sparkle.x} y={sparkle.y} />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center z-10 px-4"
      >
        {/* Gift Box */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mb-8 cursor-pointer"
          onClick={() => setGiftClicks((prev) => prev + 1)}
        >
          <div className="text-8xl mb-4">🎁</div>
        </motion.div>
        {showCheatMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 bg-romantic-rose text-white p-4 rounded-lg shadow-lg z-50"
          >
            All levels unlocked! 🎉
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-romantic text-romantic-rose mb-4 text-shadow"
        >
          I Have Something Special
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl md:text-5xl font-romantic text-romantic-purple mb-8 text-shadow"
        >
          For You, {personalData.herName}...
        </motion.h2>

        {/* Start Button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/levels')}
            className="bg-romantic-rose text-white px-12 py-4 rounded-full text-2xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 animate-heartbeat"
          >
            Start Your Journey 💕
          </motion.button>
        )}

        {/* Music Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={toggleMusic}
            className="text-2xl hover:scale-110 transition-transform"
          >
            {musicEnabled ? '🔊' : '🔇'}
          </button>
          <label htmlFor="volume-control" className="sr-only">
            Music Volume
          </label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={musicVolume}
            onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
            className="w-32"
            aria-label="Music Volume"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;

