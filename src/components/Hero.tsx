/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className='relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-b from-green-50 via-white to-gray-50 -z-10' />

      {/* Decorative elements */}
      <div className='absolute top-40 right-10 w-72 h-72 bg-[#059669]/10 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10' />

      <div className='container mx-auto max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8 opacity-0 animate-[fadeInLeft_1s_ease-out_forwards]'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-[#059669]/10 text-[#059669] rounded-full text-sm font-semibold'>
              <Sparkles className='w-4 h-4' />
              <span>Innovative Software Solutions</span>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
              Building The Future With{" "}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-[#059669] to-[#1f7d4d]'>
                Innovative
              </span>
              <br />
              Software Solutions
            </h1>

            <p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
              At Mivo Solutions Ltd, we are dedicated to transforming ideas into
              innovative software solutions that drive business success.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button asChild size='lg' className='w-full sm:w-auto group'>
                <Link href='/products'>
                  Explore Our Products
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='w-full sm:w-auto'
              >
                <Link href='/contact'>Get In Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className='relative opacity-0 animate-[fadeInRight_1s_ease-out_0.3s_forwards]'>
            <div className='relative aspect-square rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='/images/hero/hero-image.jpg'
                alt='Team collaboration'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-tr from-[#059669]/20 to-transparent' />
            </div>

            {/* Floating stats cards */}
            <div className='absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]'>
              <div className='text-3xl font-bold text-[#059669]'>3+</div>
              <div className='text-sm text-gray-600'>Years Experience</div>
            </div>

            <div className='absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 opacity-0 animate-[fadeInDown_1s_ease-out_0.5s_forwards]'>
              <div className='text-3xl font-bold text-[#059669]'>2+</div>
              <div className='text-sm text-gray-600'>Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
