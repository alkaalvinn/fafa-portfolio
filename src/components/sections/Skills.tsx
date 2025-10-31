import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../../data/portfolioData';
import { ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [lastClickTime, setLastClickTime] = useState(0);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Get specific description for each skill
  const getSkillDescription = (skill: { name: string; category: string; level: number }) => {
    const descriptions: { [key: string]: string } = {
      'Photography': 'Professional photography expertise with strong composition, lighting, and post-processing skills. Experienced in various photography genres including portraits, products, and events.',
      'Videography': 'Skilled videographer with expertise in camera operation, shot composition, and visual storytelling. Proficient in creating engaging video content from concept to final production.',
      'Graphic Design': 'Creative graphic designer with strong visual communication skills. Expertise in brand identity, print design, and digital graphics using industry-standard design principles.',
      'Copywriting': 'Talented copywriter with ability to create compelling and persuasive content. Skilled in adapting tone and style for different audiences and platforms while maintaining brand voice.',
      'Adobe Photoshop': 'Advanced proficiency in Adobe Photoshop for image editing, manipulation, and digital art. Expert in photo retouching, color correction, and creating complex visual compositions.',
      'Adobe Illustrator': 'Skilled in Adobe Illustrator for vector graphics, logo design, and illustrations. Proficient in creating scalable artwork for both print and digital media.',
      'Adobe Premiere Pro': 'Experienced video editor using Adobe Premiere Pro for professional video production. Skilled in timeline editing, color grading, audio mixing, and motion graphics integration.',
      'After Effects': 'Proficient in Adobe After Effects for motion graphics and visual effects. Capable of creating dynamic animations, title sequences, and complex visual compositions.',
      'Communication Strategy': 'Strategic communicator with expertise in developing comprehensive communication plans. Skilled in stakeholder analysis, message development, and campaign execution.',
      'Brand Management': 'Experienced brand manager with strong understanding of brand positioning and identity. Skilled in maintaining brand consistency across all touchpoints and driving brand growth.',
      'Content Creation': 'Versatile content creator with ability to produce engaging multimedia content. Expert in developing content strategies that align with brand objectives and resonate with target audiences.',
      'Social Media Marketing': 'Social media specialist with expertise in platform-specific strategies and community management. Skilled in creating viral content, running campaigns, and analyzing performance metrics.'
    };

    return descriptions[skill.name] || `Professional with expertise in ${skill.name}. Demonstrated strong capabilities across various projects with a focus on delivering exceptional results and innovative solutions.`;
  };

  // Get all unique skills
  const allSkills = skills;

  // Auto-rotation for skills
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastClickTime > 3000) {
        // Auto-rotate skill
        setActiveSkillIndex((prev) => (prev + 1) % allSkills.length);
        setLastClickTime(currentTime);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating, lastClickTime, activeSkillIndex, allSkills.length]);

  
  
  // Center first skill in viewport on initial load
  useEffect(() => {
    if (leftPanelRef.current && activeSkillIndex === 0) {
      const skillElements = leftPanelRef.current.querySelectorAll('.cursor-pointer');
      const firstSkill = skillElements[0] as HTMLElement;

      if (firstSkill) {
        const containerHeight = leftPanelRef.current.clientHeight;
        const elementTop = firstSkill.offsetTop;
        const elementHeight = firstSkill.offsetHeight;
        const targetScrollPosition = elementTop - (containerHeight - elementHeight) / 2;

        setTimeout(() => {
          leftPanelRef.current?.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  // Center active skill in left panel
  useEffect(() => {
    if (leftPanelRef.current) {
      const skillElements = leftPanelRef.current.querySelectorAll('.cursor-pointer');
      const activeSkill = skillElements[activeSkillIndex] as HTMLElement;

      if (activeSkill) {
        const containerHeight = leftPanelRef.current.clientHeight;
        const elementTop = activeSkill.offsetTop;
        const elementHeight = activeSkill.offsetHeight;
        const targetScrollPosition = elementTop - (containerHeight - elementHeight) / 2;

        leftPanelRef.current.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSkillIndex]);

  // Handle skill click from left panel
  const handleSkillClick = (index: number) => {
    setActiveSkillIndex(index);
    setLastClickTime(Date.now());
    setIsAutoRotating(false);

    // Restart auto-rotation after 10 seconds
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

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

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
          {/* Left Panel - Skill List */}
          <div
            ref={leftPanelRef}
            className="lg:w-1/3 p-6 overflow-y-auto"
            style={{ maxHeight: '600px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
  
            <div className="space-y-4">
              {allSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  onClick={() => handleSkillClick(index)}
                  className="flex items-center cursor-pointer group"
                >
                  {activeSkillIndex === index && (
                    <ChevronRight
                      className="w-4 h-4 text-gray-900 transition-all duration-300"
                    />
                  )}
                  <h4
                    className={`font-medium transition-all duration-300 ${
                      activeSkillIndex === index
                        ? 'text-gray-900 font-bold text-lg ml-4'
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}
                  >
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Skill Description */}
          <div
            ref={rightPanelRef}
            className="lg:w-2/3 p-8 relative overflow-hidden"
            style={{ maxHeight: '600px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="relative w-full h-full flex items-left justify-left">
              {allSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                    activeSkillIndex === index
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="max-w-4xl text-left mb-40">
                    <h3
                      className={`text-3xl font-bold mb-2 transition-all duration-700 ease-out ${
                        activeSkillIndex === index
                          ? 'text-gray-900 opacity-100 transform translate-y-0'
                          : 'text-gray-500 opacity-0 transform translate-y-4'
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <p className={`text-lg mb-4 transition-all duration-700 ease-out delay-100 ${
                      activeSkillIndex === index
                        ? 'text-gray-700 opacity-100 transform translate-y-0'
                        : 'text-gray-400 opacity-0 transform translate-y-4'
                    }`}>
                      {skill.category}
                    </p>
                    <p className={`text-gray-600 leading-relaxed text-lg transition-all duration-700 ease-out delay-200 ${
                      activeSkillIndex === index
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-4'
                    }`}>
                      {getSkillDescription(skill)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;