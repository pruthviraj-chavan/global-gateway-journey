
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-primary/10 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/20"
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -left-10 w-32 h-32 rounded-full bg-accent/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.2, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerAnimation}
        >
          {/* Company Information */}
          <motion.div variants={itemAnimation}>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Emprise Study
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Your gateway to global education. Expert guidance for studying abroad, with specialized focus on MBBS in Russia, UK education, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'MBBS in Russia', 
                'Study in UK', 
                'IELTS Coaching', 
                'Visa Assistance',
                'Scholarship Guidance'
              ].map((item, index) => (
                <li key={index}>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemAnimation}>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Survey No. 858, E Ward, Samruddhi Building, Lane No. 6, Shahupuri, Kolhapur - 416001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+918788312094" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8788312094
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@emprisestudyabroad.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@emprisestudyabroad.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Emprise Study Abroad. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
