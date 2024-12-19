import { useContext } from "react";
import { ModeContext } from "../../contexts/mode-context";
import { ColumnEditSidebar } from "./column-edit-sidebar";
import "./sidebar.css";
import { TableEditSidebar } from "./table-edit-sidebar";

export function Sidebar() {
  const { mode, actualSelection } = useContext(ModeContext)

  if (mode === "preview") {
    return (
      <aside>
        <div id="sidebar_title">
          <h2>Preview Mode</h2>
        </div>

        <span id="divider"></span>
      </aside>
    )
  }

  if (actualSelection.type === "table") {
    return (
      <TableEditSidebar />
    )
  }

  return (
    <ColumnEditSidebar />
  )
}