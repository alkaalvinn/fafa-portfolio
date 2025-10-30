import { experiences } from '../../data/portfolioData';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey through various industries and roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full hidden md:block"></div>

                {/* Content card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <Calendar className="text-orange-500" size={20} />
                      <span className="text-sm text-gray-600">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="text-gray-500" size={16} />
                      <span className="text-lg font-semibold text-gray-700">
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-gray-600">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;