import { ThemeContext, useTheme } from "./context/ThemeContext"

function App() {
  const { dark, setDark } = useTheme(ThemeContext)

  function handleTheme() {
    setDark(!dark)
  }

  return (
    <div className={`${dark ? "bg-gray-800" : "bg-gray-100"} min-h-screen flex flex-col justify-center items-center`}>
      <div>
        <h1 className={dark ? "text-white" : "text-black"}>Test</h1>
      </div>
      <button
        className={`px-3 py-1 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } my-2 rounded-md border border-gray-600`}
        onClick={handleTheme}
      >
        ganti tema
      </button>
    </div>
  )
}

export default App
