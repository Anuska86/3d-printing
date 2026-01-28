import type { ModelDetailPageProps } from "@/app/utils/types";
import { getModelById } from "@/app/utils/lib/models";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;

  const model = await getModelById(id);

  return (
    <main className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            src="/3dAlivePrint.jpg"
            alt={model.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{model.name}</h1>

          <div className="flex items-center gap-2 text-gray-600">
            <FaRegHeart className="text-red-500" />
            <span className="font-medium">{model.likes} Likes</span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {model.description}
          </p>

          <div className="pt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold uppercase">
              {model.category}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
