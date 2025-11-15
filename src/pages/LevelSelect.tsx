import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import ProgressBar from '../components/ProgressBar';
import LockIcon from '../components/LockIcon';

const LevelSelect = () => {
  const navigate = useNavigate();
  const { levels, progress } = useGameStore();

  const completedCount = progress.completedLevels.length;
  const totalLevels = levels.length;
  const progressPercentage = (completedCount / totalLevels) * 100;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-romantic text-romantic-rose mb-4 text-shadow">
            Your Journey Awaits
          </h1>
          <ProgressBar percentage={progressPercentage} />
          <p className="text-xl text-romantic-purple mt-4">
            {completedCount} of {totalLevels} levels completed
          </p>
        </motion.div>

        {/* Level Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {levels.map((level, index) => (
            <LevelCard
              key={level.id}
              level={level}
              index={index}
              onClick={() => {
                if (level.unlocked) {
                  navigate(`/level/${level.id}`);
                }
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/gallery')}
            className="text-romantic-rose hover:text-romantic-purple text-xl underline"
          >
            View Gallery 🖼️
          </button>
        </div>
      </div>
    </div>
  );
};

interface LevelCardProps {
  level: any;
  index: number;
  onClick: () => void;
}

const LevelCard = ({ level, index, onClick }: LevelCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`
        relative p-6 rounded-2xl cursor-pointer transition-all duration-300
        ${level.unlocked
          ? 'bg-white/30 glass-effect hover:bg-white/40 hover:scale-105'
          : 'bg-gray-300/20 opacity-50 cursor-not-allowed'
        }
      `}
    >
      {!level.unlocked && (
        <div className="absolute top-4 right-4">
          <LockIcon />
        </div>
      )}
      
      {level.completed && (
        <div className="absolute top-4 left-4 text-2xl">✅</div>
      )}

      <div className="text-center">
        <div className="text-4xl mb-4">{getLevelEmoji(level.id)}</div>
        <h3 className="text-2xl font-romantic text-romantic-rose mb-2">
          {level.title}
        </h3>
        <p className="text-romantic-purple">{level.description}</p>
      </div>
    </motion.div>
  );
};

const getLevelEmoji = (levelId: number) => {
  const emojis = ['💑', '🌍', '😂', '💕', '🎁', '⭐', '💍'];
  return emojis[levelId - 1] || '💖';
};

export default LevelSelect;

