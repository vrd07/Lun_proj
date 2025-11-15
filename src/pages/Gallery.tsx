import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { gameData } from '../data/gameData';

const Gallery = () => {
  const navigate = useNavigate();
  const { levels, progress } = useGameStore();
  const completedLevels = levels.filter((level) => level.completed);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => navigate('/levels')}
            className="text-romantic-rose hover:text-romantic-purple mb-4 text-lg"
          >
            ← Back to Levels
          </button>
          <h1 className="text-5xl font-romantic text-romantic-rose mb-4 text-shadow">
            Memory Gallery
          </h1>
          <p className="text-xl text-romantic-purple">
            All your unlocked memories and rewards
          </p>
        </motion.div>

        {/* Completed Levels */}
        {completedLevels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-romantic-purple">
              Complete levels to unlock memories here!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedLevels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/30 glass-effect rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => navigate(`/level/${level.id}`)}
              >
                <div className="text-4xl mb-4 text-center">
                  {getLevelEmoji(level.id)}
                </div>
                <h3 className="text-2xl font-romantic text-romantic-rose mb-2 text-center">
                  {level.title}
                </h3>
                <p className="text-romantic-purple text-center">
                  {level.description}
                </p>
                <div className="mt-4 text-center text-romantic-rose">
                  Click to revisit →
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements Section */}
        {progress.achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-romantic text-romantic-rose mb-6 text-center">
              Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {progress.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/30 glass-effect rounded-lg p-4 text-center"
                >
                  <div className="text-4xl mb-2">🏆</div>
                  <p className="text-romantic-purple">{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const getLevelEmoji = (levelId: number) => {
  const emojis = ['💑', '🌍', '😂', '💕', '🎁', '⭐', '💍'];
  return emojis[levelId - 1] || '💖';
};

export default Gallery;

