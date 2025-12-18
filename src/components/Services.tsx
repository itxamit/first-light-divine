import { Search, Megaphone, LineChart, Mail, Users, PenTool, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

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
  const [selected, setSelected] = useState<string | null>(null);

  const details: Record<string, { heading: string; paragraphs: string[]; bullets?: string[] }> = {
    'SEO Optimization': {
      heading: 'SEO (Search Engine Optimization)',
      paragraphs: [
        'SEO helps your website appear higher on Google when people search for your products or services. It improves your website’s structure, content, and overall performance so search engines clearly understand your business and show it to the right customers. And to help you achieve this, we focus on improving every part of your website that affects ranking — from your content and keywords to your speed, mobile experience, and technical health — so you see real, measurable growth.',
        'At our agency, we work on On-Page SEO and Technical SEO, which includes optimizing titles, headings, keywords, URLs, images, page speed, mobile responsiveness, and fixing any issues that stop your pages from ranking. We also enhance your content quality, internal linking, indexing, and overall user experience to make your website easy for both customers and Google to navigate.',
        'We help you get actual results by first understanding your business goals, analyzing your website and competitors, and identifying what your audience is searching for. Then we create a customized SEO strategy tailored to your brand. Our team consistently updates, improves, and monitors your website to ensure steady growth in search visibility, traffic, and leads. Our aim is simple: to make your website a strong, high-ranking asset that brings long-term success for your business.'
      ],
      bullets: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    'Email Marketing': {
      heading: 'Email Marketing',
      paragraphs: [
        'Email Marketing allows your business to connect directly with your audience through personalized messages, promotions, and updates, helping you drive engagement, sales, and customer loyalty.',
        'Instead of sending generic emails, we make sure every message reaches the right person at the right time, encouraging meaningful interactions and measurable results.',
        'We cover all aspects of email marketing, including campaign design, automation, audience segmentation, performance tracking, and optimization. Our team creates visually appealing emails with clear, compelling content that matches your brand’s voice.',
        'By segmenting your audience based on interests, behavior, and previous interactions, we ensure your campaigns are highly relevant and effective. Automation tools are used to schedule messages, follow-ups, and drip campaigns that nurture leads without you having to manage every step manually.',
        'Performance metrics like open rates, click-through rates, and conversions are closely monitored so we can refine each campaign for better results.',
        'Rather than just sending emails, we focus on building a strategy that works for your business. First, we analyze your audience, goals, and past campaigns to design a plan that maximizes impact. Then we handle everything from creating the content and visuals to scheduling, testing subject lines, and reviewing results—turning your email campaigns into a reliable growth engine for your business.'
      ],
      bullets: ['Campaign Design', 'Automation', 'Segmentation', 'Performance Tracking']
    },
    'Social Media Marketing': {
      heading: 'Social Media Management',
      paragraphs: [
        'Social Media Management ensures your brand stays visible, consistent, and engaging across platforms like Instagram, Facebook, LinkedIn, and more.',
        'Our services include social media marketing, content strategy, community management, paid advertisements, and analytics reporting.',
        'We create content calendars, design visuals that attract attention, write captions that encourage engagement, and manage interactions to build loyalty.',
        'Paid campaigns are crafted to reach the right audience and boost visibility, while analytics track performance to refine strategies for consistent growth.',
        'We act as your digital partner—studying your brand, audience, and competitors—then tailoring a plan to increase engagement, grow followers, and generate leads with measurable results.'
      ],
      bullets: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
    },
    'PPC Advertising': {
      heading: 'PPC Advertising',
      paragraphs: [
        'PPC Advertising is a fast and effective way to get your business noticed by the right people online. Platforms like Google and Facebook let you show ads to users actively searching for products or services like yours, paying only when someone clicks.',
        'We offer end-to-end PPC management across Google Ads and Facebook Ads, including campaign creation, audience targeting, A/B testing, optimization, and performance monitoring.',
        'Every campaign is carefully planned with ad copy and visuals designed to grab attention. We continuously track clicks, conversions, and other metrics to ensure your budget delivers the best possible results.',
        'Our approach is hands-on and results-focused: we analyze your audience, study competitors, and design campaigns aligned with your goals—managing ad creation, bids, testing, and reporting to maximize ROI.'
      ],
      bullets: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
    },
    'Content Marketing': {
      heading: 'Content Marketing',
      paragraphs: [
        'Content Marketing creates and shares valuable content that attracts, educates, and engages your audience while building trust in your brand.',
        'Services include blog writing, video content, infographics, social content, and content calendar planning.',
        'We craft informative blog posts optimized for search, produce attention-grabbing videos, and design infographics that simplify complex topics.',
        'With a structured content calendar, your content stays consistent, relevant, and timed to maximize reach and engagement.',
        'We focus on strategy and results by understanding your audience, goals, and industry trends—then creating content tailored to your brand voice and objectives. Performance is analyzed and strategies adjusted to support lead generation, brand awareness, and long-term growth.'
      ],
      bullets: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar']
    },
    'Brand Strategy': {
      heading: 'Brand Strategy',
      paragraphs: [
        'A strong brand is more than just a logo or a catchy tagline—it’s the way your business is perceived, remembered, and trusted by your audience. Brand Strategy defines your unique position in the market, shapes your messaging, and ensures every interaction with your audience reflects who you are.',
        'Through brand positioning, voice and messaging, visual identity, and market research, we build a framework that makes your brand stand out.',
        'This includes crafting a tone and style that speaks to your customers, designing a cohesive visual identity with logos, colors, and design elements, and analyzing the market to identify opportunities and insights that strengthen your presence.',
        'Every decision—from your messaging to your visuals—is guided by a clear understanding of your audience and your business goals. By aligning all touchpoints under one strategic vision, your brand becomes recognizable, memorable, and consistent across every platform.',
        'The outcome is a brand that resonates deeply with your audience, builds trust, and drives meaningful engagement, giving you a strong foundation for growth and long-term success.'
      ],
      bullets: ['Brand Positioning', 'Voice & Messaging', 'Visual Identity', 'Market Research']
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-100 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-2 sm:px-0">
            Comprehensive digital marketing solutions tailored to elevate your brand and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/60 backdrop-blur-md border border-amber-200/10 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 service-card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gradient-to-br from-amber-400/20 to-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 sm:w-14 h-12 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all flex-shrink-0">
                    <Icon className="text-amber-400" size={24} />
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-amber-100 mb-2 sm:mb-3 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setSelected(service.title)} className="w-full flex items-center justify-center space-x-1 sm:space-x-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/20 text-amber-300 py-2 rounded-lg font-medium text-xs sm:text-sm hover:from-amber-400/20 hover:to-amber-600/20 hover:border-amber-400/40 transition-all group/btn active:scale-95">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform hidden sm:block" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelected(null)}></div>
            <div className="relative max-w-2xl w-[92%] sm:w-[85%] md:w-[70%] bg-slate-900 border border-amber-200/20 rounded-2xl shadow-2xl shadow-amber-400/20 overflow-hidden animate-fade-in">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-amber-200/10 bg-gradient-to-r from-amber-400/10 to-amber-600/10">
                <h4 className="text-amber-100 font-semibold text-base sm:text-lg">
                  {details[selected]?.heading || selected}
                </h4>
                <button aria-label="Close" className="text-amber-300 hover:text-amber-200 transition-colors" onClick={() => setSelected(null)}>
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {(details[selected]?.bullets?.length || 0) > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {details[selected]?.bullets?.map((b, i) => (
                      <span key={i} className="inline-flex items-center px-2 py-1 rounded-full text-xs sm:text-sm border border-amber-200/20 text-amber-200 bg-amber-400/5">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
                {details[selected]?.paragraphs?.map((p, i) => (
                  <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                )) || (
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    A comprehensive overview of this service is coming soon. Get in touch to discuss how we tailor this offering to your goals.
                  </p>
                )}               
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
