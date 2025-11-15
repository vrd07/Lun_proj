import { motion } from 'framer-motion';

interface SparkleProps {
  x: number;
  y: number;
}

const Sparkle = ({ x, y }: SparkleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2 }}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      ✨
    </motion.div>
  );
};

export default Sparkle;

