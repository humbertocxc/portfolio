import { projects } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = projects.map((project) => ({
    slug: project.slug,
  }))

  return slugs
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  if(!project) {
    return notFound()
  }

  return (
    <div>
      <h2 className="text-3xl pt-20">{project?.name.toUpperCase()}</h2>
      <p className="text-lg py-6">
        You can access the <Link href={project?.link || ''} target="_blank" className="text-pink-500" >preview</Link>{" "}
        and the code <Link href={project?.repo || ''} target="_blank" className="text-pink-500" >repository</Link>.
      </p>
      <p>{project?.description}</p>
      <p className="pt-16 pb-6">Here are some images of the "{project.name}" project.</p>
      <div className="pb-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-12 w-full container items-center">
        {project?.images.map((img) => (
          <div className="h-81 flex items-center justify-center">
            <Image
              src={img || ""}
              width={100}
              height={100}
              alt=""
              className="w-11/12 h-11/12 mx-auto bg-auto  rounded-lg shadow-lg opacity-90 hover:opacity-100 last:pr-0 hover:w-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
