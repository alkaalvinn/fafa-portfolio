import React, { useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import fonts for the design
const fontStyles = `
  @import url('https://fonts.cdnfonts.com/css/bebas-neue');
  @import url('https://fonts.cdnfonts.com/css/poppins');
`;

const VisualWorld = () => {
  const { scrollYProgress } = useScroll();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Visual items with images
  const visualItems = [
    {
      id: 1,
      title: "I Live in",
      subtitle: "Visual World",
      description: "Creating compelling visual narratives that connect brands with their audience through creative storytelling and innovative design solutions.",
      imageUrl: "https://media.spelunky.fyi/mods/logo/01FRHF0XXXEJDPE5ZRJ8HG4Y7R/1641263691712448.png"
    },
    {
      id: 2,
      title: "Creative",
      subtitle: "Photography",
      description: "Capturing moments that tell stories and evoke emotions through the lens of creativity and artistic vision.",
      imageUrl: "https://pngimg.com/d/camera_PNG101545.png"
    },
    {
      id: 3,
      title: "Design",
      subtitle: "Innovation",
      description: "Transforming ideas into visual experiences that inspire and engage audiences across various platforms.",
      imageUrl: "https://pngimg.com/d/brush_PNG25.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % visualItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + visualItems.length) % visualItems.length);
  };

  return (
    <>
      <style>{fontStyles}</style>
      <section
        ref={ref}
        id="visual-world"
        className="relative w-full h-screen overflow-hidden bg-slate-700"
        style={{ marginTop: '-70px' }}
      >
        <div className="relative w-full h-full">
          {/* Visual Items Carousel */}
          {visualItems.map((item, index) => {
            const blurAmount = useTransform(
              scrollYProgress,
              [0, 0.3, 0.6],
              [30, 10, 0]
            );

            const rotation = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [index === currentIndex ? -60 : 60, 0, index === currentIndex ? 0 : 60]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.4],
              [index === currentIndex ? 1 : 0, index === currentIndex ? 1 : 0, index === currentIndex ? 1 : 0]
            );

            const translateY = useTransform(
              scrollYProgress,
              [0, 0.3, 0.6],
              [index === currentIndex ? 0 : 100, index === currentIndex ? 0 : 100, index === currentIndex ? 0 : 100]
            );

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 flex justify-center items-center"
                style={{
                  opacity,
                  pointerEvents: index === currentIndex ? 'auto' : 'none'
                }}
              >
                {/* Circular Image */}
                <motion.div
                  style={{
                    width: '716px',
                    height: '716px',
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    filter: `blur(${blurAmount.get()}px)`,
                    rotate: rotation,
                    position: 'relative',
                    transition: '1s'
                  }}
                  className="flex-shrink-0"
                >
                  {/* Inner circles */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '70%',
                      height: '70%',
                      borderRadius: '50%',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${rotation.get() + 0}deg)`,
                      backgroundImage: `linear-gradient(to right, #0004, #0004), url(${item.imageUrl})`,
                      backgroundSize: '716px 716px',
                      backgroundPosition: 'center',
                      transition: '1s'
                    }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '30%',
                      height: '30%',
                      borderRadius: '50%',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${rotation.get() + 0}deg)`,
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: '716px 716px',
                      backgroundPosition: 'center',
                      border: '3px solid #fff2',
                      transition: '1s'
                    }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'max-content',
                    maxWidth: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 400px)',
                    textAlign: 'left',
                    gap: '80px',
                    fontSize: '1.2em',
                    textTransform: 'uppercase',
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '0 0 80px #000',
                    translateY
                  }}
                  className="content"
                >
                  <motion.h2
                    style={{
                      fontSize: '10em',
                      fontFamily: 'Bebas Neue, sans-serif',
                      lineHeight: '0.9em',
                      transform: `translateY(${translateY.get()}px)`,
                      transition: 'transform 1s',
                      gridRowStart: 1,
                      gridRowEnd: 3
                    }}
                    className="text-white"
                  >
                    {item.title}
                    <br />
                    {item.subtitle}
                  </motion.h2>
                  <motion.p
                    style={{
                      color: '#eee'
                    }}
                    className="col-span-1"
                  >
                    {item.description}
                  </motion.p>
                  <motion.p
                    style={{
                      color: '#eee',
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'end',
                      paddingBottom: '25px'
                    }}
                    className="col-span-1"
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '30px',
              width: 'min(1200px, 90vw)',
              display: 'flex',
              justifyContent: 'space-between'
            }}
            className="arrows"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={prevSlide}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VisualWorld;