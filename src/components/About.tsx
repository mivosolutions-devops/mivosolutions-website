import {
  Target,
  Lightbulb,
  Eye,
  Rocket,
  Users,
  Package,
  Award
} from "lucide-react";

export default function About() {
  const stats = [
    { value: "9", label: "Skilled Experts", icon: Users },
    { value: "2+", label: "Products", icon: Package },
    { value: "3+", label: "Years Of Experience", icon: Award }
  ];

  const values = [
    {
      title: "Mission-Driven",
      description: "We focus on solutions that make an impact.",
      icon: Target
    },
    {
      title: "Innovative Approach",
      description: "We embrace new technologies and creative problem-solving.",
      icon: Lightbulb
    },
    {
      title: "Visionary Thinking",
      description: "We anticipate trends to keep your business ahead.",
      icon: Eye
    },
    {
      title: "Opportunity-Focused",
      description:
        "We help clients leverage technology for growth and efficiency.",
      icon: Rocket
    }
  ];

  return (
    <section
      id='about'
      className='py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10' />

      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700'>
          <p className='text-[#28A265] font-semibold text-sm uppercase tracking-wider mb-4'>
            ABOUT MIVO SOLUTIONS LTD
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Empowering Business with Cutting-Edge Digital Solutions
          </h2>
        </div>

        <div className='max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-200'>
          <div className='space-y-6 text-lg text-gray-600 leading-relaxed text-center'>
            <p>
              At Mivo Solutions Ltd, we turn ideas into innovative software
              solutions. Our name reflects our core values:{" "}
              <strong className='text-gray-900'>
                Mission, Innovation, Vision, and Opportunity
              </strong>
              —guiding everything we do.
            </p>
            <p>
              We are a forward-thinking software development company committed
              to helping businesses harness technology to achieve their goals.
              Whether it&apos;s building custom applications, developing
              scalable platforms, or delivering cutting-edge digital solutions,
              we combine creativity with technical expertise to drive real
              results.
            </p>
            <p>
              Our team believes in collaboration, adaptability, and continuous
              learning, ensuring that every project we undertake aligns with our
              clients&apos; vision and creates opportunities for growth.
            </p>
          </div>
        </div>

        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Why Choose Mivo Solutions?
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='group p-8 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-200 hover:border-[#28A265] hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='inline-flex p-3 bg-[#28A265]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform'>
                    <Icon className='w-7 h-7 text-[#28A265]' />
                  </div>
                  <h4 className='text-xl font-bold text-gray-900 mb-3'>
                    {value.title}
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className='relative group p-10 bg-linear-to-br from-[#28A265] to-[#1f7d4d] rounded-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom'
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className='absolute top-0 right-0 opacity-10'>
                  <Icon className='w-32 h-32' />
                </div>
                <div className='relative z-10'>
                  <Icon className='w-10 h-10 mb-4' />
                  <div className='text-5xl font-bold mb-2'>{stat.value}</div>
                  <div className='text-lg font-medium opacity-90'>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
