import { AlignCenter, AlignLeft, AlignRight, MoveDiagonal, Palette, Pencil, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useContext } from "react";
import { ActualSelection, ModeContext } from "../../contexts/mode-context";
import { CollapsibleMenu } from "../collapsible-menu";
import { ColorPicker } from "../color-picker";

type ColumnEditSidebarProps = {
  id: string;
  setActualSelection: Dispatch<SetStateAction<ActualSelection>>;
}

export function ColumnEditSidebar({ id }: ColumnEditSidebarProps) {
  const { tableColumns, removeColumn } = useContext(ModeContext)

  return (
    <aside>
      <div id="sidebar_title">
        <h2>{id}</h2>

        {tableColumns.length > 1 && (
          <button
            type="button"
            className="delete_button"
            title="Remove Column"
            onClick={() => removeColumn(id)}
          >
            <Trash2 size={18} color="#f70a0a" />
          </button>
        )}
      </div>

      <CollapsibleMenu icon={<Pencil />} title="Title">
        <div className="grid_form two_columns">
          <div className="form_field entire_row">
            <label htmlFor="column_title">Column header</label>
            <input type="text" name="column_title" id="column_title" />
          </div>

          <div className="form_field">
            <label htmlFor="column_font_weight">Font Weight</label>
            <select name="column_font_weight" id="column_font_weight">
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="extra_bold">Extra Bold</option>
            </select>
          </div>

          <div className="form_field">
            <label htmlFor="column_font_size">Font Size</label>
            <input
              type="number"
              name="column_font_size"
              id="column_font_size"
              defaultValue={16}
              min={1}
            />
          </div>

          <div className="form_field">
            <label htmlFor="column_text_align">Alignment</label>
            <fieldset id="column_text_align" className="alignment_fieldset">
              <label>
                <input type="radio" name="column_text_align" value="left" defaultChecked />
                <AlignLeft />
              </label>

              <label>
                <input type="radio" name="column_text_align" value="center" />
                <AlignCenter />
              </label>

              <label>
                <input type="radio" name="column_text_align" value="right" />
                <AlignRight />
              </label>
            </fieldset>
          </div>
        </div>
      </CollapsibleMenu>

      <CollapsibleMenu icon={<MoveDiagonal />} title="Size">
        <div className="grid_form two_columns">
          <div className="form_field">
            <label htmlFor="column_width">Width</label>
            <input
              type="number"
              name="column_width"
              id="column_width"
              min={1}
            />
          </div>

          <div className="form_field">
            <label className="one_line_field">
              <span>Fit Content</span>
              <input type="checkbox" name="column_fit_content" />
            </label>
          </div>
        </div>
      </CollapsibleMenu>

      <CollapsibleMenu icon={<Palette />} title="Color">
        <div className="grid_form three_columns">
          <ColorPicker label="Header" id="column_header_color" />
          <ColorPicker label="Background" id="column_background_color" />
        </div>
      </CollapsibleMenu>
    </aside>
  )
}