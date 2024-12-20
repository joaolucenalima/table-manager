import { AlignCenter, AlignLeft, AlignRight, ChevronUp, Trash2 } from "lucide-react";
import { useContext } from "react";
import { TableColumn, TableContext } from "../../contexts/table-context";

export function ColumnEditSidebar() {
  const { tableColumns, setTableColumns, removeColumn, actualSelection } = useContext(TableContext)

  const columnDataIndex = tableColumns.findIndex(column => column.id == actualSelection.id)

  function changeColumnConfiguration<K extends keyof TableColumn>(
    key: K,
    value: TableColumn[K]
  ) {
    const updatedColumns = [...tableColumns];
    updatedColumns[columnDataIndex][key] = value;

    setTableColumns(updatedColumns);
  }

  return (
    <aside id="sidebar">
      <div id="sidebar_title">
        <button
          id="expand_button"
          className="action_button"
          title="Show edit options"
          onClick={() => document.getElementById("sidebar")?.classList.toggle("expanded")}
        >
          <ChevronUp size={16} />
        </button>

        <h2 title={tableColumns[columnDataIndex].title}>
          {tableColumns[columnDataIndex].title}
        </h2>

        {tableColumns.length > 1 && (
          <button
            type="button"
            className="delete_button"
            title="Remove Column"
            onClick={() => removeColumn(actualSelection.id)}
          >
            <Trash2 size={16} color="#f70a0a" />
          </button>
        )}
      </div>

      <span className="divider" />

      <div className="sidebar_content">
        <div>
          <label htmlFor="column_title">Column header</label>
          <input
            type="text"
            id="column_title"
            value={tableColumns[columnDataIndex].title}
            onChange={(e) => changeColumnConfiguration("title", e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="one_line_field">
          <label htmlFor="column_text_align">Text Alignment</label>
          <fieldset
            id="column_text_align"
            className="alignment_fieldset"
          >
            <label>
              <input
                type="radio"
                name="column_alignment"
                value="left"
                checked={tableColumns[columnDataIndex].textAlign === "left"}
                onChange={(e) => changeColumnConfiguration("textAlign", e.target.value as TableColumn["textAlign"])}
              />
              <AlignLeft />
            </label>

            <label>
              <input
                type="radio"
                name="column_alignment"
                value="center"
                checked={tableColumns[columnDataIndex].textAlign === "center"}
                onChange={(e) => changeColumnConfiguration("textAlign", e.target.value as TableColumn["textAlign"])}
              />
              <AlignCenter />
            </label>

            <label>
              <input
                type="radio"
                name="column_alignment"
                value="right"
                checked={tableColumns[columnDataIndex].textAlign === "right"}
                onChange={(e) => changeColumnConfiguration("textAlign", e.target.value as TableColumn["textAlign"])}
              />
              <AlignRight />
            </label>
          </fieldset>
        </div>
      </div>
    </aside>
  )
}