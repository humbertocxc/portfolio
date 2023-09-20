"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeButton from "./ThemeButton"

const routes = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
]

export default function Header() {
  const path = usePathname()

  return(
    <header className="w-screen justify-between">
      <ThemeButton />
      <div className="h-24 flex items-start justify-between px-20 w-screen">
        <div className="flex flex-column items-center gap-2">
          <Image src="/pfp.jpeg" width={200} height={200} alt="" className="h-12 mx-auto object-cover rounded-full w-12" />
          <h2 className="font-semibold text-sm">Humberto Gessinger</h2>
        </div>

        <div className="flex flex-column items-center gap-8">
          {routes.map((item) => 
            <Link
              href={item.path}
              className={`easy-in-out py-2 ${item.path === path ? 'border-b-4 border-rose-500' : 'hover:border-b-4 hover:border-gray-700'}`}
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
