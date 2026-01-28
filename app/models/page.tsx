import ModelsGrid from "../components/ModelsGrid";
import { getModels } from "../utils/lib/models";

export default async function Page() {
  const models = await getModels();
  return <ModelsGrid title="3D Models" models={models} />;
}
