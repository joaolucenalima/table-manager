import { Pencil } from "lucide-react";
import { useContext } from "react";
import { ModeContext } from "../contexts/mode-context";
import { CollapsibleMenu } from "./collapsible-menu";
import "./sidebar.css";

export function Sidebar() {
  const { mode } = useContext(ModeContext)

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

  return (
    <aside>
      <div id="sidebar_title">
        <h2>Edit</h2>
      </div>

      <CollapsibleMenu icon={<Pencil />} title="Title" subtitle="Dynamic Title #1">
        <h3>Tables</h3>
        <span>Manage your tables</span>
      </CollapsibleMenu>
    </aside>
  )
}