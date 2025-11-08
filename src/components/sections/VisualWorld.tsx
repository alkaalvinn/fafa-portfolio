import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const VisualWorld = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Portfolio images dalam format portrait 4:3 - 24 gambar (2x lebih banyak)
  const visualImages = [
    {
      id: 1,
      title: "Creative Photography",
      description: "Capturing moments that tell stories",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1b839f078944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 0
    },
    {
      id: 2,
      title: "Visual Design",
      description: "Creating stunning visual experiences",
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 15
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Building memorable brand experiences",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 30
    },
    {
      id: 4,
      title: "Digital Art",
      description: "Exploring digital creativity",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 45
    },
    {
      id: 5,
      title: "Photojournalism",
      description: "Telling stories through images",
      imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 60
    },
    {
      id: 6,
      title: "Creative Direction",
      description: "Leading creative visions",
      imageUrl: "https://images.unsplash.com/photo-1599421498721-88ba9224cd2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 75
    },
    {
      id: 7,
      title: "Visual Storytelling",
      description: "Crafting compelling narratives",
      imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 90
    },
    {
      id: 8,
      title: "Motion Graphics",
      description: "Bringing designs to life",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 105
    },
    {
      id: 9,
      title: "Product Design",
      description: "Creating innovative products",
      imageUrl: "https://images.unsplash.com/photo-1561708321-e45b04e8cfee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 120
    },
    {
      id: 10,
      title: "Web Development",
      description: "Building digital experiences",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 135
    },
    {
      id: 11,
      title: "UI/UX Design",
      description: "Designing user experiences",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 150
    },
    {
      id: 12,
      title: "Content Creation",
      description: "Creating engaging content",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 165
    },
    {
      id: 13,
      title: "Typography",
      description: "Beautiful lettering design",
      imageUrl: "https://images.unsplash.com/photo-1522542550221-4fd1c5af2cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 180
    },
    {
      id: 14,
      title: "3D Modeling",
      description: "Creating three-dimensional art",
      imageUrl: "https://images.unsplash.com/photo-1559028006-4a637a3a5ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 195
    },
    {
      id: 15,
      title: "Video Editing",
      description: "Professional video production",
      imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 210
    },
    {
      id: 16,
      title: "Illustration",
      description: "Digital and traditional art",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 225
    },
    {
      id: 17,
      title: "Animation",
      description: "Bringing ideas to life",
      imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 240
    },
    {
      id: 18,
      title: "Graphic Design",
      description: "Visual communication art",
      imageUrl: "https://images.unsplash.com/photo-1626785774596-26b83b5765b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 255
    },
    {
      id: 19,
      title: "Architecture",
      description: "Building the future",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 270
    },
    {
      id: 20,
      title: "Fashion Design",
      description: "Creative clothing concepts",
      imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 285
    },
    {
      id: 21,
      title: "Film Production",
      description: "Cinematic storytelling",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 300
    },
    {
      id: 22,
      title: "Interior Design",
      description: "Beautiful space planning",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 315
    },
    {
      id: 23,
      title: "Game Design",
      description: "Interactive entertainment",
      imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 330
    },
    {
      id: 24,
      title: "Digital Marketing",
      description: "Creative brand promotion",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      angle: 345
    }
  ];

  // Calculate position for circular layout
  const calculateCircularPosition = (angle: number, radius: number, centerX: number, centerY: number) => {
    const angleInRadians = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleInRadians);
    const y = centerY + radius * Math.sin(angleInRadians);
    return { x, y };
  };

  return (
    <section
      id="visual-world"
      className="relative w-full min-h-screen overflow-hidden bg-white py-20"
    >
      <div ref={ref} className="relative w-full h-screen max-w-7xl mx-auto px-6 flex items-center justify-center">

        {/* Center Text - "I Live in Visual World" - Tepat di tengah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute z-20 text-center pointer-events-none"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tighter leading-none">
            LIVE IN
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 tracking-tight leading-none mt-1">
            VISUAL WORLD
          </h2>
        </motion.div>

        {/* Portrait Images in Perfect Circle */}
        <div className="relative w-full h-full flex items-center justify-center">
          {visualImages.map((image, index) => {
            const isHovered = hoveredImage === image.id;
            const scale = isHovered ? 1.3 : 1;
            const zIndex = isHovered ? 50 : 10;

            // Calculate circular position - position from center
            const radius = 320; // Radius of the circle - spacing lebih lebar
            const position = calculateCircularPosition(image.angle, radius, 0, 0);

            // Calculate rotation so images face outward from center
            // Angle - 90 makes image at 0° (right) face right (0° rotation)
            const rotation = image.angle - 90;

            // Portrait 4:3 dimensions - ukuran lebih kecil agar tidak menabrak
            const width = 70;
            const height = 85;

            return (
              <motion.div
                key={image.id}
                className="absolute cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${width}px`,
                  height: `${height}px`,
                  zIndex,
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${rotation}deg)`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{
                  scale: scale,
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(0deg)`,
                  zIndex: 60
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${image.imageUrl})`,
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      filter: isHovered ? 'brightness(1.2) contrast(1.2)' : 'brightness(0.8) contrast(1)'
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)'
                        : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
                      opacity: isHovered ? 0.7 : 1
                    }}
                  />

                
                  {/* Border Frame */}
                  <div
                    className="absolute inset-0 rounded-lg border-2 border-gray-400/30 transition-opacity duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0.4
                    }}
                  />
                </div>

                {/* Decorative Corner Elements */}
                <div
                  className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-gray-500 opacity-60 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0.9 : 0.3 }}
                ></div>
                <div
                  className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-gray-500 opacity-60 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0.9 : 0.3 }}
                ></div>
                <div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-gray-500 opacity-60 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0.9 : 0.3 }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-gray-500 opacity-60 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0.9 : 0.3 }}
                ></div>
              </motion.div>
            );
          })}

          {/* Decorative Elements */}
          <motion.div
            className="absolute w-20 h-20 border-2 border-gray-300 rounded-full opacity-30"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ top: '10%', right: '10%' }}
          />
          <motion.div
            className="absolute w-16 h-16 border-2 border-gray-300 rounded-full opacity-30"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: -360 }}
            transition={{ duration: 2, delay: 0.7 }}
            viewport={{ once: true }}
            style={{ bottom: '10%', left: '10%' }}
          />

          {/* Floating dots for visual interest */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-gray-400 rounded-full"
              style={{
                top: `${15 + i * 10}%`,
                left: i % 2 === 0 ? '2%' : '98%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + i * 0.1
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualWorld;