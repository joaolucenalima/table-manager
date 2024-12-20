import { useContext } from "react"
import { ChangeModeMenu } from "./components/change-mode-menu"
import { Sidebar } from "./components/sidebar/sidebar"
import { EditTable } from "./components/table/edit-table"
import { PreviewTable } from "./components/table/preview-table"
import { TableContext } from "./contexts/table-context"

function App() {
  const { mode } = useContext(TableContext)

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
