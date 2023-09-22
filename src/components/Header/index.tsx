"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeButton from "./ThemeButton"
import { Github, Linkedin } from "lucide-react"
import { githubLink, linkedinLink, routes } from "@/app/constants"

export default function Header() {
  const path = usePathname().split('/')[1]

  return(
    <header className="pr-4">
      <ThemeButton />
      <div className="h-24 flex flex-col sm:flex-row items-start justify-between px-8 sm:px-20 w-screen">
        <div className="flex flex-column items-center m-auto mb-3 sm:m-0 gap-2 font-semibold">
          <Link href="/" className="flex flex-column items-center gap-2 hover:font-bold">
            <Image src="/pfp.jpeg" width={200} height={200} alt="" className="h-12 mx-auto object-cover rounded-full w-12" />
            <h2 className="text-sm hidden md:inline">Humberto Gessinger</h2>
          </Link>
          <Link href={githubLink} target="_blank">
            <Github size={20} />
          </Link>
          <Link href={linkedinLink} target="_blank">
            <Linkedin size={20} />
          </Link>
        </div>

        <div className="flex flex-column items-center m-auto sm:m-0 gap-8">
          {routes.map((item) => 
            <Link
              href={item.path}
              className={`easy-in-out py-2 ${item.path === `/${path}` ? 'border-b-4 border-rose-500' : 'hover:border-b-4 hover:border-gray-700'}`}
              key={item.path}
            >
              {item.name}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
