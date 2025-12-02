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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="First Light Divine"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-serif text-amber-100">First Light Divine</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-amber-100 hover:text-amber-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-amber-100 hover:text-amber-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-amber-100 hover:text-amber-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-amber-100 hover:text-amber-300 transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-2 rounded-full font-medium hover:from-amber-500 hover:to-amber-700 transition-all transform hover:scale-105"
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
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-amber-100 hover:text-amber-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-amber-100 hover:text-amber-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-amber-100 hover:text-amber-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-amber-100 hover:text-amber-300 transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 py-2 rounded-full font-medium w-full"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
