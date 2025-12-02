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
    <section id="contact" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to illuminate your brand? Let's start a conversation about your digital marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-6">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We're here to answer your questions and discuss how we can help your business thrive
              in the digital world. Reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Email</h4>
                  <p className="text-slate-400">info@firstlightdivine.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Location</h4>
                  <p className="text-slate-400">Serving clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-900 border border-amber-200/10 rounded-xl p-6">
              <h4 className="text-amber-100 font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-amber-200/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-100 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-100 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-amber-100 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-amber-100 mb-2 font-medium">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 transition-colors"
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
                <label htmlFor="message" className="block text-amber-100 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-slate-800 border border-amber-200/20 rounded-lg px-4 py-3 text-amber-100 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 text-green-400">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-500 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
