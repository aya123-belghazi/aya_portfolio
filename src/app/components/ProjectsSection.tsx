import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-School - Gestion d\'Établissement',
    description: 'Digitalisation complète des services pour l\'administration, les formateurs et les stagiaires. Gestion centralisée (notes, absences, emplois du temps) avec tableaux de bord et alertes. Interface responsive (Dark/Light mode) et Chatbot FAQ visiteur.',
    image: '/images/projet-eschool.png', // À modifier avec le bon chemin
    technologies: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'shadcn/ui']
    
  },
  {
    id: 2,
    title: 'Application E-commerce Front-End',
    description: 'Développement d\'une application de vente avec une interface client fluide (panier, paiement) et un Dashboard Admin sécurisé dédié à la gestion globale (produits, commandes, utilisateurs).',
    image: '/images/projet-ecommerce-react.png', 
    technologies: ['React.js', 'Redux']
  },
  {
    id: 3,
    title: 'RentFlow Pro - Gestion Locative (SaaS)',
    description: 'Plateforme centralisée pour la digitalisation des agences de location. Intègre un système de réservation en ligne, un tableau de bord en temps réel et un éditeur visuel Drag & Drop pour générer contrats PDF et factures avec signature électronique.',
    image: '/images/projet-rentflow.png', // À modifier avec le bon chemin
    technologies: ['React.js', 'Laravel', 'MySQL']
   
  },
  {
    id: 4,
    title: 'Application de Gestion Médicale',
    description: 'Développement d\'un logiciel de bureau destiné aux cabinets médicaux. Intègre la gestion complète des dossiers patients, la planification des rendez-vous et le suivi de l\'historique médical via une base de données NoSQL.',
    image: '/images/projet-gestion-medicale.jpg',
    technologies: ['Python', 'Tkinter', 'MongoDB']
  },
  {
    id: 5,
    title: 'Boutique en Ligne CMS',
    description: 'Configuration, personnalisation et déploiement d\'un site e-commerce performant. Intégration de modules de paiement sécurisé et optimisation technique pour le référencement naturel (SEO).',
    image: '/images/projet-boutique-wp.jpeg',
    technologies: ['WordPress', 'WooCommerce', 'Astra', 'SEO']
  },{
    id: 6,
    title: 'Site E-commerce Dynamique',
    description: 'Création d\'un site de vente en ligne "from scratch". Conception d\'une base de données relationnelle sur mesure pour le catalogue et les clients, avec une attention particulière portée à la sécurisation des sessions et des formulaires.',
    image: '/images/projet-ecommerce-php.png',
    technologies: ['PHP', 'MySQL']
  },
  {
    id: 7,
    title: 'Plateforme de Création de Portfolio',
    description: 'Conception d\'un site web intuitif permettant de générer des portfolios en ligne personnalisés sans aucune compétence technique préalable. Interface responsive et moderne, avec gestion complète de l\'authentification et des données côté serveur.',
    image: '/images/projet-portfolio-maker.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    id: 8,
    title: 'Dar L\'Hout - Site Vitrine & Multilingue',
    description: 'Développement d\'un site web multilingue pour un établissement de restauration. Intégration d\'un menu interactif, d\'une carte de localisation, d\'un module de contact rapide via WhatsApp et d\'un système de traduction dynamique pour une clientèle internationale.',
    image: '/images/projet-dar-lhout.png',
    technologies: ['WordPress', 'Astra', 'Elementor', 'TranslatePress']
  }
];

export function ProjectsSection() {
  return (
    <section id="projets" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
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
            Mes Projets
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Découvrez une sélection de mes réalisations récentes, 
            alliant design moderne et technologies de pointe.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="h-full" // La classe ajoutée est ici
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}