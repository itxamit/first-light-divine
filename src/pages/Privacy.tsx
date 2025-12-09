import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-xl flex items-center justify-center">
            <Shield className="text-amber-400" size={24} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100">Privacy Policy</h1>
        </div>

        <div className="space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 backdrop-blur-md border border-amber-200/10 rounded-2xl p-4 sm:p-6">
          <p>
            At First Light Divine Marketing, we value your privacy and are committed to protecting your personal information. When you work with us or visit our website, we may collect details such as your name, email address, phone number, and other information you provide.
          </p>
          <p>We use this information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and manage the services you request</li>
            <li>Communicate with you regarding your projects, updates, or promotions</li>
            <li>Improve our services and understand your needs better</li>
          </ul>
          <p>
            Your personal data may be accessed by our team members to deliver services efficiently. We do not sell or share your information with third parties for marketing purposes. Any data you provide is securely stored and handled with care.
          </p>
          <p>
            By using our services, you consent to the collection and use of your information as described in this Privacy Policy.
          </p>

          <div className="pt-4 border-t border-amber-200/10 text-slate-400 text-xs sm:text-sm">
            <a href="#/terms" className="text-amber-300 hover:text-amber-200">View Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}

