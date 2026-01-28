import { ReactNode } from "react";
import Link from "next/link";
import { getAllCategories } from "../utils/lib/categories";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories = getAllCategories();
  console.log(categories);
  return (
    <div>
      <nav>
        <Link href="/models">All</Link>
        {categories.map((category) => (
          <Link
            href={`/models/categories/${category.slug}`}
            key={category.slug}
          >
            {category.displayName}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
