"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { getAllCategories } from "../utils/lib/categories";
import { Category } from "../utils/types";

export default function CategoriesNav() {
  const pathname = usePathname();
  const categories: Category[] = getAllCategories();
  console.log(categories);

  return (
    <aside className="sticky top-18.5 z-40 w-full bg-white border-b border-gray-200">
      <div className="relative">
        <nav className="w-full overflow-x-auto  scrollbar-hide">
          <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:justify-center">
            <NavLink href="/models" isActive={pathname === "/models"}>
              All
            </NavLink>
            {categories.map((item) => (
              <NavLink
                href={`/models/categories/${item.slug}`}
                isActive={pathname === `/models/categories/${item.slug}`}
                key={item.slug}
              >
                {item.displayName}
              </NavLink>
            ))}
          </ul>
        </nav>
        {/* Fading edge/gradient for horizontal scroll hint on mobile */}
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none  bg-linear-to-1 from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
