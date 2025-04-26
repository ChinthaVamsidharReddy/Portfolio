import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setStatus({ type: 'loading', message: 'Sending message...' });
      
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
      </div>

      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative backdrop-blur-sm bg-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-emerald-500/30">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base md:text-lg font-medium text-white mb-1.5 md:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      autoComplete="name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-base md:text-lg font-medium text-white mb-1.5 md:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      autoComplete="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base md:text-lg font-medium text-white mb-1.5 md:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    autoComplete="off"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base md:text-lg font-medium text-white mb-1.5 md:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    rows={5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-medium text-base md:text-lg transition-all ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm md:text-base ${
                      status.type === 'success' ? 'text-green-400' : 'text-rose-400'
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative backdrop-blur-sm bg-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:border-emerald-500/30">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Connect With Me</h3>
                <div className="space-y-4 md:space-y-6">
                  <motion.a
                    href="https://github.com/ChinthaVamsidharReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    <span className="text-sm md:text-base">GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/vamsidhar-reddy-chintha-b2b1b0214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm md:text-base">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="mailto:vamsidharreddy831@gmail.com"
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm md:text-base">vamsidharreddy831@gmail.com</span>
                  </motion.a>

                  <motion.a
                    href="tel:+91 8317655125"
                    className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm md:text-base">+91 8317655125</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 