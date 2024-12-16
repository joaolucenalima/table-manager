import { ChangeModeMenu } from "./components/change-mode-menu"
import { Sidebar } from "./components/sidebar/sidebar"
import { EditTable } from "./components/table/edit-table"

function App() {
  return (
    <>
      <section className="table_section">
        <ChangeModeMenu />

        <EditTable />
      </section>

      <Sidebar />
    </>
  )
}

export default App
