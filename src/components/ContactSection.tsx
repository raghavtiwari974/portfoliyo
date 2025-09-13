import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Send, CheckCircle, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'neerajsharma8637@email.com',
      href: 'mailto:neerajsharma8637@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 9301405255',
      href: 'tel:+919301405255',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Neeraj Sharma',
      href: 'https://linkedin.com/in/neerajsharma8637',
      color: 'from-blue-600 to-indigo-600'
    },
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   value: 'neerajsharma',
    //   href: 'https://github.com/neerajsharma',
    //   color: 'from-gray-600 to-gray-800'
    // },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@neeraj_sharma',
      href: 'https://www.instagram.com/its_neeraj_sharma?igsh=MWJzaXN1aGFncHAzbQ==',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree endpoint - replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xjkezzzp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} - Portfolio Contact Form`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can add error state handling here if needed
      alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="parallax-bg absolute inset-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300">Get in touch for opportunities and collaborations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="group flex items-center gap-4 p-4 bg-gray-800 rounded-lg neon-border hover:scale-105 transition-all duration-300 card-3d"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="p-6 bg-gray-800 rounded-lg neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-bottom">
            <div className="bg-gray-800 rounded-xl p-8 neon-border">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900 border border-green-500 rounded-lg flex items-center gap-3 animate-slide-in-bottom">
                  <CheckCircle className="text-green-400" size={24} />
                  <p className="text-green-300">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-650 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-650 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-650 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 neon-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Form submission note */}
              <p className="mt-4 text-sm text-gray-400 text-center">
                * This form is powered by Formspree for reliable email delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400">
          © 2025 Neeraj Sharma. Built with React & Tailwind CSS. Ready for production deployment.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;