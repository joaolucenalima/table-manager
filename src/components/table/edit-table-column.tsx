import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { ModeContext, TableColumn } from "../../contexts/mode-context";

type EditTableColumnProps = {
  onFocus: (e: React.FocusEvent<HTMLDivElement>) => void,
  column: TableColumn,
  index: number,
};

export function EditTableColumn({ onFocus, column, index }: EditTableColumnProps) {
  const { tableColumns, changeColumnPosition } = useContext(ModeContext);

  return (
    <div
      className="edit_table_column"
      tabIndex={1}
      onFocus={onFocus}
      id={column.id.toString()}
      style={{ textAlign: column.textAlign }}
    >
      <div className="column_header">
        <span className="column_title" title={column.title}>
          {column.title}
        </span>

        <div className="column_actions">
          <button
            className="action_button"
            onClick={() => changeColumnPosition(index, "left")}
            onFocus={e => e.stopPropagation()}
            disabled={index === 0}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            className="action_button"
            onClick={() => changeColumnPosition(index, "right")}
            onFocus={e => e.stopPropagation()}
            disabled={index == tableColumns.length - 1}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="column_content" />
      <span className="selected_column_mask" />
    </div>
  )
}