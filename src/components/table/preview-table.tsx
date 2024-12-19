import { useContext } from "react"
import { ModeContext } from "../../contexts/mode-context"
import "./table.css"

export function PreviewTable() {
  const { tableColumns, tableConfiguration } = useContext(ModeContext)

  return (
    <div className="table_container">
      <div className="table_header" style={{ fontWeight: tableConfiguration.fontWeight }}>
        {tableConfiguration.title}
      </div>

      <div className="table_content">
        {tableColumns.map(column => (
          <div className="preview_table_column" style={{ textAlign: column.textAlign }}>
            <div className="column_header">
              <span className="column_title">
                {column.title}
              </span>
            </div>

            <div className="column_content"></div>
          </div>
        ))}
      </div>
    </div>
  )
}