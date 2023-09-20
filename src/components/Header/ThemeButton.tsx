"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col py-4 pr-4 float-left w-screen items-end h-12">
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <FontAwesomeIcon icon={faMoon} className="transition ease-in-out delay-150 text-zinc-600 hover:text-zinc-700" />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <FontAwesomeIcon icon={faSun} className="transition ease-in-out delay-150 text-yellow-100 hover:text-yellow-50" />
        </button>
      )}
    </div>
  )
}
