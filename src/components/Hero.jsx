import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Title fades up and scales down as user scrolls
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.div 
      style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
      className="text-center pb-24 md:pb-12 sticky top-20 z-0"
    >
      <h1 className="text-[3.5rem] leading-[0.9] md:text-[9.5rem] font-bold tracking-tighter mb-0 md:leading-[0.85] text-nom-brown">
        Not Just Calorie Tracking
      </h1>
    </motion.div>
  );
};
