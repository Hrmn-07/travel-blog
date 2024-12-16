import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// TODO: Replace with actual data from Contentful
const popularCategories = [
  { id: 1, name: "Europe", count: 5 },
  { id: 2, name: "Packing Guides", count: 8 },
  { id: 3, name: "Cultural Experience", count: 3 },
  { id: 4, name: "Accommodations", count: 7 },
  { id: 5, name: "Food & Beverage", count: 12 },
];

export function PopularCategories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 pl-2">Popular Categories</h2>
      <div className="flex flex-wrap gap-3">
        {popularCategories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <Badge
              variant="secondary"
              className="text-sm hover:text-yellow-700 hover:scale-110 hover:shadow-lg transition-all bg-slate-100"
            >
              {category.name} ({category.count})
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
