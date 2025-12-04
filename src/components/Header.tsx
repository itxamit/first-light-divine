import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-amber-200/10">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/logo.png"
              alt="First Light Divine"
              className="h-10 sm:h-12 w-10 sm:w-12 object-contain"
            />
            <span className="text-base sm:text-lg md:text-xl font-serif text-amber-100 truncate">First Light Divine</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm text-amber-100 hover:text-amber-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm text-amber-100 hover:text-amber-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-amber-100 hover:text-amber-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-amber-100 hover:text-amber-300 transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-4 lg:px-6 py-2 rounded-full font-medium text-sm hover:from-amber-500 hover:to-amber-700 transition-all transform hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-amber-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-sm sm:text-base text-amber-100 hover:text-amber-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-sm sm:text-base text-amber-100 hover:text-amber-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-sm sm:text-base text-amber-100 hover:text-amber-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-sm sm:text-base text-amber-100 hover:text-amber-300 transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base w-full transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
