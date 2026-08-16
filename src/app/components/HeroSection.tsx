import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onViewProjects: () => void;
}

export function HeroSection({ onViewProjects }: HeroSectionProps) {
  return (
    <section id="accueil" className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AYA BELGHAZI
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Développeuse<br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Full Stack
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Passionnée par la création d'expériences web modernes et performantes. 
              Je transforme vos idées en applications élégantes et fonctionnelles, 
              du front-end au back-end.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Voir mes projets
                <ArrowRight className="w-5 h-5" />
              </button>

                  <a
                    href="/aya_cv.pdf" // Remplace par le nom exact de ton fichier dans le dossier public
                    target="_blank"
                    // Le nom sous lequel le recruteur va l'enregistrer
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
                  >
                    <FileDown className="w-5 h-5" />
                    Télécharger mon CV
                  </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-teal-200 rounded-3xl blur-3xl opacity-30"></div>
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="./images/header.jpg"
                alt="Développeuse Full Stack"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
