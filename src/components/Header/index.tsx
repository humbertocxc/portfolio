"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/notes', name: 'notes' },
  { path: '/about', name: 'about' },
]

export default function Header() {
  const path = usePathname()

  return(
    <header className="flex items-center py-14 px-20 w-screen justify-between">

      <div className="flex flex-column items-center gap-2">
        <Image src="/pfp.jpeg" width={20} height={20} alt="" className="h-12 mx-auto object-cover rounded-full w-12" />
        <h2 className="font-semibold text-sm">Humberto Gessinger</h2>
      </div>

      <div className="flex flex-column items-center gap-8">
        {routes.map((item, id) => 
        <Link
          href={item.path}
          className={`py-2 ${item.path === path ? 'border-b-4 border-rose-500' : 'hover:border-b-4 hover:border-gray-700'}`}
          key={id}
        >
          <b>0{id + 1}</b> {item.name}
        </Link>
        )}
      </div>

    </header>
  )
}
