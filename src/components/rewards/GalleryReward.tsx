import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryRewardProps {
  content: any;
}

const GalleryReward = ({ content }: GalleryRewardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = content.images || [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="text-center">
        <p className="text-xl text-romantic-purple">{content.message}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="mb-6"
        >
          <img
            src={images[currentIndex] || '/images/placeholder.jpg'}
            alt={`Memory ${currentIndex + 1}`}
            className="max-w-full h-auto rounded-lg shadow-2xl mx-auto"
            style={{ maxHeight: '400px' }}
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              title={`Go to image ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-romantic-rose' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl text-romantic-purple font-romantic italic mb-4"
      >
        {content.message}
      </motion.p>
      {content.specialGifts && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-4 bg-lily-pink/20 rounded-lg border-2 border-tulip-pink/30"
        >
          <p className="text-lg font-bold text-romantic-rose mb-2">Special Gifts for You:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {content.specialGifts.map((gift: string, index: number) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-2xl"
              >
                {gift}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryReward;

