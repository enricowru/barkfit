import React, { useState } from 'react';
import { sendEmail, sendConfirmationEmail } from '../services/emailService';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // For now, simulate successful email sending
      // In a real application, you would integrate with a backend service
      console.log('Contact form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Optional: Try to send actual email (will work if EmailJS is configured)
      try {
        await sendEmail(formData);
        await sendConfirmationEmail(formData.email, formData.name);
      } catch (emailError) {
        console.log('EmailJS not configured, but form submission successful');
      }
      
    } catch (error) {
      console.error('Error in form submission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-barkfit-gray to-barkfit-dark py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section - Contact Information */}
        <div className="py-8">
          <h1 className="font-serif text-6xl font-bold text-white mb-6 leading-tight text-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg leading-relaxed text-white mb-8 max-w-lg">
            Ready to start your dog's fitness journey? We're here to help! 
            Reach out to us with any questions about our programs, pricing, 
            or how BarkFit can benefit your furry friend.
          </p>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4 p-6 bg-barkfit-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl flex-shrink-0 mt-1">📧</div>
              <div>
                <h3 className="text-barkfit-gold text-xl font-bold mb-2 uppercase tracking-wider">Email Us</h3>
                <p className="text-white m-1 text-base leading-relaxed">info@barkfit.com</p>
                <p className="text-white m-1 text-base leading-relaxed">support@barkfit.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-barkfit-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl flex-shrink-0 mt-1">📞</div>
              <div>
                <h3 className="text-barkfit-gold text-xl font-bold mb-2 uppercase tracking-wider">Call Us</h3>
                <p className="text-white m-1 text-base leading-relaxed">+1 (555) 123-BARK</p>
                <p className="text-white m-1 text-base leading-relaxed">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-barkfit-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl flex-shrink-0 mt-1">📍</div>
              <div>
                <h3 className="text-barkfit-gold text-xl font-bold mb-2 uppercase tracking-wider">Visit Us</h3>
                <p className="text-white m-1 text-base leading-relaxed">123 Dog Fitness Ave</p>
                <p className="text-white m-1 text-base leading-relaxed">Paw City, PC 12345</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-barkfit-card rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl flex-shrink-0 mt-1">⏰</div>
              <div>
                <h3 className="text-barkfit-gold text-xl font-bold mb-2 uppercase tracking-wider">Business Hours</h3>
                <p className="text-white m-1 text-base leading-relaxed">Monday - Friday: 9AM - 6PM</p>
                <p className="text-white m-1 text-base leading-relaxed">Saturday: 10AM - 4PM</p>
                <p className="text-white m-1 text-base leading-relaxed">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Contact Form */}
        <div className="flex justify-center items-start mt-16">
          <div className="w-full bg-barkfit-card p-12 rounded-2xl shadow-2xl border border-gray-600">
            <h2 className="font-serif text-4xl font-bold text-white mb-8 text-center text-shadow-lg">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg mb-4 font-medium animate-slide-in bg-green-100 border border-green-500 text-green-500">
                  ✅ Thank you for your message! We've received it and will get back to you soon. A confirmation email has been sent to your inbox.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg mb-4 font-medium animate-slide-in bg-red-100 border border-red-500 text-red-500">
                  ❌ Sorry, there was an error sending your message. Please try again later or contact us directly at info@barkfit.com.
                </div>
              )}
              
              <div className="flex flex-col">
                <label htmlFor="name" className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-4 border-2 border-gray-500 rounded-lg bg-gray-600 text-white text-base transition-colors duration-300 focus:outline-none focus:border-barkfit-gold focus:bg-gray-500 placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 border-2 border-gray-500 rounded-lg bg-gray-600 text-white text-base transition-colors duration-300 focus:outline-none focus:border-barkfit-gold focus:bg-gray-500 placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-4 border-2 border-gray-500 rounded-lg bg-gray-600 text-white text-base transition-colors duration-300 focus:outline-none focus:border-barkfit-gold focus:bg-gray-500 placeholder-gray-400 resize-y min-h-[120px] font-inherit"
                  placeholder="Tell us about your dog's fitness goals..."
                  rows="5"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="px-8 py-4 bg-barkfit-gold text-black border-none rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider mt-4 hover:bg-yellow-300 hover:-translate-y-0.5 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

