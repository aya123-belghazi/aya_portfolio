import { Code2, Server, Database, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* En-tête de la carte avec margin-bottom augmenté un peu (mb-6) et shrink-0 pour protéger la hauteur */}
      <div className="flex items-center gap-3 mb-6 shrink-0">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      {/* L'astuce est ici : flex-grow permet au bloc de prendre tout l'espace libre, 
          et content-center centre les lignes de badges au milieu de cet espace */}
      <div className="flex flex-wrap gap-2 flex-grow content-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  // J'ai enrichi tes catégories avec les technos de tes projets et tes outils habituels
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: 'Front-end',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind', 'Bootstrap', 'Tkinter'],
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: 'Back-end',
      skills: ['PHP', 'Laravel', 'Node.js', 'Express', 'Python'],
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Bases de données',
      skills: ['MySQL','MongoDB'],
    },
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: 'Outils & Gestion',
      skills: ['Git', 'Figma', 'WordPress', 'WooCommerce', 'Agile', 'Scrum'],
    },
  ];

  return (
    <section id="competences" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mes <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Compétences</span>
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        {/* Le système de grille s'occupe de la largeur, et les cartes avec h-full s'occupent de la hauteur */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="h-full" // Ajouté ici aussi par précaution pour l'animation framer-motion
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}