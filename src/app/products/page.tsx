import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products - Mivo Solutions Ltd",
  description: "Explore our innovative products: NaviGO for fleet tracking and SafeNet for secure networking solutions.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Products />
      </div>
      <Footer />
    </main>
  );
}

