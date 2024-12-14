import { Eye, Pencil } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../contexts/mode-context";
import "./change-mode-menu.css";

export function ChangeModeMenu() {
  const { mode, changeMode } = useContext(ModeContext)

  console.log(mode)

  return (
    <div id="change_menu_container">
      <h3>{mode.charAt(0).toUpperCase() + mode.slice(1)} Mode</h3>

      <label id="switch_container">
        <input
          type="checkbox"
          id="switch_checkbox"
          onChange={changeMode}
        />

        <Eye size={16} />
        <span id="switch_slider"></span>
        <Pencil size={16} />
      </label>
    </div>
  )
}