
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const headerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 dark:bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold ml-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Emprise Study
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
          >
            <ul className="flex space-x-1">
              {headerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative group ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                        location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button 
              size="sm" 
              className="ml-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full"
              onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Get Consultation
            </Button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-foreground p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden py-4 bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-3">
              {headerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  className="w-full mt-3 bg-gradient-to-r from-primary to-blue-600 text-white"
                  onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
