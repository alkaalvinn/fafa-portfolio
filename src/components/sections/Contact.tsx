import React, { useState } from 'react';
import { portfolioImages, placeholderImages } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  // Get contact images from portfolioData or use placeholders
  const contactImages = {
    portrait1: portfolioImages.contact.portrait1,
    portrait2: portfolioImages.contact.portrait2
  };
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
    <section id="contact" className="min-h-screen bg-black flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
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

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

        {/* Left Side - Text & Images */}
        <div className="relative lg:-mt-24 order-1 lg:order-1">
          {/* Desktop: Image 1 - Top Right */}
          <div className="hidden lg:block absolute top-28 right-20 w-56 h-24 overflow-hidden animate-float-1">
            <img
              src={contactImages.portrait1}
              alt="Portrait 1"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback ke placeholder jika gambar tidak ditemukan
                e.target.src = placeholderImages.contact.portrait1;
              }}
            />
          </div>

          {/* Text - Desktop and Mobile */}
          <div className="relative z-10 pt-4 lg:pt-32 text-center lg:text-left">
            <h1
              className="tracking-tight leading-none text-white"
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)'
              }}
            >
              LET'S
            </h1>
          </div>

          {/* Mobile & Tablet: Image 1 - Below text */}
          <div className="lg:hidden relative z-0 mt-3 mb-3 flex justify-center">
            <div
              className="overflow-hidden animate-float-1"
              style={{
                width: 'clamp(8rem, 25vw, 10rem)',
                height: 'clamp(5rem, 15vw, 6rem)'
              }}
            >
              <img
                src={contactImages.portrait1}
                alt="Portrait 1"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = placeholderImages.contact.portrait1;
                }}
              />
            </div>
          </div>

          {/* Desktop: Image 2 - Left Side */}
          <div className="hidden lg:block absolute left-2 top-60 w-32 h-48 overflow-hidden animate-float-2">
            <img
              src={contactImages.portrait2}
              alt="Portrait 2"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = placeholderImages.contact.portrait2;
              }}
            />
          </div>

          {/* Text continued - Desktop and Mobile */}
          <div className="relative z-10 ml-0 lg:ml-40 mt-1 lg:mt-0 text-center lg:text-left">
            <h1
              className="tracking-tight leading-none text-white"
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)'
              }}
            >
              GET IN
            </h1>
          </div>

          <div className="relative z-10 ml-0 lg:ml-48 left-0 lg:left-20 mt-1 lg:mt-0 text-center lg:text-left">
            <h1
              className="tracking-tight leading-none text-white"
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)'
              }}
            >
              TOUCH
            </h1>
          </div>

          {/* Mobile & Tablet: Image 2 - Below text */}
          <div className="lg:hidden relative z-0 mt-3 mb-6 flex justify-center">
            <div
              className="overflow-hidden animate-float-2"
              style={{
                width: 'clamp(6rem, 20vw, 7rem)',
                height: 'clamp(9rem, 28vw, 10rem)'
              }}
            >
              <img
                src={contactImages.portrait2}
                alt="Portrait 2"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = placeholderImages.contact.portrait2;
                }}
              />
            </div>
          </div>

          {/* Social Media Links - Responsive layout */}
          <div className="mt-6 lg:mt-12 flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center lg:justify-start">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 lg:px-5 lg:py-3 border-2 border-gray-700 hover:border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 group w-full sm:w-auto"
              style={{
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)'
              }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-light tracking-wider text-gray-300 group-hover:text-black">INSTAGRAM</span>
            </a>

            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 lg:px-5 lg:py-3 border-2 border-gray-700 hover:border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 group w-full sm:w-auto"
              style={{
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)'
              }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-light tracking-wider text-gray-300 group-hover:text-black">EMAIL</span>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 lg:px-5 lg:py-3 border-2 border-gray-700 hover:border-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-200 group w-full sm:w-auto"
              style={{
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)'
              }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-light tracking-wider text-gray-300 group-hover:text-black">LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm order-2 lg:order-2 border border-gray-800">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h2
              className="font-light mb-2 text-center lg:text-left text-white"
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1.5rem)'
              }}
            >
              FILL OUT THE FORM SO I CAN{' '}
              <span className="italic font-serif text-lime-400">CONTACT YOU</span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="FULL NAME"
                className="w-full px-0 py-2 sm:py-3 border-0 border-b border-gray-700 focus:border-lime-400 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm placeholder:tracking-wider bg-transparent text-white"
                style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                }}
              />
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="MOBILE NUMBER"
                  className="w-full px-0 py-2 sm:py-3 border-0 border-b border-gray-700 focus:border-lime-400 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm placeholder:tracking-wider bg-transparent text-white"
                  style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                  }}
                />
              </div>

              <div className="relative">
                <div
                  className="absolute left-0 top-2 sm:top-3 text-gray-500 tracking-wider"
                  style={{
                    fontSize: 'clamp(0.625rem, 2vw, 0.75rem)'
                  }}
                >
                  OR
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL"
                  className="w-full px-0 py-2 sm:py-3 pl-6 sm:pl-8 lg:pl-12 border-0 border-b border-gray-700 focus:border-lime-400 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm placeholder:tracking-wider bg-transparent text-white"
                  style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                  }}
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
                className="w-full px-0 py-2 sm:py-3 border-0 border-b border-gray-700 focus:border-lime-400 focus:ring-0 outline-none transition-colors duration-200 placeholder:text-gray-500 placeholder:text-xs sm:placeholder:text-sm placeholder:tracking-wider resize-none bg-transparent text-white"
                style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-2.5 sm:py-3 lg:py-4 px-4 lg:px-6 rounded-full font-light transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-lime-400 text-black hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/50'
                }`}
                style={{
                  fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>SENDING...</span>
                  </div>
                ) : (
                  'SEND'
                )}
              </button>
            </div>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <div
                className="p-2.5 sm:p-3 lg:p-4 bg-lime-400/20 text-lime-400 rounded-lg sm:rounded-xl lg:rounded-2xl text-center border border-lime-400/30"
                style={{
                  fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                }}
              >
                Thank you! I'll get back to you soon ✨
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="p-2.5 sm:p-3 lg:p-4 bg-red-500/20 text-red-400 rounded-lg sm:rounded-xl lg:rounded-2xl text-center border border-red-500/30"
                style={{
                  fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                }}
              >
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