import { motion } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white/20 rounded-full h-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-romantic-rose to-romantic-purple rounded-full"
      />
    </div>
  );
};

export default ProgressBar;

