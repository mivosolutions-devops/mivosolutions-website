/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Car, Shield, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      name: "NaviGO",
      title: "Smart Vehicle & Fleet Tracking",
      description:
        "NaviGO is a comprehensive mobile and web platform that provides real-time tracking for vehicles, buses, and fleets. Track location, monitor road conditions, get intelligent route recommendations, and receive real-time traffic insights for optimal navigation.",
      features: [
        "Real-time vehicle, bus, and fleet tracking",
        "Live road conditions and traffic insights",
        "Intelligent shortest path recommendations",
        "NaviGO Maps & Mobile App",
        "ITMS (Intelligent Traffic Management)",
        "Transit fleet management system"
      ],
      link: "https://www.navigo.rw",
      available: true,
      icon: Car,
      image: "/images/products/navigo.png"
    },
    {
      name: "SafeNet",
      title: "Secure VPN & Remote Access Solution",
      description:
        "SafeNet is a powerful VPN solution that enables secure remote access to your servers and personal devices. Deploy on cloud or self-host on-premise with complete control over your infrastructure.",
      features: [
        "Secure SSH remote server access",
        "VPN for personal devices protection",
        "Cloud deployment support",
        "Self-hosted on-premise option",
        "End-to-end encryption",
        "Full infrastructure control"
      ],
      link: "#",
      available: false,
      icon: Shield,
      image: "/images/products/safenet.jpg"
    }
  ];

  return (
    <section
      id='products'
      className='py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white relative overflow-hidden'
    >
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700'>
          <p className='text-[#059669] font-semibold text-sm uppercase tracking-wider mb-4'>
            OUR PRODUCTS
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            We Deliver Best Solutions
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Innovative products designed to transform your business
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 animate-in fade-in slide-in-from-bottom flex flex-col h-full'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-br opacity-60`}
                  />
                  <div className='absolute top-4 right-4'>
                    {product.available ? (
                      <div className='px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full'>
                        Live
                      </div>
                    ) : (
                      <div className='px-3 py-1 bg-gray-900/70 text-white text-xs font-semibold rounded-full flex items-center gap-1'>
                        <Clock className='w-3 h-3' />
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div
                    className={`absolute bottom-4 left-4 p-3 bg-white rounded-xl shadow-lg`}
                  >
                    <Icon className='w-6 h-6 text-[#059669]' />
                  </div>
                </div>

                {/* Product Content */}
                <div className='p-6 flex flex-col grow'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {product.name}
                  </h3>
                  <h4 className='text-lg font-semibold text-[#059669] mb-3'>
                    {product.title}
                  </h4>
                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {product.description}
                  </p>

                  {product.features && (
                    <div className='mb-6'>
                      <p className='text-sm font-semibold text-gray-700 mb-2'>
                        Features:
                      </p>
                      <div className='space-y-2'>
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-start gap-2 text-sm text-gray-700'
                          >
                            <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-1.5 shrink-0' />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Button at bottom */}
                  <div className='mt-auto'>
                    {product.available ? (
                      <Button
                        asChild
                        variant='outline'
                        className='w-full group/btn'
                      >
                        <Link
                          href={product.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Learn More
                          <ArrowRight className='ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform inline-block' />
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className='w-full'>
                        Coming Soon
                      </Button>
                    )}
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
