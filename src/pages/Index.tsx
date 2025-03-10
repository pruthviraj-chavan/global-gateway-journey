import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, Award, BookOpen, PlaneTakeoff, FileCheck, ArrowRight, Users, Phone, Building, MapPin, BarChart, MessageCircle, CheckCircle } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const stats = [
    { value: 500, label: 'Students Placed', icon: <GraduationCap size={32} /> },
    { value: 20, label: 'Partner Universities', icon: <Award size={32} /> },
    { value: 15, label: 'Countries Covered', icon: <Globe size={32} /> }
  ];

  const services = [
    {
      title: 'MBBS in Russia',
      description: 'Study medicine at top Russian universities with affordable fees and quality education. Complete assistance with admissions and visa.',
      icon: <BookOpen className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'Study in UK',
      description: 'Pursue undergraduate and postgraduate programs in the UK with our guidance on university selection, applications, and scholarships.',
      icon: <PlaneTakeoff className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'IELTS Coaching',
      description: 'Comprehensive IELTS preparation with experienced trainers to help you achieve your target score and qualify for admissions abroad.',
      icon: <Award className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'Visa Assistance',
      description: 'Expert guidance for student visa applications with high success rates. We handle documentation and prepare you for visa interviews.',
      icon: <FileCheck className="h-10 w-10" />,
      link: '/services'
    }
  ];

  const additionalServices = [
    {
      title: 'Scholarship Guidance',
      description: 'Expert assistance in finding and applying for scholarships that can significantly reduce your education costs abroad.',
      icon: <BarChart className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'Accommodation Support',
      description: 'Help in finding suitable and affordable accommodation options near your university for a comfortable stay.',
      icon: <Building className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'Pre-departure Briefing',
      description: 'Comprehensive guidance sessions to prepare you for life in a new country, covering cultural differences, local customs, and more.',
      icon: <MessageCircle className="h-10 w-10" />,
      link: '/services'
    },
    {
      title: 'Post-landing Assistance',
      description: 'Continued support after you arrive in your study destination to help you settle in and navigate initial challenges.',
      icon: <MapPin className="h-10 w-10" />,
      link: '/services'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'MBBS Student in Russia',
      quote: 'Emprise Study Abroad made my dream of studying medicine abroad a reality. Their guidance throughout the admission process was invaluable.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'MBA Graduate from UK',
      quote: 'The team at Emprise was extremely professional and helped me secure a scholarship for my MBA in London. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=100&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Amit Desai',
      role: 'Engineering Student',
      quote: 'Their IELTS coaching was exceptional, and they guided me through every step of my application to study engineering in Canada.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop'
    }
  ];

  const features = [
    {
      title: 'Personalized Counseling',
      description: 'One-on-one sessions tailored to your academic background, career goals, and financial considerations.',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'University Selection',
      description: 'Expert guidance in choosing the right university based on your academic profile, budget, and career aspirations.',
      icon: <Building className="h-8 w-8" />
    },
    {
      title: 'Application Assistance',
      description: 'Complete support in preparing and submitting university applications with proper documentation.',
      icon: <FileCheck className="h-8 w-8" />
    },
    {
      title: 'Guaranteed Admissions',
      description: 'We ensure admissions in top universities worldwide with our extensive network and experience.',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const handleConsultation = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you shortly for a free consultation.",
    });
    // In a real app, this would submit data to a server or trigger a WhatsApp message
    window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-900/50">
      {/* Hero Section with Enhanced Animation */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <AnimatedBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/50 to-background" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
            alt="Students studying abroad"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">Global Education</span>
              </motion.h1>
              
              <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
                Empowering students to achieve their dreams of studying 
                <span className="block mt-1">
                  <AnimatedText 
                    texts={["MBBS in Russia", "in the UK", "in Canada", "with scholarships"]} 
                    className="text-primary font-semibold"
                  />
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="primary-button w-full sm:w-auto" 
                    onClick={handleConsultation}
                  >
                    Get a Free Consultation
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="secondary-button w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/services">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-background/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-block bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your Future Begins With Us
              </h2>
              
              <div className="space-y-4">
                {[
                  "Expert guidance from experienced consultants",
                  "Direct partnerships with reputable universities",
                  "Comprehensive support from application to visa",
                  "Affordable service fees with flexible payment options"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="mt-10 inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-neo relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                  alt="Students studying abroad" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-b from-background/80 to-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our Founder
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <img
                    src="/founder-image.jpg"
                    alt="Avadhut Kumbhar - Founder"
                    className="w-full rounded-xl relative z-10"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Avadhut Kumbhar
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Founder & Lead Educational Consultant
                  </p>
                  <p className="text-gray-300">
                    With years of experience in international education consulting, Avadhut has helped hundreds of students achieve their dreams of studying abroad. His vision and dedication have made Emprise Study Abroad a trusted name in overseas education consultancy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Impact
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Helping students achieve their dreams of international education for over a decade
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  <CountUp end={stat.value} className="text-4xl font-bold block mb-2" />
                </motion.div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3"
            >
              Our Services
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              How We Can Help You
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive support for your international education journey
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Student Success Stories
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hear from our students who have successfully pursued education abroad
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and take the first step towards your international education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="primary-button w-full sm:w-auto"
                  onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 8788312094
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="secondary-button w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// CountUp component for animating numbers
const CountUp = ({ end, className }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end]);
  
  return <span className={className}>{count}</span>;
};

// ServiceCard component
const ServiceCard = ({ title, description, icon, link, delay = 0 }) => {
  return (
    <motion.div
      className="premium-card glass-card rounded-2xl p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary font-medium hover:underline group"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default Index;
