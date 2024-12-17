import { Plus } from "lucide-react"
import { useContext } from "react"
import { ModeContext } from "../../contexts/mode-context"
import { EditTableColumn } from "./edit-table-column"
import "./edit-table.css"

export function EditTable() {
  const { setActualSelection, tableColumns, addColumn } = useContext(ModeContext)

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
        {tableColumns.map(column => (
          <EditTableColumn onFocus={handleChangeFocus} id={column.id} key={column.id} />
        ))}
      </div>

      <div className="add_new_column">
        <button className="main_button" onClick={addColumn}>
          <Plus size={18} />
          Add Column
        </button>
      </div>

      <div className="table_footer">
      </div>
    </div>
  )
}