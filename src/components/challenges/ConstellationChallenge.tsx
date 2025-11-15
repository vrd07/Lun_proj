import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ConstellationChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const ConstellationChallenge = ({
  challenge,
  onComplete,
}: ConstellationChallengeProps) => {
  const [connectedStars, setConnectedStars] = useState<Set<number>>(new Set());
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const messages = challenge.data.messages || [];
  const starCount = challenge.data.stars || 8;

  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    x: 50 + 40 * Math.cos((2 * Math.PI * i) / starCount),
    y: 50 + 40 * Math.sin((2 * Math.PI * i) / starCount),
    message: messages[i] || `Reason ${i + 1} why I love you`,
  }));

  const handleStarClick = (starId: number) => {
    if (connectedStars.has(starId)) return;

    setConnectedStars(new Set([...connectedStars, starId]));
    setCurrentPath([...currentPath, starId]);

    if (connectedStars.size + 1 === starCount) {
      setTimeout(() => onComplete(), 1000);
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="relative" style={{ height: '500px' }} ref={canvasRef}>
        {stars.map((star, index) => (
          <motion.div
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            className="absolute cursor-pointer"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`
                text-4xl transition-all
                ${connectedStars.has(star.id) ? 'animate-sparkle' : ''}
              `}
            >
              {connectedStars.has(star.id) ? '⭐' : '✨'}
            </div>
            {connectedStars.has(star.id) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-2 bg-white/90 rounded-lg text-sm text-center z-10"
              >
                {star.message}
              </motion.div>
            )}
          </motion.div>
        ))}
        {/* Draw lines between connected stars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {currentPath.slice(0, -1).map((starId, index) => {
            const start = stars[starId];
            const end = stars[currentPath[index + 1]];
            if (!start || !end) return null;
            return (
              <line
                key={`${starId}-${currentPath[index + 1]}`}
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                stroke="#FF69B4"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>
      </div>
      <div className="mt-4 text-center text-romantic-purple">
        {connectedStars.size} of {starCount} stars connected
      </div>
    </div>
  );
};

export default ConstellationChallenge;

