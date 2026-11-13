import { motion, useScroll, useTransform } from 'framer-motion';
import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';
import mockup3 from '../assets/mockup3.png';

export const MockupShowcase = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for the phones - Adjusted for Desktop, disabled/minimal on mobile via logic or classes if needed
  // Since we use Tailwind for positioning, the 'y' transform applies on top.
  // We'll keep the parallax as it adds a nice feel, but rely on CSS for the base layout.
  const phone1Y = useTransform(scrollY, [0, 1000], [0, -120]);
  const phone2Y = useTransform(scrollY, [0, 1000], [0, -180]);
  const phone3Y = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="relative h-[700px] md:h-[700px] mt-[-20px] md:mt-[-24px] z-10 pointer-events-none w-full max-w-[100vw] overflow-hidden md:overflow-visible">
      <div className="absolute inset-0 md:flex md:items-start md:justify-center md:gap-12 md:px-4">
        
        {/* Phone 1 (Search - Left Overlay on Mobile, Left on Desktop) */}
        {/* Mobile: Bottom Left, Rotated -12deg, Z-10 */}
        <motion.div 
          style={{ y: phone1Y }}
          className="
            absolute md:relative 
            top-[160px] left-[15%] md:top-auto md:left-auto
            z-10 md:z-auto
            w-[65%] max-w-[260px] md:w-72 md:max-w-none
            aspect-[9/19] 
            bg-nom-brown 
            rounded-[1.8rem] md:rounded-[3.5rem] 
            border-[5px] md:border-[10px] border-nom-brown 
            shadow-2xl 
            transform -rotate-12 
            origin-bottom 
            pointer-events-auto overflow-hidden
          "
        >
          <div className="w-full h-full bg-nom-bg">
            <img 
              src={mockup1} 
              alt="NomNomicon Search" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Phone 2 (Dashboard - Back Center on Mobile, Middle on Desktop) */}
        {/* Mobile: Top Center, Z-0 */}
        <motion.div 
          style={{ y: phone2Y }}
          className="
            absolute md:relative 
            top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-auto md:left-auto
            z-0 md:z-20 
            w-[70%] max-w-[280px] md:w-80 md:max-w-none 
            aspect-[9/19] 
            bg-nom-brown 
            rounded-[2rem] md:rounded-[4rem] 
            border-[6px] md:border-[12px] border-nom-brown 
            shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]
            pointer-events-auto overflow-hidden
          "
        >
          <div className="w-full h-full bg-nom-bg">
            <img 
              src={mockup3} 
              alt="NomNomicon Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Phone 3 (Ingredients - Right Overlay on Mobile, Right on Desktop) */}
        {/* Mobile: Bottom Right, Rotated 12deg, Z-20 */}
        <motion.div 
          style={{ y: phone3Y }}
          className="
            absolute md:relative 
               top-[160px] right-[15%] md:top-auto md:right-auto
            z-20 md:z-auto
            w-[65%] max-w-[260px] md:w-72 md:max-w-none
            aspect-[9/19] 
            bg-nom-brown 
            rounded-[1.8rem] md:rounded-[3.5rem] 
            border-[5px] md:border-[10px] border-nom-brown 
            shadow-2xl 
            transform rotate-12 
            origin-bottom 
            pointer-events-auto overflow-hidden
          "
        >
          <div className="w-full h-full bg-nom-bg">
            <img 
              src={mockup2} 
              alt="NomNomicon Ingredient Details" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};
