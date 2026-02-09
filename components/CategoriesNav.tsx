"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/utils/lib/categories";
import { Category } from "@/utils/types";

export default function CategoriesNav() {
  const pathname = usePathname();
  const categories: Category[] = getAllCategories();
  

  return (
    <aside className="sticky top-18 z-40 w-full py-4 pointer-events-none">
      <div className="max-w-fit mx-auto pointer-events-auto">
        <nav className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-2">
          <ul className="flex p-1 space-x-1 whitespace-nowrap">
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
