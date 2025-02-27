import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

//Provier
export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true)

  return <ThemeContext.Provider value={{ dark, setDark }}>{children}</ThemeContext.Provider>
}

// Hooks
export function useTheme() {
  return useContext(ThemeContext)
}
