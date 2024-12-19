import { useContext } from "react";
import { ModeContext } from "../../contexts/mode-context";

export function TableEditSidebar() {
  const { tableConfiguration, setTableConfiguration } = useContext(ModeContext)

  return (
    <aside>
      <div id="sidebar_title">
        <h2>Table Edit</h2>
      </div>

      <span className="divider" />

      <div className="sidebar_content">
        <div>
          <label htmlFor="table_title">Title</label>
          <input
            type="text"
            id="table_title"
            onChange={(e) => setTableConfiguration({ ...tableConfiguration, title: e.target.value })}
            defaultValue={tableConfiguration.title}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="table_title_font_weight">Font Weight</label>
          <select
            id="table_title_font_weight"
            defaultValue={tableConfiguration.fontWeight}
            onChange={(e) => setTableConfiguration({ ...tableConfiguration, fontWeight: e.target.value })}
          >
            <option value="500">Medium</option>
            <option value="700">Bold</option>
            <option value="800">Extra Bold</option>
          </select>
        </div>
      </div>
    </aside>
  )
}