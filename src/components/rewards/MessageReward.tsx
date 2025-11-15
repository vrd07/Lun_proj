import { motion } from 'framer-motion';

interface MessageRewardProps {
  content: any;
}

const MessageReward = ({ content }: MessageRewardProps) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/50 rounded-lg p-8 max-w-2xl mx-auto"
      >
        <p className="text-2xl text-romantic-purple font-romantic leading-relaxed">
          {content.message || content}
        </p>
      </motion.div>
    </div>
  );
};

export default MessageReward;

