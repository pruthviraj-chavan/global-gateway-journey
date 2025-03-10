
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Globe, Award, FileCheck, PlaneTakeoff, Building, BarChart, MessageCircle, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: 'MBBS in Russia',
      description: 'Study medicine at top Russian universities with affordable fees and quality education. Complete assistance with admissions and visa.',
      icon: <BookOpen className="h-10 w-10" />,
      features: [
        'Admission to MCI/NMC recognized universities',
        'Affordable tuition fees compared to private colleges in India',
        'English-medium programs available',
        'Comprehensive pre-departure guidance',
        'Assistance with visa processing',
        'Accommodation arrangements'
      ]
    },
    {
      title: 'Study in UK',
      description: 'Pursue undergraduate and postgraduate programs in the UK with our guidance on university selection, applications, and scholarships.',
      icon: <PlaneTakeoff className="h-10 w-10" />,
      features: [
        'Admission to prestigious UK universities',
        'Course and university selection based on profile',
        'Comprehensive application assistance',
        'Scholarship and funding guidance',
        'Tier 4 student visa support',
        'Pre-departure and post-landing assistance'
      ]
    },
    {
      title: 'IELTS Coaching',
      description: 'Comprehensive IELTS preparation with experienced trainers to help you achieve your target score and qualify for admissions abroad.',
      icon: <Award className="h-10 w-10" />,
      features: [
        'Expert coaching by experienced trainers',
        'Small batch sizes for personalized attention',
        'Regular mock tests and evaluations',
        'Comprehensive study material provided',
        'Special focus on weak areas',
        'Tips and strategies for high scores'
      ]
    },
    {
      title: 'Visa Assistance',
      description: 'Expert guidance for student visa applications with high success rates. We handle documentation and prepare you for visa interviews.',
      icon: <FileCheck className="h-10 w-10" />,
      features: [
        'Complete documentation guidance',
        'Visa application filing assistance',
        'Mock interview preparation',
        'Financial documentation advice',
        'Follow-ups with embassies/consulates',
        'Guidance on visa regulations and compliance'
      ]
    },
    {
      title: 'Scholarship Guidance',
      description: 'Expert assistance in finding and applying for scholarships that can significantly reduce your education costs abroad.',
      icon: <BarChart className="h-10 w-10" />,
      features: [
        'Identification of suitable scholarships',
        'Application assistance for scholarships',
        'Guidance on writing compelling statements',
        'Documentation support for scholarship applications',
        'Follow-ups on scholarship applications',
        'Alternative funding options counseling'
      ]
    },
    {
      title: 'Accommodation Support',
      description: 'Help in finding suitable and affordable accommodation options near your university for a comfortable stay.',
      icon: <Building className="h-10 w-10" />,
      features: [
        'University accommodation application assistance',
        'Private accommodation options guidance',
        'Cost comparison of various accommodation options',
        'Location advice based on university proximity',
        'Pre-booking assistance where possible',
        'Roommate finding support'
      ]
    },
    {
      title: 'Pre-departure Briefing',
      description: 'Comprehensive guidance sessions to prepare you for life in a new country, covering cultural differences, local customs, and more.',
      icon: <MessageCircle className="h-10 w-10" />,
      features: [
        'Cultural orientation about destination country',
        'Weather and clothing guidance',
        'Banking and currency information',
        'Local transportation guidelines',
        'Health and safety advice',
        'Networking with alumni in destination country'
      ]
    },
    {
      title: 'Post-landing Assistance',
      description: 'Continued support after you arrive in your study destination to help you settle in and navigate initial challenges.',
      icon: <MapPin className="h-10 w-10" />,
      features: [
        'Airport pickup arrangements',
        'Initial accommodation support',
        'Local SIM card and banking setup guidance',
        'University registration assistance',
        'Local area orientation',
        'Emergency support when needed'
      ]
    }
  ];

  const ServiceCard = ({ service, index }) => {
    return (
      <motion.div
        variants={fadeIn}
        custom={index}
        className="glass-card rounded-xl overflow-hidden shadow-neo h-full"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
            <div className="text-primary">{service.icon}</div>
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-muted-foreground mb-4">{service.description}</p>
          
          <div className="mt-auto">
            <Button 
              variant="ghost" 
              className="text-primary group flex items-center hover:bg-primary/10 px-0" 
              onClick={() => {
                window.open(`https://wa.me/918788312094?text=${encodeURIComponent(`Hello, I'm interested in your ${service.title} service. Can you provide more information?`)}`, "_blank");
              }}
            >
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Emprise Study Abroad - Overseas Education Consultants</title>
        <meta name="description" content="Explore our comprehensive services including MBBS in Russia, UK education, IELTS coaching, visa assistance, and more at Emprise Study Abroad in Kolhapur." />
        <meta name="keywords" content="study abroad services, MBBS Russia, UK education, overseas education consultants, IELTS coaching, visa assistance, scholarship guidance, Kolhapur" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute w-full h-full bg-world-map bg-no-repeat bg-center bg-contain"></div>
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20"
              animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-blue-600/20"
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive support for your international education journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        {services.map((service, index) => (
          <section 
            key={index} 
            className={`py-16 ${index % 2 === 0 ? 'bg-gradient-to-r from-background to-primary/5' : ''}`}
            id={service.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-bold mb-4">What We Offer:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="bg-gradient-to-r from-primary to-blue-600 text-white"
                    onClick={() => {
                      window.open(`https://wa.me/918788312094?text=${encodeURIComponent(`Hello, I'm interested in your ${service.title} service. Can you provide more information?`)}`, "_blank");
                    }}
                  >
                    Enquire About {service.title}
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-neo">
                      <img 
                        src={`https://source.unsplash.com/random/800x600/?${service.title.toLowerCase().split(' ').join(',')},education`} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <motion.div 
                      className={`absolute -z-10 ${index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-full h-full rounded-2xl bg-gradient-to-r from-primary/30 to-blue-600/30`}
                      animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 to-blue-600/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Global Education Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free consultation and take the first step towards your international education
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-primary to-blue-600 text-white"
                  onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to schedule a free consultation.")}`, "_blank")}
                >
                  Get a Free Consultation
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
