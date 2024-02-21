import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isLight, setIsLight] = useState(false)

  const toggleTheme = () => {
    setIsLight((prev) => !prev)
    setTheme(isLight ? "light" : "dark")
  }

  return (
    <div className='flex flex-row justify-between w-full md:justify-end items-center space-x-2'>
      <span className='font-semibold'>Dark Mode</span>
      <Switch id='airplane-mode' onClick={toggleTheme} checked={isLight} />
    </div>
  )
}
