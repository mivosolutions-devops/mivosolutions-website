"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#28A265]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#28A265] to-[#1f7d4d] leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <Link href="/">
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="text-[#28A265] hover:text-[#1f7d4d] transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="/products" className="text-[#28A265] hover:text-[#1f7d4d] transition-colors text-sm font-medium">
              Our Products
            </Link>
            <Link href="/contact" className="text-[#28A265] hover:text-[#1f7d4d] transition-colors text-sm font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

