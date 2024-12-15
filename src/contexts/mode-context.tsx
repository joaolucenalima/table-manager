import { ReactNode, createContext, useState } from "react";

interface MenuContextData {
  mode: "edit" | "preview";
  actualSelection?: "table" | "column";
  setActualSelection: React.Dispatch<React.SetStateAction<"table" | "column" | undefined>>
  changeMode: () => void;
}

interface ModeProviderProps {
  children: ReactNode
}

export const ModeContext = createContext({} as MenuContextData);

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [actualSelection, setActualSelection] = useState<"table" | "column">();

  function changeMode() {
    setMode(mode === "edit" ? "preview" : "edit");
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        changeMode,
        actualSelection,
        setActualSelection
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}