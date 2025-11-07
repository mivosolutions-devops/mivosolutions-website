"use client";

import { useState } from "react";
import {
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle2,
  Loader2,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id='contact'
      className='py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -z-10' />
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10' />

      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700'>
          <p className='text-[#059669] font-semibold text-sm uppercase tracking-wider mb-4'>
            CONTACT US
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Get In Touch
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Have a project in mind? We&apos;d love to hear from you. Reach out
            and let&apos;s build something amazing together.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8 animate-in fade-in slide-in-from-left duration-700'>
            <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Phone className='w-6 h-6 text-[#059669]' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                      Phone
                    </h4>
                    <a
                      href='tel:+250790603658'
                      className='text-[#059669] hover:text-[#1f7d4d] transition-colors'
                    >
                      +250 790 603 658
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Mail className='w-6 h-6 text-[#059669]' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                      Email
                    </h4>
                    <a
                      href='mailto:contact@mivosolutions.com'
                      className='text-[#059669] hover:text-[#1f7d4d] transition-colors break-all'
                    >
                      contact@mivosolutions.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-[#059669]/10 rounded-xl'>
                    <Globe className='w-6 h-6 text-[#059669]' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                      Website
                    </h4>
                    <a
                      href='https://www.mivosolutions.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#059669] hover:text-[#1f7d4d] transition-colors'
                    >
                      www.mivosolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Follow Us
              </h3>

              <div className='grid grid-cols-3 gap-4'>
                <a
                  href='https://instagram.com/mivosolutions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group'
                >
                  <Instagram className='w-8 h-8 text-pink-600 mb-2 group-hover:scale-110 transition-transform' />
                  <span className='text-sm text-gray-600'>Instagram</span>
                </a>
                <a
                  href='https://x.com/mivosolutions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group'
                >
                  <Twitter className='w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform' />
                  <span className='text-sm text-gray-600'>X (Twitter)</span>
                </a>
                <a
                  href='https://linkedin.com/company/mivosolutions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group'
                >
                  <Linkedin className='w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform' />
                  <span className='text-sm text-gray-600'>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='animate-in fade-in slide-in-from-right duration-700'>
            <form
              onSubmit={handleSubmit}
              className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'
            >
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send us a message
              </h3>

              <div className='space-y-6'>
                <div>
                  <Label htmlFor='name'>Full Name *</Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Names'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='email'>Email Address *</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@email.com'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='message'>Your Message *</Label>
                  <Textarea
                    id='message'
                    name='message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Leave us a message...'
                    className='mt-2'
                    rows={8}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className='flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg'>
                    <CheckCircle2 className='w-5 h-5' />
                    <p className='text-sm font-medium'>
                      Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className='flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg'>
                    <p className='text-sm font-medium'>
                      Oops! Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full group'
                  size='lg'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 w-5 h-5 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
