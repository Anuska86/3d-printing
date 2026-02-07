import ModelsGrid from "../components/ModelsGrid";
import type { ModelsPageProps } from "../utils/types";
import { getModels } from "../utils/lib/models";

export default async function Page({ searchParams }: ModelsPageProps) {
  const { query } = await searchParams;
  const models = await getModels();

  const lowQuery = query?.toLowerCase();

  const filteredModels = lowQuery
    ? models.filter(
        (obj) =>
          obj.name.toLowerCase().includes(lowQuery) ||
          obj.description.toLowerCase().includes(lowQuery),
      )
    : models;

  return (
    <div>
      <form className="search-form">
        <label htmlFor="3d-model" className="sr-only"></label>
        <input
          type="search"
          id="3d-model-search"
          name="query"
          placeholder="Search for 3d models..."
          className="search-input"
          autoComplete="off"
        ></input>
      </form>
      <ModelsGrid title="3D Models" models={filteredModels} />;
    </div>
  );
}
