import { Target, Award, TrendingUp, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Strategic Focus',
    description: 'Every campaign is driven by data and aligned with your unique business objectives.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver premium quality in every aspect of our work, from strategy to execution.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Mindset',
    description: 'We are committed to continuous improvement and staying ahead of industry trends.'
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our success. We build lasting partnerships based on trust and results.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-6">
              About First Light Divine
            </h2>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We are a premier digital marketing agency dedicated to illuminating brands and
              transforming their online presence. With a blend of creativity, strategy, and
              cutting-edge technology, we help businesses rise above the competition.
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our team of experienced marketers, designers, and strategists work collaboratively
              to craft campaigns that not only capture attention but drive meaningful results.
              We believe in the power of authentic storytelling and data-driven decision making.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Whether you're a startup looking to make your mark or an established business
              seeking to expand your digital footprint, we're here to guide you every step of the way.
            </p>

            <div className="flex items-center space-x-12 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-200/20 rounded-2xl p-8 backdrop-blur-md">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">150+</div>
                <div className="text-slate-400">Clients Served</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-amber-400/0 via-amber-400/50 to-amber-400/0"></div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">98%</div>
                <div className="text-slate-400">Satisfaction Rate</div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-amber-400/0 via-amber-400/50 to-amber-400/0"></div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent mb-1">5+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative mb-8 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl shadow-amber-400/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/60 backdrop-blur-md border border-amber-200/10 rounded-xl p-6 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/20 transition-all service-card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all">
                      <Icon className="text-amber-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-100 mb-2 group-hover:text-amber-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
