import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Mivo Solutions Ltd",
  description:
    "Learn how Mivo Solutions Ltd collects, uses, and protects your personal information."
};

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen'>
      <Header />
      <div className='pt-20'>
        {/* Hero Section */}
        <section className='py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-50 via-white to-gray-50'>
          <div className='container mx-auto max-w-4xl text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-[#059669]/10 text-[#059669] rounded-full text-sm font-semibold mb-6'>
              <Shield className='w-4 h-4' />
              <span>Your Privacy Matters</span>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Privacy Policy
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
                  At Mivo Solutions Ltd, we are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <FileText className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Information We Collect
                  </h2>
                </div>

                <h3 className='text-xl font-semibold text-gray-900 mt-6 mb-3'>
                  Personal Information
                </h3>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Contact us through our website or email</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Subscribe to our newsletter or updates</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Use our products or services</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Participate in surveys or promotions</span>
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-gray-900 mt-6 mb-3'>
                  Automatically Collected Information
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  When you visit our website, we may automatically collect
                  certain information about your device, including information
                  about your web browser, IP address, time zone, and some of the
                  cookies installed on your device.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Eye className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    How We Use Your Information
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed mb-4'>
                  We use the information we collect to:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Provide, operate, and maintain our services</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Improve, personalize, and expand our services</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Communicate with you about products, services, and updates
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Process your transactions and send related information
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Respond to your inquiries and provide customer support
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Analyze usage patterns and optimize our website</span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Lock className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Data Security
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>

              {/* Data Sharing */}
              <div className='mb-12'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Users className='w-6 h-6 text-[#059669]' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 m-0'>
                    Information Sharing
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed mb-4'>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>With your consent or at your direction</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      With service providers who assist in our operations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      To comply with legal obligations or protect our rights
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      In connection with a business transfer or merger
                    </span>
                  </li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Your Rights
                </h2>
                <p className='text-gray-600 leading-relaxed mb-4'>
                  You have the right to:
                </p>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Access and receive a copy of your personal information
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Request deletion of your personal information</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>
                      Object to or restrict processing of your information
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 shrink-0' />
                    <span>Withdraw consent at any time</span>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Cookies
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  We use cookies and similar tracking technologies to track
                  activity on our website and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent. However, if you do not accept
                  cookies, you may not be able to use some portions of our
                  website.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Children&apos;s Privacy
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you become aware that a child has provided us
                  with personal information, please contact us.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                  Changes to This Privacy Policy
                </h2>
                <p className='text-gray-600 leading-relaxed'>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date.
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
                  If you have any questions about this Privacy Policy, please
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
