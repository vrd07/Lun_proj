import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PoemRewardProps {
  content: any;
}

const PoemReward = ({ content }: PoemRewardProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = content.message || 'A beautiful poem for you...';
  const words = fullText.split(' ');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedText(words.slice(0, currentIndex + 1).join(' '));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white/50 rounded-lg p-8 max-w-2xl mx-auto"
      >
        <p className="text-2xl text-romantic-purple font-romantic leading-relaxed italic mb-4">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-6 bg-romantic-rose ml-1"
          />
        </p>
        {content.specialGifts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.1 + 0.5 }}
            className="mt-6 p-4 bg-lily-pink/20 rounded-lg border-2 border-tulip-pink/30"
          >
            <p className="text-lg font-bold text-romantic-rose mb-2">Special Gifts for You:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {content.specialGifts.map((gift: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: words.length * 0.1 + 0.6 + index * 0.1 }}
                  className="text-2xl"
                >
                  {gift}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PoemReward;

