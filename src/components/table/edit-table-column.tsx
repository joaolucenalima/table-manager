type EditTableColumnProps = {
  onFocus: (e: React.FocusEvent<HTMLDivElement>) => void,
  id: string
};

export function EditTableColumn({ onFocus, id }: EditTableColumnProps) {
  return (
    <div className="edit_table_column" tabIndex={1} onFocus={onFocus} id={id}>
      <div className="column_header">
        <span className="column_title">Column 1</span>
      </div>

      <div className="column_content">

      </div>

      <span className="selected_column_mask"></span>
    </div>
  )
}