import React from 'react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  // Get all unique skills
  const allSkills = skills;

  // Define more varied color combinations with active initial colors
  const colorCombinations = [
    // Lime - both colored and neutral variants
    { initialBg: 'bg-lime-400', initialBorder: 'border-lime-500', initialText: 'text-black', hoverBg: 'hover:bg-lime-500', hoverBorder: 'hover:border-lime-600', hoverText: 'hover:text-black', shadowColor: 'shadow-lime-400/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-lime-400', hoverBorder: 'hover:border-lime-500', hoverText: 'hover:text-black', shadowColor: 'shadow-lime-400/20' },
    // Cyan
    { initialBg: 'bg-cyan-500', initialBorder: 'border-cyan-600', initialText: 'text-white', hoverBg: 'hover:bg-cyan-600', hoverBorder: 'hover:border-cyan-700', hoverText: 'hover:text-white', shadowColor: 'shadow-cyan-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-cyan-500', hoverBorder: 'hover:border-cyan-600', hoverText: 'hover:text-white', shadowColor: 'shadow-cyan-500/20' },
    // Purple
    { initialBg: 'bg-purple-500', initialBorder: 'border-purple-600', initialText: 'text-white', hoverBg: 'hover:bg-purple-600', hoverBorder: 'hover:border-purple-700', hoverText: 'hover:text-white', shadowColor: 'shadow-purple-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-purple-500', hoverBorder: 'hover:border-purple-600', hoverText: 'hover:text-white', shadowColor: 'shadow-purple-500/20' },
    // Pink
    { initialBg: 'bg-pink-500', initialBorder: 'border-pink-600', initialText: 'text-white', hoverBg: 'hover:bg-pink-600', hoverBorder: 'hover:border-pink-700', hoverText: 'hover:text-white', shadowColor: 'shadow-pink-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-pink-500', hoverBorder: 'hover:border-pink-600', hoverText: 'hover:text-white', shadowColor: 'shadow-pink-500/20' },
    // Blue
    { initialBg: 'bg-blue-500', initialBorder: 'border-blue-600', initialText: 'text-white', hoverBg: 'hover:bg-blue-600', hoverBorder: 'hover:border-blue-700', hoverText: 'hover:text-white', shadowColor: 'shadow-blue-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-blue-500', hoverBorder: 'hover:border-blue-600', hoverText: 'hover:text-white', shadowColor: 'shadow-blue-500/20' },
    // Orange
    { initialBg: 'bg-orange-500', initialBorder: 'border-orange-600', initialText: 'text-white', hoverBg: 'hover:bg-orange-600', hoverBorder: 'hover:border-orange-700', hoverText: 'hover:text-white', shadowColor: 'shadow-orange-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-orange-500', hoverBorder: 'hover:border-orange-600', hoverText: 'hover:text-white', shadowColor: 'shadow-orange-500/20' },
    // NEW COLORS - Emerald
    { initialBg: 'bg-emerald-500', initialBorder: 'border-emerald-600', initialText: 'text-white', hoverBg: 'hover:bg-emerald-600', hoverBorder: 'hover:border-emerald-700', hoverText: 'hover:text-white', shadowColor: 'shadow-emerald-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-emerald-500', hoverBorder: 'hover:border-emerald-600', hoverText: 'hover:text-white', shadowColor: 'shadow-emerald-500/20' },
    // NEW COLORS - Rose
    { initialBg: 'bg-rose-500', initialBorder: 'border-rose-600', initialText: 'text-white', hoverBg: 'hover:bg-rose-600', hoverBorder: 'hover:border-rose-700', hoverText: 'hover:text-white', shadowColor: 'shadow-rose-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-rose-500', hoverBorder: 'hover:border-rose-600', hoverText: 'hover:text-white', shadowColor: 'shadow-rose-500/20' },
    // NEW COLORS - Amber
    { initialBg: 'bg-amber-500', initialBorder: 'border-amber-600', initialText: 'text-white', hoverBg: 'hover:bg-amber-600', hoverBorder: 'hover:border-amber-700', hoverText: 'hover:text-white', shadowColor: 'shadow-amber-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-amber-500', hoverBorder: 'hover:border-amber-600', hoverText: 'hover:text-white', shadowColor: 'shadow-amber-500/20' },
    // NEW COLORS - Violet
    { initialBg: 'bg-violet-500', initialBorder: 'border-violet-600', initialText: 'text-white', hoverBg: 'hover:bg-violet-600', hoverBorder: 'hover:border-violet-700', hoverText: 'hover:text-white', shadowColor: 'shadow-violet-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-violet-500', hoverBorder: 'hover:border-violet-600', hoverText: 'hover:text-white', shadowColor: 'shadow-violet-500/20' },
    // NEW COLORS - Teal
    { initialBg: 'bg-teal-500', initialBorder: 'border-teal-600', initialText: 'text-white', hoverBg: 'hover:bg-teal-600', hoverBorder: 'hover:border-teal-700', hoverText: 'hover:text-white', shadowColor: 'shadow-teal-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-teal-500', hoverBorder: 'hover:border-teal-600', hoverText: 'hover:text-white', shadowColor: 'shadow-teal-500/20' },
    // NEW COLORS - Indigo
    { initialBg: 'bg-indigo-500', initialBorder: 'border-indigo-600', initialText: 'text-white', hoverBg: 'hover:bg-indigo-600', hoverBorder: 'hover:border-indigo-700', hoverText: 'hover:text-white', shadowColor: 'shadow-indigo-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-indigo-500', hoverBorder: 'hover:border-indigo-600', hoverText: 'hover:text-white', shadowColor: 'shadow-indigo-500/20' },
    // NEW COLORS - Red
    { initialBg: 'bg-red-500', initialBorder: 'border-red-600', initialText: 'text-white', hoverBg: 'hover:bg-red-600', hoverBorder: 'hover:border-red-700', hoverText: 'hover:text-white', shadowColor: 'shadow-red-500/20' },
    { initialBg: '', initialBorder: 'border-gray-700', initialText: 'text-gray-300', hoverBg: 'hover:bg-red-500', hoverBorder: 'hover:border-red-600', hoverText: 'hover:text-white', shadowColor: 'shadow-red-500/20' },
  ];

  // Use a seeded random-like pattern for color assignment (consistent but non-sequential)
  const getColorIndex = (index: number) => {
    // Fibonacci-like sequence for more "random" distribution
    const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
    return fib[index % fib.length] % colorCombinations.length;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            My Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            My creative and professional capabilities
          </p>
        </div>

        {/* Skills Tags */}
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          {allSkills.map((skill, index) => {
            const colorIndex = getColorIndex(index);
            const colorSet = colorCombinations[colorIndex];
            const hasInitialColor = colorSet.initialBg !== '';
            return (
              <li
                key={skill.name}
                className={`
                  ${hasInitialColor ? colorSet.initialBg : 'bg-gray-800'}
                  border ${hasInitialColor ? colorSet.initialBorder : 'border-gray-700'}
                  rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3
                  ${hasInitialColor ? colorSet.initialText : 'text-gray-300'}
                  hover:scale-105 transition-all duration-300 cursor-default
                  hover:shadow-lg hover:${colorSet.shadowColor}
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