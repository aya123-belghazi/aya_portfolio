import { useState, useEffect } from 'react';
import { Home, Briefcase, Mail, Menu, X } from 'lucide-react'; // Ajout de Menu et X
import { Logo } from './Logo';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // État pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'projets', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    onNavigate(id);
    setIsMobileMenuOpen(false); // Ferme le menu mobile après un clic
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-sm z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 text-lg">A.B Dev</span>
              <span className="text-xs text-teal-600 font-mono">Full Stack</span>
            </div>
          </div>

          {/* Navigation Desktop (Cachée sur mobile) */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('accueil')}
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 ${
                activeSection === 'accueil'
                  ? 'border-teal-400 bg-teal-50 text-teal-600'
                  : 'border-gray-300 bg-transparent text-gray-600 hover:border-teal-400 hover:text-teal-600'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-mono text-sm">Accueil</span>
            </button>
            <button
              onClick={() => handleNavClick('projets')}
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 ${
                activeSection === 'projets'
                  ? 'border-teal-400 bg-teal-50 text-teal-600'
                  : 'border-gray-300 bg-transparent text-gray-600 hover:border-teal-400 hover:text-teal-600'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="font-mono text-sm">Projets</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">Contact</span>
            </button>
          </nav>

          {/* Bouton Menu Mobile (Caché sur Desktop) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-3">
          <button
            onClick={() => handleNavClick('accueil')}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300 w-full ${
              activeSection === 'accueil'
                ? 'border-teal-400 bg-teal-50 text-teal-600'
                : 'border-gray-200 bg-gray-50/50 text-gray-600'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-mono text-base">Accueil</span>
          </button>
          <button
            onClick={() => handleNavClick('projets')}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300 w-full ${
              activeSection === 'projets'
                ? 'border-teal-400 bg-teal-50 text-teal-600'
                : 'border-gray-200 bg-gray-50/50 text-gray-600'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-mono text-base">Projets</span>
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg shadow-md w-full"
          >
            <Mail className="w-5 h-5" />
            <span className="font-mono text-base">Contact</span>
          </button>
        </div>
      )}
    </header>
  );
}