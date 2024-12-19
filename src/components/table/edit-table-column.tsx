import { ChevronLeft, ChevronRight } from "lucide-react";
import { TableColumn } from "../../contexts/mode-context";

type EditTableColumnProps = {
  onFocus: (e: React.FocusEvent<HTMLDivElement>) => void,
  column: TableColumn
};

export function EditTableColumn({ onFocus, column }: EditTableColumnProps) {
  function handleChangeColumnPosition(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('change column position');
  }

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
            className="move_column_button"
            onClick={handleChangeColumnPosition}
            onFocus={e => e.stopPropagation()}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            className="move_column_button"
            onClick={handleChangeColumnPosition}
            onFocus={e => e.stopPropagation()}
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