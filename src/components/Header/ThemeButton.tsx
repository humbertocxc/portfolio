"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col py-4 float-right h-12">
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <Moon className="transition ease-in-out delay-150 text-zinc-600 hover:text-zinc-700" />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <Sun className="transition ease-in-out delay-150 text-yellow-50 hover:text-yellow-100" />
        </button>
      )}
    </div>
  )
}
