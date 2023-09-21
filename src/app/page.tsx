import { projects } from "./constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsList from "@/components/Projects";

export default function Home() {
  const latestProjects = projects.slice(0, 8)

  return (
    <div className="relative group pt-24 inset-y-full">
      <div className="transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <title>Humberto Gessinger | Portfolio</title>
        <h4 className="text-pink-600 font-bold">HELLO, MY NAME IS HUMBERTO AND I'M A</h4>
        <h1 className="font-semibold text-7xl my-5">Full Stack Developer.</h1>
        <h3 className="text-2xl mt-10">
          I'm a programmer since 2018, and in early 2021, I began my carreer as a web developer. My passion for this field has continuously expanded and it is now my primary focus.
        </h3>
      </div>

      <h2 className="text-4xl mt-36">Featured Projects</h2>
      <ProjectsList projects={latestProjects} />

      <Link
        href="/projects"
        className="float-right flex flex-column items-center mb-16 pr-4 font-bold text-pink-500 hover:gap-4 hover:pr-2 hover:text-pink-800 transition-all ease-in-out"
      >
        <span>See All Projects</span>
        <ArrowRight />
      </Link>
    </div>
  )
}
