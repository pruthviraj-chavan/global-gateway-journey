
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  cursor?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  texts, 
  className = "", 
  delay = 3000,
  cursor = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length;
        return newIndex;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [texts, delay]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-6 ml-1 bg-primary"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </div>
  );
};

export default AnimatedText;
