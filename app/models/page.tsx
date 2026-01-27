import { getAllModels } from "../utils/lib/models";
import type { Model } from "../utils/types";

export default async function ModelsPage() {
  const models = await getAllModels();
  return models.map((model: Model) => <p key={model.id}>{model.name}</p>);
}
