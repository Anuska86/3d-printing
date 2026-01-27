import ModelsGrid from "../components/ModelsGrid";
import { getAllModels } from "../utils/lib/models";

export default async function Page() {
  const models = await getAllModels();
  return <ModelsGrid title="3D Models" models={models} />;
}
