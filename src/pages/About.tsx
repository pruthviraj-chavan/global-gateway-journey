
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Star, Award, Calendar, MapPin, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us | Emprise Study Abroad - Overseas Education Consultants</title>
        <meta name="description" content="Learn about Emprise Study Abroad in Kolhapur, one of the leading overseas education consultants established in 2021, providing expert guidance for MBBS in Russia, UK education, and more." />
        <meta name="keywords" content="Emprise Study Abroad, about us, overseas education consultants, MBBS abroad, study in UK, education consultancy Kolhapur, Avadhut Kumbhar" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute w-full h-full bg-world-map bg-no-repeat bg-center bg-contain"></div>
            <motion.div 
              className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/20"
              animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-accent/30"
              animate={{ y: [0, -20, 0], scale: [1, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About <span className="text-primary">Emprise Study Abroad</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted partner for international education since 2021
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-neo">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                    alt="Emprise Study Abroad office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">Established November 2021</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Helping students achieve their dreams of international education
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Established in November 2021, Emprise Study Abroad in Shahupuri, Kolhapur is a top player in the category of Overseas Education Consultants in Kolhapur. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Kolhapur.
                  </p>
                  <p>
                    Over the course of its journey, this business has established a firm foothold in its industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.
                  </p>
                  <p>
                    This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-primary to-blue-600 text-white">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location and Overview */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Location and Overview
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <div className="glass-card p-8 rounded-xl relative overflow-hidden">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-bold text-lg mb-2">Our Address</h3>
                        <p className="text-muted-foreground">
                          Survey No. 858, E Ward, Samruddhi Building, Lane No. 6, Shahupuri, Kolhapur - 416001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">Monday to Saturday: 09:00 - 19:00</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-bold text-lg mb-2">Our Team</h3>
                        <p className="text-muted-foreground">
                          Dedicated professionals committed to helping students achieve their dreams of studying abroad.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/10 z-0"
                    animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <div className="rounded-xl overflow-hidden shadow-neo">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6973812259736!2d74.22987!3d16.700743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1011a55555555%3A0x55555555555555!2sShahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1626877525227!5m2!1sen!2sin" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Emprise Study Abroad location"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Emprise Study Abroad offers comprehensive services to help students pursue their international education dreams
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Overseas Education Consultancy",
                  description: "Expert guidance for all aspects of studying abroad, from university selection to post-landing assistance.",
                  icon: <Globe className="h-10 w-10" />
                },
                {
                  title: "MBBS Admissions",
                  description: "Specialized guidance for MBBS admissions in Russia and other countries with quality education at affordable fees.",
                  icon: <GraduationCap className="h-10 w-10" />
                },
                {
                  title: "UK Education",
                  description: "Comprehensive support for students wanting to pursue undergraduate and postgraduate programs in the UK.",
                  icon: <Award className="h-10 w-10" />
                },
                {
                  title: "IELTS Coaching",
                  description: "Professional IELTS preparation with experienced trainers to help you achieve your target score.",
                  icon: <Star className="h-10 w-10" />
                },
                {
                  title: "Visa Assistance",
                  description: "End-to-end support for student visa applications with high success rates.",
                  icon: <CheckCircle className="h-10 w-10" />
                },
                {
                  title: "Scholarship Guidance",
                  description: "Expert assistance in finding and applying for scholarships to reduce education costs abroad.",
                  icon: <Award className="h-10 w-10" />
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-xl p-6 h-full"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-blue-600/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Start Your Global Education Journey?
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Contact us today for a free consultation and take the first step towards your international education
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  className="bg-gradient-to-r from-primary to-blue-600 text-white"
                  onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank")}
                >
                  Get a Free Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
