"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <div className='flex flex-row justify-between w-full md:justify-end items-center space-x-2'>
      <span className='font-semibold'>Dark Mode</span>
      <Switch
        id='dark-mode-toggle'
        onClick={toggleTheme}
        checked={theme === "light"}
        data-state={theme === "light" ? "checked" : "unchecked"}
      />
    </div>
  )
}
