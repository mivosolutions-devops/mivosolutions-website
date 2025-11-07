import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  XCircle,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Mivo Solutions Ltd",
  description:
    "Read the terms and conditions for using Mivo Solutions Ltd services and products."
};

export default function TermsPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <div className='pt-20'>
        {/* Hero Section */}
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-50 via-white to-gray-50'>
          <div className='container mx-auto max-w-4xl text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-[#059669]/10 text-[#059669] rounded-full text-sm font-semibold mb-6'>
              <Scale className='w-4 h-4' />
              <span>Legal Terms</span>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Terms of Service
            </h1>
            <p className='text-lg text-gray-600'>Last updated: May 1, 2025</p>
          </div>
        </section>

        {/* Content Section */}
        <section className='py-16 px-4 sm:px-6 lg:px-8'>
          <div className='container mx-auto max-w-4xl'>
            <div className='prose prose-lg max-w-none'>
              {/* Introduction */}
              <div className='mb-12'>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Welcome to Mivo Solutions Ltd. These Terms of Service
                  (&quot;Terms&quot;) govern your access to and use of our
                  website, products, and services. By accessing or using our
                  services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <CheckCircle className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Acceptance of Terms
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  By accessing and using Mivo Solutions services, you accept and
                  agree to be bound by these Terms and our Privacy Policy. If
                  you do not agree to these Terms, you should not use our
                  services.
                </p>
              </div>

              {/* Services */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <FileText className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Our Services
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed mb-4'>
                  Mivo Solutions Ltd provides software development services,
                  including but not limited to:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Mobile application development</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Web application development</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>System integration and deployment</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Information security services</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Custom software solutions</span>
                  </li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  User Responsibilities
                </h2>

                <p className='text-gray-600 leading-relaxed mb-4'>
                  When using our services, you agree to:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Provide accurate and complete information</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Maintain the security of your account credentials
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Use our services in compliance with applicable laws
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Not misuse or attempt to disrupt our services</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Respect intellectual property rights</span>
                  </li>
                </ul>
              </div>

              {/* Prohibited Activities */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-red-50 rounded-xl'>
                    <XCircle className='w-6 h-6 text-red-600' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Prohibited Activities
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed mb-4'>
                  You may not use our services to:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0' />
                    <span>Violate any laws or regulations</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0' />
                    <span>Infringe on intellectual property rights</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0' />
                    <span>Transmit malicious code or viruses</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0' />
                    <span>Engage in fraudulent activities</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0' />
                    <span>Reverse engineer or copy our software</span>
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Intellectual Property
                </h2>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  All content, features, and functionality of our services,
                  including but not limited to software, text, graphics, logos,
                  and images, are owned by Mivo Solutions Ltd and are protected
                  by international copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p className='text-gray-600 leading-relaxed'>
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, or exploit any of our content
                  without our prior written consent.
                </p>
              </div>

              {/* Disclaimer */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-amber-50 rounded-xl'>
                    <AlertCircle className='w-6 h-6 text-amber-600' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Disclaimer of Warranties
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  Our services are provided &quot;as is&quot; and &quot;as
                  available&quot; without any warranties of any kind, either
                  express or implied. We do not warrant that our services will
                  be uninterrupted, error-free, or secure. You use our services
                  at your own risk.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Limitation of Liability
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  To the maximum extent permitted by law, Mivo Solutions Ltd
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, data, or use, arising out of or related to
                  your use of our services.
                </p>
              </div>

              {/* Indemnification */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Indemnification
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  You agree to indemnify, defend, and hold harmless Mivo
                  Solutions Ltd and its officers, directors, employees, and
                  agents from any claims, liabilities, damages, losses, and
                  expenses arising out of your use of our services or violation
                  of these Terms.
                </p>
              </div>

              {/* Termination */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Termination
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  We reserve the right to suspend or terminate your access to
                  our services at any time, with or without cause, and with or
                  without notice. Upon termination, all rights granted to you
                  under these Terms will immediately cease.
                </p>
              </div>

              {/* Governing Law */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Governing Law
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  These Terms shall be governed by and construed in accordance
                  with the laws of Rwanda, without regard to its conflict of law
                  provisions. Any disputes arising from these Terms shall be
                  resolved in the courts of Rwanda.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Changes to Terms
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  We reserve the right to modify these Terms at any time. We
                  will notify you of any changes by posting the new Terms on
                  this page and updating the &quot;Last updated&quot; date. Your
                  continued use of our services after such modifications
                  constitutes your acceptance of the updated Terms.
                </p>
              </div>

              {/* Contact */}
              <div className='rounded-2xl p-8 border border-gray-200'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-white rounded-xl shadow-sm'>
                    <Mail className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Contact Us
                  </h2>
                </div>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className='space-y-2 text-gray-700'>
                  <p>
                    <strong>Email:</strong> contact@mivosolutions.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +250 790 603 658
                  </p>
                  <p>
                    <strong>Address:</strong> Kigali, Rwanda
                  </p>
                  <p>
                    <strong>Website:</strong> www.mivosolutions.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
