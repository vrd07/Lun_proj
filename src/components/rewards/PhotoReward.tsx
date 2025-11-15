import { motion } from 'framer-motion';

interface PhotoRewardProps {
  content: any;
}

const PhotoReward = ({ content }: PhotoRewardProps) => {
  return (
    <div className="text-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={content.image || '/images/placeholder.jpg'}
        alt="Memory"
        className="max-w-full h-auto rounded-lg shadow-2xl mb-6 mx-auto"
        style={{ maxHeight: '400px' }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-romantic-purple font-romantic italic mb-4"
      >
        {content.message}
      </motion.p>
      {content.specialGifts && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 bg-lily-pink/20 rounded-lg border-2 border-tulip-pink/30"
        >
          <p className="text-lg font-bold text-romantic-rose mb-2">Special Gifts for You:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {content.specialGifts.map((gift: string, index: number) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
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

export default PhotoReward;

