import { motion } from 'framer-motion';
import mockup4 from '../assets/mockup4.png';

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
              <p className="mb-4 text-5xl font-bold uppercase tracking-widest text-nom-green">
                Not just tracking
              </p>
              <h2 className="text-4xl md:text-3xl font-bold text-nom-brown mb-6 leading-tight">
                Share recipes. <br />
                <span className="text-nom-green">Sell your favorites.</span>
              </h2>
              <p className="text-lg md:text-xl text-nom-brown/80 mb-8 leading-relaxed">
                Turn the recipes you love into something worth sharing. Send them for free or set a price and sell them directly.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Share it your way", desc: "Send recipes to friends and followers through your favorite platforms." },
                  { title: "Set your price", desc: "Offer a recipe for free or choose what it costs to view." },
                  { title: "Made for food lovers", desc: "Keep your recipes in circulation and let great cooking travel." }
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
              className="relative w-70 md:w-80 aspect-9/19 bg-nom-brown rounded-[2.5rem] border-8 border-nom-brown shadow-2xl overflow-hidden"
            >
              <div className="w-full h-full bg-nom-bg">
                 <img 
                  src={mockup4} 
                  alt="NomNomicon recipe sharing and sale screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
};
