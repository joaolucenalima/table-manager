import { Ban, CircleX } from "lucide-react";
import { useRef, useState } from "react";
import "./color-picker.css";

type ColorPickerProps = {
  label: string;
  id: string;
}

export function ColorPicker({ label, id }: ColorPickerProps) {
  const colorInputRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>("");

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (colorInputRef.current === null) return

    const color = e.target.value;
    colorInputRef.current.style.background = color;

    let timeout = null
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      setColor(color);
    }, 100);
  }

  const handleRemoveColor = () => {
    if (colorInputRef.current === null) return

    colorInputRef.current.style.background = "inherit";
    setColor("");
  }

  return (
    <div className="form_field">
      <label htmlFor={id}>{label}</label>
      <div className="color_input_container" ref={colorInputRef}>
        <input
          type="color"
          name={id}
          id={id}
          value={color}
          onChange={handleChangeColor}
        />

        {color ? (
          <CircleX size={18} className="circle_x_icon" onClick={handleRemoveColor} />
        ) : (
          <Ban size={20} className="ban_icon" />
        )}
      </div>
    </div>
  )
}