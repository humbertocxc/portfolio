import Card from "../Card"
import { IProject } from "@/app/types"

interface IProjectsList {
  projects: IProject[];
}

export default function ProjectsList({ projects }: IProjectsList) {
  return (
    <div className="flex justify-center pt-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-12 pb-8 w-full container">
        {projects.map((item) => 
          <Card project={item} key={item.slug} />
        )}
      </div>
    </div>
  )
}
