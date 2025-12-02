import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2">
            <Sparkles className="text-amber-400" size={20} />
            <span className="text-amber-100 text-sm">Premium Digital Marketing Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-amber-100 mb-6 leading-tight">
            Illuminate Your Brand's
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Transform your business with strategic digital marketing that drives growth,
            engagement, and lasting success in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-500 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-400 text-amber-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400/10 transition-all"
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
