import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/90"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 inline-flex items-center space-x-2 bg-amber-400/20 backdrop-blur-md border border-amber-400/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 animate-fade-in text-xs sm:text-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-amber-100 font-medium">Premium Digital Marketing Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-delayed">
we create strategies that deliver
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
              Digital Presence
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0 animate-fade-in-delayed-2">
            Transform your business with strategic digital marketing that drives growth,
            engagement, and lasting success in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 animate-fade-in-delayed-3">
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg w-full sm:w-auto overflow-hidden shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform hidden sm:block" size={20} />
              </div>
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-400 text-amber-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg w-full sm:w-auto hover:bg-amber-400/20 backdrop-blur-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 active:scale-95"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
