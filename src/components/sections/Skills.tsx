import React, { useState, useEffect } from 'react';
import { skills } from '../../data/portfolioData';

interface SkillCloudProps {
  skill: typeof skills[0];
  index: number;
}

const SkillCloud: React.FC<SkillCloudProps> = ({ skill, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Randomize position within container
    const x = Math.random() * 80 - 40; // -40 to 40
    const y = Math.random() * 80 - 40; // -40 to 40
    setPosition({ x, y });
  }, []);

  const getSkillSize = () => {
    if (skill.level >= 90) return 'text-3xl md:text-4xl';
    if (skill.level >= 80) return 'text-2xl md:text-3xl';
    if (skill.level >= 70) return 'text-xl md:text-2xl';
    return 'text-lg md:text-xl';
  };

  const getSkillColor = () => {
    const colors = [
      'text-orange-500',
      'text-blue-500',
      'text-purple-500',
      'text-green-500',
      'text-pink-500',
      'text-indigo-500',
      'text-red-500',
      'text-yellow-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        left: `calc(50% + ${position.x}%)`,
        top: `calc(50% + ${position.y}%)`,
        animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="relative group">
        <span className={`${getSkillSize()} font-bold ${getSkillColor()} opacity-80 hover:opacity-100 transition-opacity duration-200`}>
          {skill.name}
        </span>

        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {skill.category} • {skill.level}%
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const skillsByCategory = categories.map(category => ({
    name: category,
    skills: skills.filter(skill => skill.category === category)
  }));

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My creative and professional capabilities
          </p>
        </div>

        {/* Skills Word Cloud */}
        <div className="relative h-96 mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            {skills.map((skill, index) => (
              <SkillCloud key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Center text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-gray-200 opacity-50">
                SKILLS
              </div>
            </div>
          </div>
        </div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsByCategory.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                          style={{
                            width: hoveredCategory === category.name ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 w-10 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key highlights */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {skills.filter(skill => skill.level >= 90).map((skill) => (
              <div
                key={skill.name}
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
              >
                {skill.name}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4">
            Core competencies with 90%+ proficiency
          </p>
        </div>
      </div>

      </section>
  );
};

export default Skills;