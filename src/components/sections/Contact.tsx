import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-neutral-50 flex items-center justify-center p-8">
      <style>{`
        @keyframes floatRotate1 {
          0% {
            transform: scale(1) rotate(-3deg);
          }
          50% {
            transform: scale(1.05) rotate(3deg);
          }
          100% {
            transform: scale(1) rotate(-3deg);
          }
        }
        
        @keyframes floatRotate2 {
          0% {
            transform: scale(1) rotate(3deg);
          }
          50% {
            transform: scale(1.05) rotate(-3deg);
          }
          100% {
            transform: scale(1) rotate(3deg);
          }
        }
        
        .animate-float-1 {
          animation: floatRotate1 4s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: floatRotate2 3.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Text & Images */}
        <div className="relative -mt-24">
          {/* Image 1 - Top Right */}
          <div className="absolute top-28 right-20 w-56 h-24 overflow-hidden animate-float-1">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop" 
              alt="Portrait 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 pt-32">
            <h1 className="text-8xl tracking-tight leading-none">
              LET'S
            </h1>
          </div>

          {/* Image 2 - Left Side */}
          <div className="absolute left-2 top-120 w-32 h-48 overflow-hidden animate-float-2">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
              alt="Portrait 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text continued */}
          <div className="relative z-10 ml-40">
            <h1 className="text-8xl tracking-tight leading-none">
              GET IN
            </h1>
          </div>

          <div className="relative z-10 ml-48 left-20">
            <h1 className="text-8xl tracking-tight leading-none">
              TOUCH
            </h1>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 flex gap-4 items-center">
            <a 
              href="https://instagram.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 border-2 border-gray-700 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-light tracking-wider">INSTAGRAM</span>
            </a>

            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-5 py-3 border-2 border-gray-700 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-light tracking-wider">EMAIL</span>
            </a>

            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 border-2 border-gray-700 rounded-lg hover:border-black hover:bg-black hover:text-white transition-all duration-200 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-light tracking-wider">LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-2">
              FILL OUT THE FORM SO I CAN{' '}
              <span className="italic font-serif">CONTACT YOU</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="FULL NAME"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wider bg-transparent"
              />
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="MOBILE NUMBER"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wider bg-transparent"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-3 text-gray-400 text-sm tracking-wider">OR</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  className="w-full px-0 py-3 pl-12 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wider bg-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={1}
                placeholder="YOUR QUESTION / IDEA / PROPOSAL"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-400 placeholder:text-sm placeholder:tracking-wider resize-none bg-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-full font-light text-sm tracking-widest transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    SENDING...
                  </div>
                ) : (
                  'SEND'
                )}
              </button>
            </div>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-800 rounded-2xl text-center text-sm">
                Thank you! I'll get back to you soon ✨
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-800 rounded-2xl text-center text-sm">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;