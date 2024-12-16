import { Plus } from "lucide-react"
import { useContext } from "react"
import { ModeContext } from "../../contexts/mode-context"
import { EditTableColumn } from "./edit-table-column"
import "./edit-table.css"

export function EditTable() {
  const { setActualSelection } = useContext(ModeContext)

  function handleChangeFocus(e: React.FocusEvent<HTMLDivElement>) {
    const focusedElement = document.querySelector(".focused")

    if (focusedElement) {
      focusedElement.classList.remove("focused")
    }

    e.target.classList.add("focused")

    if (e.target.classList.contains("table_header")) {
      setActualSelection({
        type: "table",
        id: ""
      })
    } else {
      setActualSelection({
        type: "column",
        id: e.target.id
      })
    }
  }

  return (
    <div className="table_container">
      <div className="table_header" tabIndex={1} onFocus={handleChangeFocus}>
        <span>Dynamic Table #1</span>
      </div>

      <div className="table_content">
        <EditTableColumn onFocus={handleChangeFocus} id="1" />
        <EditTableColumn onFocus={handleChangeFocus} id="2" />
        <EditTableColumn onFocus={handleChangeFocus} id="3" />
        <EditTableColumn onFocus={handleChangeFocus} id="4" />

        <div className="add_new_column">
          <button className="main_button">
            <Plus size={18} />
            Add Column
          </button>
        </div>
      </div>

      <div className="table_footer">
      </div>
    </div>
  )
}