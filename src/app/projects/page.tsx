import ProjectsList from "@/components/Projects"
import { projects } from "../constants"

export default function Page() {
  return (
    <div>
      <h2 className="pt-24 text-pink-500 font-semibold">MY PROJECTS</h2>
      <p className="pr-8 pt-2 text-lg">Here you'll discover various projects I've crafted using diverse technologies. Each project comes with a detailed explanation, a link to the repository for code access, and a preview version for a firsthand experience.</p>
      <ProjectsList projects={projects} />
    </div>
  )
}
