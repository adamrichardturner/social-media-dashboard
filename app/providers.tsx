"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute='class' enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
