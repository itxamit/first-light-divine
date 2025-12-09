import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-amber-200/10">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img
                src="/logo.png"
                alt="First Light Divine"
                className="h-10 sm:h-12 w-10 sm:w-12 object-contain hover:scale-110 transition-transform"
              />
              <span className="text-base sm:text-lg md:text-xl font-serif text-amber-100">First Light Divine</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed hover:text-slate-300 transition-colors">
              Illuminating brands through strategic digital marketing excellence.
            </p>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#services" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">SEO Optimization</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">Social Media</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">PPC Advertising</a></li>
              <li><a href="#services" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">Content Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#about" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="#contact" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">Contact</a></li>
              <li><a href="#/privacy" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
              <li><a href="#/terms" className="text-xs sm:text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all inline-block">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us</h3>
            <div className="flex gap-2 sm:gap-3">

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/60 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-amber-400/20"
              >
                <Facebook className="text-amber-400 group-hover:scale-110 transition-transform" size={16} />
              </a>

              {/* Instagram — UPDATED */}
              <a
                href="https://www.instagram.com/firstlightdivinemarketing?igsh=MWx1eXYwam1jZ3QzdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/60 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-amber-400/20"
              >
                <Instagram className="text-amber-400 group-hover:scale-110 transition-transform" size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/60 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-amber-400/20"
              >
                <Linkedin className="text-amber-400 group-hover:scale-110 transition-transform" size={16} />
              </a>

            </div>

          </div>
        </div>

        <div className="border-t border-amber-200/10 pt-6 sm:pt-8 text-center text-slate-400 text-xs sm:text-sm">
          <p>&copy; {currentYear} First Light Divine Digital Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
