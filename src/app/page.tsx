import Header from "@/features/header/Header";
import Footer from "@/features/layout/Footer";
import CategoryGrid from "@/features/categories/categoryGrid";
import FeaturedCalculators from "@/features/calculators/FeaturedCalculators";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#1E293B] transition-colors duration-300">
          <Header />
          <main className="flex-1 container mx-auto px-4 md:px-6 py-6 md:py-8 space-y-8 md:space-y-12">
              <FeaturedCalculators />
              <CategoryGrid />
          </main>
          <Footer />
      </div>
  );
}
