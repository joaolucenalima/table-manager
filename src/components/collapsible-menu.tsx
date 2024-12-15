import { ChevronUp } from "lucide-react";
import { useRef } from "react";
import "./collapsible-menu.css";

type CollapsibleMenuProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function CollapsibleMenu(props: CollapsibleMenuProps) {
  const collapsibleRef = useRef<HTMLButtonElement>(null);

  function toggleCollapsible() {
    if (!collapsibleRef.current) return

    const collapsibleContent = collapsibleRef.current.nextElementSibling as HTMLElement;

    if (collapsibleContent.style.maxHeight) {
      collapsibleRef.current.classList.remove("active");
      collapsibleContent.style.maxHeight = "";
    } else {
      collapsibleRef.current.classList.add("active");
      collapsibleContent.style.maxHeight = `${collapsibleContent.scrollHeight}px`;
    }
  }

  return (
    <div className="collapsible_container">
      <button
        type="button"
        className="collapsible_button"
        ref={collapsibleRef}
        onClick={toggleCollapsible}
      >
        {props.icon}

        <div className="collapsible_title_container">
          <h3>{props.title}</h3>
          <span>{props.subtitle}</span>
        </div>

        <ChevronUp size={18} strokeWidth={3} className="collapsible_chevron_icon" />
      </button>

      <div className="collapsible_content">
        <div className="collapsible_inner_content">
          {props.children}
        </div>
      </div>
    </div>
  )
}