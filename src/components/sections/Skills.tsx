import React from 'react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  // Get all unique skills
  const allSkills = skills;

  // Define color combinations for both initial and hover effects
  const colorCombinations = [
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-red-500',
      hoverBorder: 'hover:border-red-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-blue-500',
      initialBorder: 'border-blue-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-blue-600',
      hoverBorder: 'hover:border-blue-700',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-green-500',
      hoverBorder: 'hover:border-green-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-yellow-500',
      initialBorder: 'border-yellow-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-yellow-600',
      hoverBorder: 'hover:border-yellow-700',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-purple-500',
      hoverBorder: 'hover:border-purple-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-pink-500',
      initialBorder: 'border-pink-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-pink-600',
      hoverBorder: 'hover:border-pink-700',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-indigo-500',
      hoverBorder: 'hover:border-indigo-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-orange-500',
      initialBorder: 'border-orange-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-orange-600',
      hoverBorder: 'hover:border-orange-700',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-teal-500',
      hoverBorder: 'hover:border-teal-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-cyan-500',
      initialBorder: 'border-cyan-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-cyan-600',
      hoverBorder: 'hover:border-cyan-700',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: '',
      initialBorder: '',
      initialText: 'text-gray-700',
      hoverBg: 'hover:bg-lime-500',
      hoverBorder: 'hover:border-lime-600',
      hoverText: 'hover:text-white'
    },
    {
      initialBg: 'bg-emerald-500',
      initialBorder: 'border-emerald-600',
      initialText: 'text-white',
      hoverBg: 'hover:bg-emerald-600',
      hoverBorder: 'hover:border-emerald-700',
      hoverText: 'hover:text-white'
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            My Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            My creative and professional capabilities
          </p>
        </div>

        {/* Skills Tags */}
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          {allSkills.map((skill, index) => {
            const colorSet = colorCombinations[index % colorCombinations.length];
            return (
              <li
                key={skill.name}
                className={`
                  ${index % 2 === 1 ? colorSet.initialBg : 'bg-white'}
                  border border-black
                  rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3
                  ${index % 2 === 1 ? colorSet.initialText : 'text-gray-700'}
                  hover:scale-105 transition-all duration-300 cursor-default
                  hover:shadow-lg
                  ${colorSet.hoverBg} ${colorSet.hoverBorder} ${colorSet.hoverText}
                `}
              >
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;