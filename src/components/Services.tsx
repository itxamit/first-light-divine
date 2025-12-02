import { Search, Megaphone, LineChart, Mail, Users, PenTool } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines with our proven SEO strategies and techniques.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Build meaningful connections with your audience across all major social media platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    icon: LineChart,
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that convert.',
    features: ['Campaign Design', 'Automation', 'Segmentation', 'Performance Tracking']
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling content that tells your brand story and drives action.',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar']
  },
  {
    icon: Users,
    title: 'Brand Strategy',
    description: 'Build a powerful brand identity that resonates with your target audience and stands out.',
    features: ['Brand Positioning', 'Voice & Messaging', 'Visual Identity', 'Market Research']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand and achieve your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900 border border-amber-200/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                  <Icon className="text-amber-400" size={32} />
                </div>

                <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-400">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
