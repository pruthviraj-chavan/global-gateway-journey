
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare WhatsApp message
      const message = `
*New Enquiry from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Course Interest:* ${formData.course}
*Message:* ${formData.message}
      `;

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/918788312094?text=${encodeURIComponent(message)}`, '_blank');

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+91 8788312094",
      action: "tel:+918788312094",
      actionText: "Call Now"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "info@emprisestudyabroad.com",
      action: "mailto:info@emprisestudyabroad.com",
      actionText: "Send Email"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: "Survey No. 858, E Ward, Samruddhi Building, Lane No. 6, Shahupuri, Kolhapur - 416001",
      action: "https://maps.google.com/?q=Survey No. 858, E Ward, Samruddhi Building, Lane No. 6, Shahupuri, Kolhapur",
      actionText: "Get Directions"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", name: "LinkedIn" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Emprise Study Abroad - Overseas Education Consultants</title>
        <meta name="description" content="Contact Emprise Study Abroad in Kolhapur for expert guidance on studying abroad, MBBS in Russia, UK education, and more. Call +91 8788312094 or visit our office in Shahupuri, Kolhapur." />
        <meta name="keywords" content="contact Emprise Study Abroad, overseas education consultant contact, study abroad consultancy Kolhapur, MBBS abroad consultants, contact form" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute w-full h-full bg-world-map bg-no-repeat bg-center bg-contain"></div>
            <motion.div 
              className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/20"
              animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-600/20"
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
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about studying abroad? We're here to help!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-4">{info.details}</p>
                  <a 
                    href={info.action} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    {info.actionText}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-card p-8 rounded-xl relative overflow-hidden">
                  <motion.div 
                    className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/10"
                    animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  />
                  
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 12345 67890"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="course" className="text-sm font-medium">
                          Interested Course/Country
                        </label>
                        <Input
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          placeholder="MBBS in Russia"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-full">
                  <div className="rounded-xl overflow-hidden shadow-neo h-[300px] mb-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6973812259736!2d74.22987!3d16.700743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1011a55555555%3A0x55555555555555!2sShahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1626877525227!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title="Emprise Study Abroad location"
                    ></iframe>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                    
                    <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instant Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-blue-600/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with us instantly via WhatsApp or phone call
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                  onClick={() => window.open(`https://wa.me/918788312094?text=${encodeURIComponent("Hello, I'd like to know more about studying abroad. Can you help me?")}`, "_blank")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('tel:+918788312094', '_blank')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
