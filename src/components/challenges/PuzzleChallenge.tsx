import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PuzzleChallengeProps {
  challenge: any;
  onComplete: () => void;
}

const PuzzleChallenge = ({ challenge, onComplete }: PuzzleChallengeProps) => {
  const [pieces, setPieces] = useState<number[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const gridSize = Math.sqrt(challenge.data.pieces || 9);
  // Always use JPG, not SVG - fix for cached data
  let imageUrl = challenge.data.image || '/images/level1/first-photo.jpg';
  // Replace any old SVG references with JPG
  if (imageUrl.includes('.svg')) {
    imageUrl = imageUrl.replace('.svg', '.jpg');
  }

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error('Failed to load puzzle image:', imageUrl);
      setImageLoaded(true); // Still show puzzle even if image fails
    };
  }, [imageUrl]);

  useEffect(() => {
    // Initialize puzzle pieces in random order
    const shuffled = Array.from({ length: challenge.data.pieces || 9 }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );
    setPieces(shuffled);
  }, [challenge.data.pieces]);

  const handlePieceClick = (index: number) => {

    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      // Swap pieces
      const newPieces = [...pieces];
      [newPieces[selectedPiece], newPieces[index]] = [
        newPieces[index],
        newPieces[selectedPiece],
      ];
      setPieces(newPieces);
      setSelectedPiece(null);

      // Check if puzzle is solved
      if (newPieces.every((piece, idx) => piece === idx)) {
        setTimeout(() => onComplete(), 500);
      }
    }
  };

  return (
    <div className="bg-white/30 glass-effect rounded-2xl p-8">
      <h2 className="text-2xl font-romantic text-romantic-rose mb-4 text-center">
        {challenge.instructions}
      </h2>
      {!imageLoaded && (
        <div className="text-center mb-4 text-romantic-purple">
          Loading your beautiful photo... 💕
        </div>
      )}
      <div
        className="grid gap-2 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: '400px',
        }}
      >
        {pieces.map((piece, index) => (
          <motion.div
            key={index}
            onClick={() => handlePieceClick(index)}
            className={`
              aspect-square border-2 rounded-lg cursor-pointer flex items-center justify-center
              ${selectedPiece === index ? 'border-romantic-rose border-4' : 'border-white'}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundImage: imageLoaded ? `url(${imageUrl})` : 'none',
              backgroundSize: `${gridSize * 100}%`,
              backgroundPosition: `${
                (piece % gridSize) * (100 / (gridSize - 1))
              }% ${Math.floor(piece / gridSize) * (100 / (gridSize - 1))}%`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: imageLoaded ? 'transparent' : '#f0f0f0',
            }}
          >
            {piece === index && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl"
              >
                ✓
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleChallenge;

