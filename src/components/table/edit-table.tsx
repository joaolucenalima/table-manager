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
        id: 0
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
      <div
        className="table_header"
        tabIndex={1}
        onFocus={handleChangeFocus}
        style={{ fontWeight: tableConfiguration.fontWeight }}
      >
        {tableConfiguration.title}
      </div>

      <div className="table_content">
        {tableColumns.map((column, index) => (
          <EditTableColumn
            onFocus={handleChangeFocus}
            column={column}
            index={index}
            key={column.id}
          />
        ))}
      </div>

      <div className="add_new_column">
        <button className="main_button" onClick={addColumn}>
          <Plus size={18} />
          Add
        </button>
      </div>
    </div>
  )
}