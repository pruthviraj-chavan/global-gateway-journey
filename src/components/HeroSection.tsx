
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  typingTexts?: string[];
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  typingTexts = [],
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCta
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animated background with floating elements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class FloatingElement {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        
        // Blue tones
        const hue = 210 + Math.random() * 30;
        const saturation = 70 + Math.random() * 30;
        const lightness = 70 + Math.random() * 30;
        
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = 0.1 + Math.random() * 0.3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Draw a subtle glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.radius * 4
        );
        
        gradient.addColorStop(0, `hsla(210, 100%, 80%, ${this.opacity})`);
        gradient.addColorStop(1, 'hsla(210, 100%, 80%, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    const elements: FloatingElement[] = [];
    const numberOfElements = Math.min(Math.max(window.innerWidth / 15, 20), 100);
    
    for (let i = 0; i < numberOfElements; i++) {
      elements.push(new FloatingElement());
    }
    
    const connectElements = () => {
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            if (!ctx) return;
            
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(elements[j].x, elements[j].y);
            
            const opacity = 0.15 * (1 - distance / 100);
            ctx.strokeStyle = `rgba(100, 150, 250, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      elements.forEach(element => {
        element.update();
        element.draw();
      });
      
      connectElements();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden hero-gradient py-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {typingTexts.length > 0 && (
            <motion.div
              className="my-8 h-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedText 
                texts={typingTexts} 
                className="text-xl md:text-2xl font-medium text-primary"
              />
            </motion.div>
          )}
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to={ctaLink} 
              className="primary-button flex items-center justify-center"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            {secondaryCta && (
              <Link 
                to={secondaryCta.link} 
                className="secondary-button"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
