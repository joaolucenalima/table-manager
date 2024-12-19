import { useContext } from "react"
import { ChangeModeMenu } from "./components/change-mode-menu"
import { Sidebar } from "./components/sidebar/sidebar"
import { EditTable } from "./components/table/edit-table"
import { PreviewTable } from "./components/table/preview-table"
import { ModeContext } from "./contexts/mode-context"

function App() {
  const { mode } = useContext(ModeContext)

  return (
    <>
      <section className="table_section">
        <ChangeModeMenu />

        {mode === "preview" ? <PreviewTable /> : <EditTable />}
      </section>

      <Sidebar />
    </>
  )
}

export default App
