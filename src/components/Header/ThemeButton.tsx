"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="py-4 pr-4">
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <FontAwesomeIcon icon={faSun} className="transition ease-in-out delay-150 text-yellow-100 hover:text-yellow-200" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <FontAwesomeIcon icon={faMoon} className="transition ease-in-out delay-150 text-zinc-600 hover:text-zinc-700" />
        </button>
      )}
    </div>
  )
}
