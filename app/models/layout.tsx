import { ReactNode } from "react";
import { getAllCategories } from "../utils/lib/categories";
import { Category } from "../utils/types";
import NavLink from "../components/NavLink";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories();
  console.log(categories);
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Responsive Navigation */}
      <aside className="sticky top-0 z-10 w-full bg-white border-b border-gray-200   md:-translate-y-1/2 md:border-none">
        <div className="relative">
          <nav className="w-full overflow-x-auto  scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:p-4">
              <NavLink href="/models">All</NavLink>
              {categories.map((category) => (
                <NavLink
                  href={`/models/categories/${category.slug}`}
                  key={category.slug}
                >
                  {category.displayName}
                </NavLink>
              ))}
            </ul>
          </nav>
          {/* Fading edge/gradient for horizontal scroll hint on mobile */}
          <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
        </div>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">
        {" "}
        {children}
      </main>
    </div>
  );
}
