
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import ServiceCard from '../components/ServiceCard';
import { GraduationCap, Globe, Award, BookOpen, PlaneTakeoff, FileCheck, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  // Stats data
  const stats = [
    { value: 500, label: 'Students Placed', icon: <GraduationCap size={32} /> },
    { value: 20, label: 'Partner Universities', icon: <Award size={32} /> },
    { value: 15, label: 'Countries Covered', icon: <Globe size={32} /> }
  ];
  
  // Testimonials data
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
  
  // Services data
  const services = [
    {
      title: 'MBBS in Russia',
      description: 'Study medicine at top Russian universities with affordable fees and quality education. Complete assistance with admissions and visa.',
      icon: <BookOpen size={32} />
    },
    {
      title: 'Study in UK',
      description: 'Pursue undergraduate and postgraduate programs in the UK with our guidance on university selection, applications, and scholarships.',
      icon: <PlaneTakeoff size={32} />
    },
    {
      title: 'IELTS Coaching',
      description: 'Comprehensive IELTS preparation with experienced trainers to help you achieve your target score and qualify for admissions abroad.',
      icon: <Award size={32} />
    },
    {
      title: 'Visa Assistance',
      description: 'Expert guidance for student visa applications with high success rates. We handle documentation and prepare you for visa interviews.',
      icon: <FileCheck size={32} />
    }
  ];
  
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <HeroSection 
        title="Your Gateway to Global Education"
        subtitle="Empowering students to achieve their dreams of studying abroad"
        typingTexts={[
          "MBBS in Russia",
          "Study in UK",
          "IELTS Coaching",
          "Visa Assistance"
        ]}
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
        secondaryCta={{
          text: "Explore Services",
          link: "/services"
        }}
      />
      
      {/* Stats Counter Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">
              Helping students achieve their dreams of international education for over a decade
            </p>
          </div>
          
          <StatsCounter stats={stats} />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              style={{ scale }}
              className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
            >
              Our Services
            </motion.div>
            <h2 className="section-title">How We Can Help You</h2>
            <p className="section-subtitle">
              Comprehensive support for your international education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="primary-button inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  We Make Your Study Abroad Journey Seamless
                </h2>
                <p className="text-muted-foreground mb-8">
                  With years of experience and dedication, we provide comprehensive support to students aspiring to study abroad. Our personalized approach ensures that every student receives guidance tailored to their needs and ambitions.
                </p>
                
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
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                  alt="Students studying abroad" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=60&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=60&auto=format&fit=crop"
                    ].map((src, index) => (
                      <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <img src={src} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">+500 Happy Students</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  "Emprise helped me turn my dream of studying abroad into reality."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">
              Hear from our students who have successfully pursued education abroad
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
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
            <Link 
              to="/contact" 
              className="primary-button inline-flex items-center"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
