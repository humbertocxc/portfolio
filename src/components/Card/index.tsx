import { IProject } from "@/app/types";
import Image from "next/image";

interface ICard {
  project: IProject;
}

export default function Card({ project }: ICard) {
  return (
    <div className="h-96 flex items-center justify-center">
      <button
        className="relative transition-all ease-in-out rounded-lg overflow-hidden w-full h-80 mx-2
        bg-black shadow-lg opacity-80 hover:opacity-60 hover:h-81 hover:mx-0 last:pr-0"
      >
        <Image width={1000} height={1000} src={project.image} alt="" className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="p-4 bg-opacity-90 relative">
          <span>{project.name}</span>
          <div className="hidden hover:flex">
            <span>
              {project.description}
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}
