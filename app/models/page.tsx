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
    <div>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <label htmlFor="3d-model-search" className="sr-only"></label>
        <input
          type="search"
          id="3d-model-search"
          name="query"
          placeholder="Search for 3d models..."
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        ></input>
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />;
    </div>
  );
}
