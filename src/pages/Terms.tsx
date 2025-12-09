import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-xl flex items-center justify-center">
            <FileText className="text-amber-400" size={24} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100">Terms of Service</h1>
        </div>

        <div className="space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 backdrop-blur-md border border-amber-200/10 rounded-2xl p-4 sm:p-6">
          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">1. Services Provided</h2>
          <p>
            We provide digital marketing services, including SEO, social media management, PPC advertising, content marketing, branding, email marketing, and related services as agreed in the project proposal.
          </p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">2. Payment Policy</h2>
          <p>
            For first-time clients, we require 50% upfront before starting the project, with the remaining 50% due upon project completion or as per the agreed timeline.
          </p>
          <p>
            For ongoing clients or monthly services, payment is due as per the monthly invoice before the start of the month.
          </p>
          <p>Payments must be completed on time to avoid any delay in service delivery.</p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">3. Refund Policy</h2>
          <p>Payments made are non-refundable.</p>
          <p>
            Once the 50% upfront payment is made, it cannot be requested back under any circumstances.
          </p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">4. Cancellation Policy</h2>
          <p>Clients cannot cancel the services in the middle of the month.</p>
          <p>If a service is monthly, it must be completed for the agreed period.</p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">5. Client Responsibilities</h2>
          <p>Clients must provide accurate information and access as required for the services.</p>
          <p>Timely communication and feedback are essential for smooth project execution.</p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">6. Limitation of Liability</h2>
          <p>
            We strive to provide the best results, but outcomes like ranking, traffic, or leads cannot be guaranteed due to factors beyond our control (like search engine changes or user behavior).
          </p>

          <h2 className="text-amber-100 font-semibold text-base sm:text-lg">7. Agreement Acceptance</h2>
          <p>
            By engaging our services, you acknowledge and agree to these terms, including payment, refund, and cancellation policies.
          </p>

          <div className="pt-4 border-t border-amber-200/10 text-slate-400 text-xs sm:text-sm">
            <a href="#/privacy" className="text-amber-300 hover:text-amber-200">View Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
