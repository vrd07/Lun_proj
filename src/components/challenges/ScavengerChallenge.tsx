import { useState } from 'react';
import { motion } from 'framer-motion';

interface ScavengerChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const ScavengerChallenge = ({ challenge, onComplete }: ScavengerChallengeProps) => {
  const [foundItems, setFoundItems] = useState<Set<number>>(new Set());
  const items = challenge.data.items || [];

  const handleItemFound = (index: number) => {
    setFoundItems(new Set([...foundItems, index]));

    if (foundItems.size + 1 === items.length) {
      setTimeout(() => onComplete(), 500);
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item: any, index: number) => (
          <motion.div
            key={index}
            onClick={() => handleItemFound(index)}
            className={`
              p-6 rounded-lg cursor-pointer text-center transition-all
              ${
                foundItems.has(index)
                  ? 'bg-romantic-rose text-white'
                  : 'bg-white/50 hover:bg-white/70'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {foundItems.has(index) ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-4xl mb-2"
              >
                ✅
              </motion.div>
            ) : (
              <div className="text-4xl mb-2">🔍</div>
            )}
            <div className="font-bold">{item.name}</div>
            <div className="text-sm mt-2">{item.hint}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center text-romantic-purple">
        Found {foundItems.size} of {items.length} items
      </div>
    </div>
  );
};

export default ScavengerChallenge;

