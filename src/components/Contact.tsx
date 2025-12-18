import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-100 mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-2 sm:px-0">
            Ready to illuminate your brand? Let's start a conversation about your digital marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-amber-100 mb-4 sm:mb-6">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              We're here to answer your questions and discuss how we can help your business thrive
              in the digital world. Reach out through any of these channels.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-amber-400/5 border border-amber-200/10 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                  <Mail className="text-amber-400" size={20} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-xs sm:text-sm">firstlightdivinemarketing@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-amber-400/5 border border-amber-200/10 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                  <Phone className="text-amber-400" size={20} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-xs sm:text-sm">+91 79734 95711</p>
                </div>
              </div>

              <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-amber-400/5 border border-amber-200/10 hover:border-amber-400/30 hover:bg-amber-400/10 transition-all">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                  <MapPin className="text-amber-400" size={20} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-xs sm:text-sm">Serving clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 bg-gradient-to-br from-amber-400/10 to-amber-600/10 border border-amber-200/20 rounded-xl p-4 sm:p-6 backdrop-blur-md">
              <h4 className="text-amber-100 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Business Hours</h4>
              <div className="space-y-1.5 sm:space-y-2 text-slate-400 text-xs sm:text-sm">
                <div className="flex justify-between hover:text-slate-300 transition-colors">
                  <span>Monday - Friday</span>
                  <span className="text-amber-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-slate-300 transition-colors">
                  <span>Saturday</span>
                  <span className="text-amber-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-slate-300 transition-colors">
                  <span>Sunday</span>
                  <span className="text-amber-300">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-amber-200/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-amber-400/30 transition-all shadow-lg shadow-amber-400/10 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-100 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-amber-200/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-amber-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:bg-slate-800 focus:shadow-lg focus:shadow-amber-400/10 transition-all backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-100 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-amber-200/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-amber-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:bg-slate-800 focus:shadow-lg focus:shadow-amber-400/10 transition-all backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-amber-100 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-amber-200/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-amber-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:bg-slate-800 focus:shadow-lg focus:shadow-amber-400/10 transition-all backdrop-blur-sm"
                  placeholder="+91 79734 95711"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-amber-100 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-amber-200/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-amber-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:bg-slate-800 focus:shadow-lg focus:shadow-amber-400/10 transition-all backdrop-blur-sm"
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="email">Email Marketing</option>
                  <option value="content">Content Marketing</option>
                  <option value="brand">Brand Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-amber-100 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-800/50 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 focus:bg-slate-800 focus:shadow-lg focus:shadow-amber-400/10 transition-all resize-none backdrop-blur-sm"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3 sm:p-4 text-green-400 text-sm sm:text-base animate-fade-in">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:from-amber-500 hover:to-amber-700 shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} className="hidden sm:block" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
