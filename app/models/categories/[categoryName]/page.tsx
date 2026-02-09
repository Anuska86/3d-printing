import { CategoryPageProps } from "@/utils/types";
import { getCategoryBySlug } from "@/utils/lib/categories";
import ModelsGrid from "@/components/ModelsGrid";
import { getModels } from "@/utils/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const models = await getModels({ category: categoryName });
  return <ModelsGrid title={category.displayName} models={models} />;
}
