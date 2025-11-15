import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PhotoReward from './rewards/PhotoReward';
import GalleryReward from './rewards/GalleryReward';
import MessageReward from './rewards/MessageReward';
import PoemReward from './rewards/PoemReward';
import CertificateReward from './rewards/CertificateReward';

interface RewardDisplayProps {
  reward: any;
  onContinue: () => void;
}

const RewardDisplay = ({ reward, onContinue }: RewardDisplayProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  const renderReward = () => {
    switch (reward.type) {
      case 'photo':
        return <PhotoReward content={reward.content} />;
      case 'gallery':
        return <GalleryReward content={reward.content} />;
      case 'message':
        return <MessageReward content={reward.content} />;
      case 'poem':
        return <PoemReward content={reward.content} />;
      case 'certificate':
        return <CertificateReward content={reward.content} />;
      default:
        return <div>Reward unlocked!</div>;
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="text-6xl mb-6"
      >
        🎉
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-romantic text-romantic-rose mb-8 text-center"
      >
        Reward Unlocked!
      </motion.h2>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          {renderReward()}
        </motion.div>
      )}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onContinue}
        className="mt-8 bg-romantic-rose text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-romantic-purple transition-colors"
      >
        Continue Journey →
      </motion.button>
    </div>
  );
};

export default RewardDisplay;

