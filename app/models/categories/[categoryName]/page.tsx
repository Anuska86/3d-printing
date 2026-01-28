import { CategoryPageProps } from "@/app/utils/types";
import { getCategoryBySlug } from "@/app/utils/lib/categories";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/utils/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const models = await getModels({ category: categoryName });
  return <ModelsGrid title={category.displayName} models={models} />;
}
