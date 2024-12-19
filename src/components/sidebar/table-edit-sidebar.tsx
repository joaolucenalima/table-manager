import { Palette, Pencil } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../../contexts/mode-context";
import { CollapsibleMenu } from "../collapsible-menu";
import { ColorPicker } from "../color-picker";

export function TableEditSidebar() {
  const { tableConfiguration, setTableConfiguration } = useContext(ModeContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setTableConfiguration((prev) => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <aside>
      <div id="sidebar_title">
        <h2>Dynamic Table</h2>
      </div>

      <CollapsibleMenu icon={<Pencil />} title="Title" subtitle={tableConfiguration.title}>
        <div className="grid_form two_columns">
          <div className="form_field entire_row">
            <label htmlFor="table_title">Title</label>
            <input
              type="text"
              id="table_title"
              onChange={(e) => handleChange(e, "title")}
              defaultValue={tableConfiguration.title}
            />
          </div>

          <div className="form_field">
            <label htmlFor="table_title_font_weight">Font Weight</label>
            <select
              id="table_title_font_weight"
              defaultValue={tableConfiguration.titleFontWeight}
              onChange={(e) => handleChange(e, "titleFontWeight")}
            >
              <option value="400">Normal</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
          </div>

          <div className="form_field">
            <label htmlFor="table_title_font_size">Font Size</label>
            <input
              type="number"
              id="table_title_font_size"
              defaultValue={tableConfiguration.titleFontSize}
              min={1}
              onChange={(e) => handleChange(e, "titleFontSize")}
            />
          </div>
        </div>
      </CollapsibleMenu>

      <CollapsibleMenu icon={<Palette />} title="Color">
        <div className="grid_form three_columns">
          <ColorPicker label="Header" id="table_header_color" />
          <ColorPicker label="Background" id="table_background_color" />
          <ColorPicker label="Alternate" id="table_alternate_color" />
        </div>
      </CollapsibleMenu>
    </aside>
  )
}