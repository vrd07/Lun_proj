import { useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const TimelineChallenge = ({ challenge, onComplete }: TimelineChallengeProps) => {
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const events = challenge.data.events || [];

  const handleEventClick = (index: number) => {
    if (selectedOrder.includes(index)) {
      setSelectedOrder(selectedOrder.filter((i) => i !== index));
    } else {
      setSelectedOrder([...selectedOrder, index]);
    }
  };

  const checkAnswer = () => {
    // Simple check: if all events are selected in order
    if (selectedOrder.length === events.length) {
      setTimeout(() => onComplete(), 500);
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-6 text-center">
        {challenge.instructions}
      </h2>
      <div className="space-y-4 mb-6">
        {events.map((event: any, index: number) => (
          <motion.div
            key={index}
            onClick={() => handleEventClick(index)}
            className={`
              p-4 rounded-lg cursor-pointer transition-all
              ${
                selectedOrder.includes(index)
                  ? 'bg-romantic-rose text-white'
                  : 'bg-white/50 hover:bg-white/70'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">
                {selectedOrder.indexOf(index) !== -1
                  ? `${selectedOrder.indexOf(index) + 1}.`
                  : '○'}
              </div>
              <div>
                <div className="font-bold">{event.date}</div>
                <div className="text-sm">{event.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={checkAnswer}
        disabled={selectedOrder.length !== events.length}
        className="w-full bg-romantic-rose text-white py-3 rounded-lg font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-romantic-purple transition-colors"
      >
        Check Answer
      </button>
    </div>
  );
};

export default TimelineChallenge;

