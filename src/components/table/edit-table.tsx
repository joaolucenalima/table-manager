import { Plus } from "lucide-react"
import { useContext } from "react"
import { ModeContext } from "../../contexts/mode-context"
import { EditTableColumn } from "./edit-table-column"
import "./table.css"

export function EditTable() {
  const { setActualSelection, tableColumns, addColumn, tableConfiguration } = useContext(ModeContext)

  function handleChangeFocus(e: React.FocusEvent<HTMLDivElement>) {
    const focusedElement = document.querySelector(".focused")

    if (focusedElement) {
      focusedElement.classList.remove("focused")
    }

    e.target.classList.add("focused")

    if (e.target.classList.contains("table_header")) {
      setActualSelection({
        type: "table",
        id: null
      })
    } else {
      setActualSelection({
        type: "column",
        id: Number(e.target.id)
      })
    }
  }

  return (
    <div className="table_container">
      <div className="table_header" tabIndex={1} onFocus={handleChangeFocus}
        style={{
          fontSize: `${tableConfiguration.titleFontSize || 18}px`,
          fontWeight: tableConfiguration.titleFontWeight
        }}
      >
        {tableConfiguration.title}
      </div>

      <div className="table_content">
        {tableColumns.map(column => (
          <EditTableColumn onFocus={handleChangeFocus} column={column} key={column.id} />
        ))}
      </div>

      <div className="add_new_column">
        <button className="main_button" onClick={addColumn}>
          <Plus size={18} />
          Add Column
        </button>
      </div>
    </div>
  )
}