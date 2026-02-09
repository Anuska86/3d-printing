import Form from "next/form";
import ModelsGrid from "@/components/ModelsGrid";
import type { ModelsPageProps } from "@/utils/types";
import { getModels } from "@/utils/lib/models";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { query } = await searchParams;
  const models = await getModels();

  const lowQuery = query?.toLowerCase();

  const filteredModels = lowQuery
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(lowQuery) ||
          model.description.toLowerCase().includes(lowQuery),
      )
    : models;

  return (
    <div className="flex flex-col items-center mb-10">
      <Form action="/models" className="w-full px-5 md:px-0 md:max-w-xl">
        <div className="relative group">
          <input
            type="search"
            name="query"
            placeholder="Search for 3d models..."
            defaultValue={query}
            className="w-full py-4 pl-7 pr-14 text-sm bg-white border border-gray-200 rounded-full shadow-md 
                   transition-all duration-200
                   focus:border-brand focus:ring-4 focus:ring-brand/10 focus:outline-none 
                   md:text-base
                   [&::-webkit-search-cancel-button]:appearance-none"
          />
          {/* Search Icon  */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-lg group-focus-within:text-brand">
            🔍
          </div>
        </div>
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </div>
  );
}
