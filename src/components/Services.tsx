import { Smartphone, Globe, Workflow, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Mobile Application Development",
      description:
        "We specialize in developing mobile applications for various platforms such as iOS and Android. The process involves creating applications that are tailored to the specific needs of clients.",
      icon: Smartphone,
    },
    {
      title: "Web Application Development",
      description:
        "We offer web application development services, focusing on building scalable, secure, and user-friendly web-based solutions. Our solutions are timeless and create lasting impact.",
      icon: Globe,
    },
    {
      title: "System Integration & Deployment",
      description:
        "We seamlessly integrate new solutions with your existing infrastructure and provide comprehensive deployment services to ensure smooth operations across all platforms.",
      icon: Workflow,
    },
    {
      title: "Information Security",
      description:
        "We provide expertise in ensuring the security and integrity of digital assets and systems with cutting-edge security solutions.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <p className="text-[#28A265] font-semibold text-sm uppercase tracking-wider mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-[#28A265] bg-white hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-[#28A265]/10 text-[#28A265] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#28A265] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
