import { motion } from 'framer-motion';
import mockup4 from '../assets/mockup4.png'; // Reusing mockup2 as it shows ingredient details which fits the "vitamins and minerals" theme

export const CompendiumShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nom-brown mb-6 leading-tight">
                Unlock Nature's <br />
                <span className="text-nom-green">Compendium</span>
              </h2>
              <p className="text-lg md:text-xl text-nom-brown/80 mb-8 leading-relaxed">
                Dive deep into the world of vitamins and minerals. Understand not just what they are, but why your body craves them.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Know Your Nutrients", desc: "Detailed profiles on every essential vitamin and mineral." },
                  { title: "Spot the Signs", desc: "Learn to recognize the subtle signs of deficiency." },
                  { title: "Find the Source", desc: "Discover which foods are packed with the nutrients you need." }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-nom-green/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-nom-green"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-nom-brown mb-1">{item.title}</h3>
                      <p className="text-nom-brown/70">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Mockup Visual */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-nom-brown rounded-[2.5rem] border-[8px] border-nom-brown shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-nom-bg">
                 <img 
                  src={mockup4} 
                  alt="NomNomicon Nutrient Compendium" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-nom-green/20 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
