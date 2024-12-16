import { HeroSection } from "@/components/hero-section";
import { FeaturedPosts } from "@/components/featured-posts";
import { PopularCategories } from "@/components/popular-categories";
import { CategoriesSidebar } from "@/components/categories-sidebar";

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <FeaturedPosts />
          <PopularCategories />
        </div>
        <aside className="lg:w-1/4">
          <CategoriesSidebar />
        </aside>
      </div>
    </div>
  );
}
