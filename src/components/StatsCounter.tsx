
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({ value, label, prefix = '', suffix = '', icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // ms
    const step = Math.ceil(value / (duration / 16)); // 16ms per frame (60fps)
    
    const counter = setInterval(() => {
      start += step;
      if (start > value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(counter);
  }, [value, isInView]);
  
  return (
    <motion.div 
      ref={ref}
      className="glass-card p-6 rounded-2xl flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-4xl font-bold mb-1 flex items-center justify-center">
        <span>{prefix}</span>
        <span>{count}</span>
        <span>{suffix}</span>
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

interface StatsCounterProps {
  stats: StatProps[];
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCounter;
