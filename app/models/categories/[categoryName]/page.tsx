import { CategoryPageProps } from "@/app/utils/types";
import { getCategoryBySlug } from "@/app/utils/lib/categories";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  console.log(category);
  return <h1>{category.displayName}</h1>;
}
