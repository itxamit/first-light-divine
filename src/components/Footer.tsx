import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-amber-200/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/WhatsApp Image 2025-11-26 at 20.12.16_7172aeac.jpg"
                alt="First Light Divine"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-serif text-amber-100">First Light Divine</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Illuminating brands through strategic digital marketing excellence.
            </p>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">Social Media</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">PPC Advertising</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors">Content Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-100 font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-slate-800 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-10 h-10 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="text-amber-400" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-10 h-10 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="text-amber-400" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-10 h-10 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="text-amber-400" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-10 h-10 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="text-amber-400" size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-400/20 border border-amber-200/10 hover:border-amber-400/30 w-10 h-10 rounded-lg flex items-center justify-center transition-all">
                <Youtube className="text-amber-400" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200/10 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} First Light Divine Digital Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
