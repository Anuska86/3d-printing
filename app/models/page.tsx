import ModelsGrid from "../components/ModelsGrid";
import type { ModelsPageProps } from "../utils/types";
import { getModels } from "../utils/lib/models";

export default async function Page({searchParams}) {
  const models = await getModels();
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
      <ModelsGrid title="3D Models" models={models} />;
    </div>
  );
}
