import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className='relative bg-linear-to-br from-gray-900 via-gray-900 to-black text-white overflow-hidden'>
      {/* Decorative background */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl' />
      </div>

      <div className='relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2 mb-1'>
              <Image
                src='/logos/mivo-light.svg'
                alt='Mivo Solutions Logo'
                width={18}
                height={18}
                className='h-5 w-auto'
              />
              <h3 className='text-2xl font-bold'>
                <span className='text-[#059669]'>Solutions</span>
              </h3>
            </div>

            <p className='text-gray-400 mb-6 max-w-md leading-relaxed text-base'>
              Transforming ideas into innovative software solutions. Mission,
              Innovation, Vision, and Opportunity—driving everything we do.
            </p>

            {/* Social Links */}
            <div className='flex gap-3'>
              <a
                href='https://instagram.com/mivosolutions'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-[#059669] transition-all duration-300 border border-gray-800 hover:border-[#059669]'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='https://x.com/mivosolutions'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-[#059669] transition-all duration-300 border border-gray-800 hover:border-[#059669]'
                aria-label='X (Twitter)'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='https://linkedin.com/company/mivosolutions'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-[#059669] transition-all duration-300 border border-gray-800 hover:border-[#059669]'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6 text-white'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-[#059669] transition-colors inline-flex items-center group'
                >
                  <span className='w-1.5 h-1.5 bg-[#059669] rounded-full mr-2 opacity-100 transition-opacity' />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  className='text-gray-400 hover:text-[#059669] transition-colors inline-flex items-center group'
                >
                  <span className='w-1.5 h-1.5 bg-[#059669] rounded-full mr-2 opacity-100 transition-opacity' />
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-[#059669] transition-colors inline-flex items-center group'
                >
                  <span className='w-1.5 h-1.5 bg-[#059669] rounded-full mr-2 opacity-100 transition-opacity' />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-6 text-white'>
              Get In Touch
            </h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href='tel:+250790603658'
                  className='text-gray-400 hover:text-[#059669] transition-colors flex items-start gap-3 group'
                >
                  <Phone className='w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform' />
                  <span>+250 790 603 658</span>
                </a>
              </li>
              <li>
                <a
                  href='mailto:contact@mivosolutions.com'
                  className='text-gray-400 hover:text-[#059669] transition-colors flex items-start gap-3 group'
                >
                  <Mail className='w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform' />
                  <span className='break-all'>contact@mivosolutions.com</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.mivosolutions.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-[#059669] transition-colors flex items-start gap-3 group'
                >
                  <Globe className='w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform' />
                  <span>www.mivosolutions.com</span>
                </a>
              </li>
              <li>
                <div className='text-gray-400 flex items-start gap-3'>
                  <MapPin className='w-5 h-5 mt-0.5 shrink-0 text-[#059669]' />
                  <span>Kigali, Rwanda</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Mivo Solutions Ltd. All rights
              reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link
                href='/privacy-policy'
                className='text-gray-500 hover:text-[#059669] transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-500 hover:text-[#059669] transition-colors'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
