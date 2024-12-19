import { useContext } from "react"
import { ModeContext } from "../../contexts/mode-context"
import "./table.css"

export function PreviewTable() {
  const { tableColumns, tableConfiguration } = useContext(ModeContext)

  return (
    <div className="table_container">
      <div
        className="table_header"
        style={{
          fontSize: `${tableConfiguration.titleFontSize || 18}px`,
          fontWeight: tableConfiguration.titleFontWeight
        }}
      >
        {tableConfiguration.title}
      </div>

      <div className="table_content">
        {tableColumns.map(column => (
          <div className="preview_table_column">
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