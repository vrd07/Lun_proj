import { useState } from 'react';
import { motion } from 'framer-motion';

interface MazeChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const MazeChallenge = ({ challenge, onComplete }: MazeChallengeProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [reachedEnd, setReachedEnd] = useState(false);
  const gridSize = 10;

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition((prev) => {
      const newPos = { ...prev };
      switch (direction) {
        case 'up':
          newPos.y = Math.max(0, prev.y - 1);
          break;
        case 'down':
          newPos.y = Math.min(gridSize - 1, prev.y + 1);
          break;
        case 'left':
          newPos.x = Math.max(0, prev.x - 1);
          break;
        case 'right':
          newPos.x = Math.min(gridSize - 1, prev.x + 1);
          break;
      }

      // Check if reached end (bottom right)
      if (newPos.x === gridSize - 1 && newPos.y === gridSize - 1) {
        setReachedEnd(true);
        setTimeout(() => onComplete(), 1000);
      }

      return newPos;
    });
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div
          className="grid gap-1 border-2 border-romantic-rose p-2 rounded-lg"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: '400px',
            height: '400px',
          }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);
            const isPlayer = position.x === x && position.y === y;
            const isEnd = x === gridSize - 1 && y === gridSize - 1;

            return (
              <div
                key={index}
                className={`
                  aspect-square border border-romantic-purple/30 rounded
                  ${isPlayer ? 'bg-romantic-rose' : isEnd ? 'bg-green-400' : 'bg-white/50'}
                  flex items-center justify-center
                `}
              >
                {isPlayer && <span className="text-2xl">💖</span>}
                {isEnd && !isPlayer && <span className="text-2xl">💍</span>}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-2 w-64">
          <div></div>
          <motion.button
            onClick={() => handleMove('up')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-romantic-rose text-white p-3 rounded-lg text-xl"
          >
            ↑
          </motion.button>
          <div></div>
          <motion.button
            onClick={() => handleMove('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-romantic-rose text-white p-3 rounded-lg text-xl"
          >
            ←
          </motion.button>
          <div></div>
          <motion.button
            onClick={() => handleMove('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-romantic-rose text-white p-3 rounded-lg text-xl"
          >
            →
          </motion.button>
          <div></div>
          <motion.button
            onClick={() => handleMove('down')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-romantic-rose text-white p-3 rounded-lg text-xl"
          >
            ↓
          </motion.button>
          <div></div>
        </div>
        {reachedEnd && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl text-romantic-rose font-bold"
          >
            You found our future! 💕
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default MazeChallenge;

