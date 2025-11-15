import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CertificateRewardProps {
  content: any;
}

const CertificateReward = ({ content }: CertificateRewardProps) => {
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center relative">
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                repeat: 2,
              }}
              className="absolute top-1/2 left-1/2 text-4xl"
            >
              ✨
            </motion.div>
          ))}
        </div>
      )}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="bg-gradient-to-br from-romantic-rose to-romantic-purple rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl"
      >
        <div className="bg-white rounded-lg p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl mb-4"
          >
            🏆
          </motion.div>
          <h3 className="text-3xl font-romantic text-romantic-rose mb-4">
            {content.certificate || 'Certificate of Love'}
          </h3>
          <div className="border-t-2 border-romantic-purple my-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-romantic-purple font-romantic leading-relaxed"
          >
            {content.message}
          </motion.p>
          <div className="border-t-2 border-romantic-purple my-6"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-4xl mb-6"
          >
            💕 Forever & Always 💕
          </motion.div>
          {content.specialGifts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-6 p-6 bg-gradient-to-br from-lily-pink/30 to-tulip-pink/30 rounded-lg border-2 border-tulip-pink/50"
            >
              <p className="text-2xl font-bold text-romantic-rose mb-4 flex items-center justify-center gap-2">
                <span>🌷</span> Your Special Gifts <span>💐</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.specialGifts.map((gift: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, type: 'spring' }}
                    className="text-center p-3 bg-white/50 rounded-lg"
                  >
                    <div className="text-3xl mb-1">{gift}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CertificateReward;

