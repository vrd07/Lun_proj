import { motion } from 'framer-motion';

interface FloatingHeartProps {
  delay: number;
}

const FloatingHeart = ({ delay }: FloatingHeartProps) => {
  const x = Math.random() * 100;
  const duration = 10 + Math.random() * 10;

  return (
    <motion.div
      initial={{ y: '100vh', x: `${x}vw`, opacity: 0 }}
      animate={{
        y: '-10vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute text-2xl pointer-events-none"
    >
      {Math.random() > 0.5 ? '💖' : Math.random() > 0.5 ? '🌷' : '💐'}
    </motion.div>
  );
};

export default FloatingHeart;

