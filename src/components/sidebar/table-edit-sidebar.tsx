import { AlignCenter, AlignLeft, AlignRight, Palette, Pencil } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ActualSelection } from "../../contexts/mode-context";
import { CollapsibleMenu } from "../collapsible-menu";
import { ColorPicker } from "../color-picker";

type TableEditSidebarProps = {
  id: string;
  setActualSelection: Dispatch<SetStateAction<ActualSelection>>;
}

export function TableEditSidebar({ id }: TableEditSidebarProps) {
  return (
    <aside>
      <div id="sidebar_title">
        <h2>{id ? id : "Dynamic Table"}</h2>
      </div>

      <CollapsibleMenu icon={<Pencil />} title="Title" subtitle={id}>
        <div className="grid_form two_columns">
          <div className="form_field entire_row">
            <label htmlFor="table_title">Title</label>
            <input type="text" name="table_title" id="table_title" />
          </div>

          <div className="form_field">
            <label htmlFor="table_title_font_weight">Font Weight</label>
            <select name="table_title_font_weight" id="table_title_font_weight">
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="extra_bold">Extra Bold</option>
            </select>
          </div>

          <div className="form_field">
            <label htmlFor="table_title_font_size">Font Size</label>
            <input
              type="number"
              name="table_title_font_size"
              id="table_title_font_size"
              defaultValue={16}
              min={1}
            />
          </div>

          <div className="form_field">
            <label htmlFor="table_title_text_align">Alignment</label>
            <fieldset id="table_title_text_align" className="alignment_fieldset">
              <label>
                <input type="radio" name="table_title_text_align" value="left" defaultChecked />
                <AlignLeft />
              </label>

              <label>
                <input type="radio" name="table_title_text_align" value="center" />
                <AlignCenter />
              </label>

              <label>
                <input type="radio" name="table_title_text_align" value="right" />
                <AlignRight />
              </label>
            </fieldset>
          </div>
        </div>
      </CollapsibleMenu>

      <CollapsibleMenu icon={<Palette />} title="Color">
        <div className="grid_form three_columns">
          <ColorPicker label="Header" id="table_header_color" />
          <ColorPicker label="Background" id="table_background_color" />
          <ColorPicker label="Footer" id="table_footer_color" />
          <ColorPicker label="Border" id="table_border_color" />
          <ColorPicker label="Alternate" id="table_alternate_color" />
        </div>
      </CollapsibleMenu>
    </aside>
  )
}