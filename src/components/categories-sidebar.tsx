import Link from "next/link";

const categories = [
  { id: 1, name: "Asia" },
  { id: 2, name: "Europe" },
  { id: 3, name: "Packing Guides" },
  { id: 4, name: "Wildlife" },
  { id: 5, name: "Backpacking" },
  { id: 6, name: "Travel Gear" },
  { id: 7, name: "Photography Tips" },
  { id: 8, name: "Festivals" },
];

export function CategoriesSidebar() {
  return (
    <div className="bg-gray-100 p-5 pt-7 rounded-lg bg-opacity-80 w-full">
      <h2 className="text-xl font-bold mb-4 ">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categories/${category.id}`}
              className="text-gray-600 hover:text-yellow-700"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
