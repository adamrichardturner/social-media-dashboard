"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

const DarkModeToggle = () => {
  const { setTheme } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false)
  const onSetTheme = () => {
    setIsEnabled((prev) => !prev)
    setTheme(isEnabled ? "dark" : "light")
  }
  return (
    <div>
      <label
        htmlFor='toggle'
        className='flex items-center cursor-pointer space-x-4'
      >
        {/* Label */}
        <div className='ml-3 text-text-color-strong font-medium '>
          Dark Mode
        </div>

        <div className='relative'>
          {/* input */}
          <input
            id='toggle'
            name='toggle'
            type='checkbox'
            className='sr-only'
            checked={isEnabled}
            onChange={() => onSetTheme()}
          />
          {/* line */}
          <div
            className={`bg-gradient-to-r from-toggle-color-start to-toggle-color-end rounded-full shadow-inner`}
            style={{ width: "48px", height: "24px" }}
          ></div>
          {/* dot */}
          <div
            className={`dot absolute bg-white rounded-full shadow transition-transform ${
              isEnabled ? "transform translate-x-6" : ""
            }`}
            style={{ width: "18px", height: "18px", left: "3px", top: "3px" }}
          ></div>
        </div>
      </label>
    </div>
  )
}

export default DarkModeToggle
