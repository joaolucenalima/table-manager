import { ChevronLeft, ChevronRight } from "lucide-react";
import { TableColumn } from "../../contexts/mode-context";

type EditTableColumnProps = {
  onFocus: (e: React.FocusEvent<HTMLDivElement>) => void,
  column: TableColumn
};

export function EditTableColumn({ onFocus, column }: EditTableColumnProps) {
  return (
    <div
      className="edit_table_column"
      tabIndex={1}
      onFocus={onFocus}
      id={column.id.toString()}
    >
      <div className="column_header">
        <span className="column_title"
          style={{

          }}>
          {column.title}
        </span>

        <div className="column_actions">
          <button className="move_column_button">
            <ChevronLeft size={16} />
          </button>

          <button className="move_column_button">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="column_content"></div>

      <span className="selected_column_mask"></span>
    </div>
  )
}