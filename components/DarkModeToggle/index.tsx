import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='flex flex-row justify-between w-full md:justify-end items-center space-x-2'>
      <span className='font-semibold'>Dark Mode</span>
      <Switch id='airplane-mode' onClick={toggleTheme} />
    </div>
  )
}
