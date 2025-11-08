import { experiences } from '../../data/portfolioData';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Generate placeholder images for each experience
  const getExperienceImages = (companyId: number) => {
    return [
      `https://picsum.photos/seed/experience-${companyId}-1/400/300.jpg`,
      `https://picsum.photos/seed/experience-${companyId}-2/400/300.jpg`,
      `https://picsum.photos/seed/experience-${companyId}-3/400/300.jpg`,
      `https://picsum.photos/seed/experience-${companyId}-4/400/300.jpg`,
    ];
  };

  return (
    <section id="experience" className="bg-white py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="container mx-auto px-6 mb-20"
      >
        <div className="text-center md:text-left">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto md:mx-0">
            My professional journey through various industries and roles
          </p>
        </div>
      </motion.div>

      {/* Experience Items - Large but reasonable height */}
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
        >
          {/* Consistent background decoration */}
          <div className="absolute inset-0"></div>

          {/* Content - Left text, Right images */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left"
              >
                {/* Period */}
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-gray-700" size={24} />
                  <span className="text-lg text-gray-600 font-medium">{exp.period}</span>
                </div>

                {/* Position */}
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {exp.position}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="text-gray-500" size={20} />
                  <span className="text-2xl font-semibold text-gray-700">
                    {exp.company}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <ul className="space-y-3 text-lg text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-gray-700 mt-1">•</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Side - Images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {getExperienceImages(exp.id).map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 0.5 + imgIndex * 0.1
                      }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={image}
                        alt={`${exp.company} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation hint */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;