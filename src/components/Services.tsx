import { Search, Megaphone, LineChart, Mail, Users, PenTool, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines with our proven SEO strategies and techniques.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Build meaningful connections with your audience across all major social media platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: LineChart,
    title: 'PPC Advertising',
    description: 'Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing'],
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that convert.',
    features: ['Campaign Design', 'Automation', 'Segmentation', 'Performance Tracking'],
    image: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling content that tells your brand story and drives action.',
    features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Users,
    title: 'Brand Strategy',
    description: 'Build a powerful brand identity that resonates with your target audience and stands out.',
    features: ['Brand Positioning', 'Voice & Messaging', 'Visual Identity', 'Market Research'],
    image: 'https://images.pexels.com/photos/3194517/pexels-photo-3194517.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
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
                className="group bg-slate-900/60 backdrop-blur-md border border-amber-200/10 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 service-card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-400/20 to-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                    <Icon className="text-amber-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-amber-100 mb-3 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/20 text-amber-300 py-2 rounded-lg font-medium text-sm hover:from-amber-400/20 hover:to-amber-600/20 hover:border-amber-400/40 transition-all group/btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
