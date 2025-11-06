import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Mivo Solutions Ltd",
  description: "Get in touch with Mivo Solutions Ltd. We'd love to hear from you and discuss your project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

