"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Pill from "./Pill";
import { ModelCardProps } from "../utils/types";

export default function ModelCard({ model }: ModelCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);

    //call the database/API when exists
  };

  return (
    <Link
      href={`/3d-models/${model.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
      aria-labelledby={`model-${model.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <Image
            src="/3dAlivePrint.jpg"
            alt={model.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2 min-h-14">
            <h2
              id={`model-${model.id}-title`}
              className="text-xl font-semibold text-gray-800 line-clamp-2"
            >
              {model.name}
            </h2>
          </div>
          <p className="text-gray-800 text-sm line-clamp-2 min-h-20 leading-5">
            {model.description}
          </p>
          <div className="mt-2">
            <Pill>{model.category}</Pill>
          </div>
          <div
            className="flex items-center mt-2 text-gray-600"
            aria-label={`${model.likes} likes`}
          >
            <button
              onClick={toggleLike}
              className="flex items-center mt-2 transition-colors group/heart"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? (
                <FaHeart className="w-5 h-5 mr-1 text-red-500 animate-jump" />
              ) : (
                <FaRegHeart className="w-5 h-5 mr-1 text-gray-400 group-hover/heart:text-red-400" />
              )}

              <span
                className={
                  isLiked ? "text-red-600 font-medium" : "text-gray-600"
                }
              >
                {isLiked ? model.likes + 1 : model.likes}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
