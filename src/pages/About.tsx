
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import { ArrowRight, Award, Users, Globe, BookOpen, Heart, Clock, Shield, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.4, 1, 1, 0.4]);
  
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empathy",
      description: "We understand the challenges students face and provide supportive guidance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions and advice."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Efficiency",
      description: "We value your time and work efficiently to meet deadlines and requirements."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from advice to execution."
    }
  ];
  
  return (
    <Layout title="About Us">
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
              >
                About Us
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              >
                We're on a Mission to Make Global Education Accessible
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Emprise Study Abroad helps students navigate the complex journey to international education with personalized guidance and support
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Founded with a Vision to Empower Students
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Emprise Study Abroad was founded by Avadhut Kumbhar with a clear vision: to make quality global education accessible to Indian students through honest guidance and personalized support.
                  </p>
                  <p>
                    Having experienced the challenges of navigating international education firsthand, Avadhut was determined to create a consultancy that truly puts students' needs and aspirations first.
                  </p>
                  <p>
                    Since our founding, we've helped over 500 students achieve their dreams of studying abroad, with a particular focus on medical education in Russia and higher education in the UK.
                  </p>
                  <p>
                    Our team of experienced consultants provides comprehensive support at every stage of the journey, from university selection and application to visa processing and pre-departure preparation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                ref={ref}
                style={{ y, opacity }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
                    alt="Founder of Emprise Study Abroad" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="text-lg font-semibold mb-2">Avadhut Kumbhar</div>
                  <div className="text-primary mb-2">Founder & CEO</div>
                  <div className="text-sm text-muted-foreground">
                    "Education has the power to transform lives. Our goal is to help every student reach their full potential through international education."
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Our Mission & Vision</h2>
              <p className="section-subtitle">
                Guiding principles that drive everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower students from all backgrounds to access quality global education through honest guidance, personalized support, and affordable services, helping them navigate the complex journey of studying abroad with confidence and clarity.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted study abroad consultancy in India, recognized for our integrity, student-centric approach, and exceptional success rate in helping students achieve their international education goals and build successful global careers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                The principles that guide our approach and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=400&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?q=80&w=400&auto=format&fit=crop"
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`rounded-xl overflow-hidden shadow-md ${
                        index === 1 || index === 2 ? "translate-y-6" : ""
                      }`}
                    >
                      <img src={src} alt="Student experience" className="w-full h-full object-cover aspect-square" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                    Our Approach
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                    How We Support Your Journey
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Our comprehensive approach ensures that you receive support at every stage of your study abroad journey.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Personalized Counseling",
                        description: "We start with understanding your academic background, career goals, and preferences to provide tailored guidance.",
                        icon: <Users className="w-5 h-5" />
                      },
                      {
                        title: "University Selection",
                        description: "We help you identify universities that align with your academic profile, career goals, and budget constraints.",
                        icon: <Award className="w-5 h-5" />
                      },
                      {
                        title: "Application Assistance",
                        description: "Our experts guide you through the entire application process, including documentation and personal statements.",
                        icon: <FileText className="w-5 h-5" />
                      },
                      {
                        title: "Visa Guidance",
                        description: "We provide comprehensive support for visa applications, including documentation preparation and interview training.",
                        icon: <Clipboard className="w-5 h-5" />
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
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
                Start Your Global Education Journey Today
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Contact us for a free consultation and take the first step towards your international education
              </p>
              <Link 
                to="/contact" 
                className="primary-button inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

// FileText and Clipboard components for the icons
const FileText = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const Clipboard = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);

export default About;
