import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Mivo Solutions Ltd",
  description: "Learn about Mivo Solutions Ltd. Mission, Innovation, Vision, and Opportunity—guiding everything we do.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}

