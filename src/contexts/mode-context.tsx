import { ReactNode, createContext, useState } from "react";

interface MenuContextData {
  mode: "edit" | "preview";
  changeMode: () => void;
}

interface ModeProviderProps {
  children: ReactNode
}

export const ModeContext = createContext({} as MenuContextData);

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");

  function changeMode() {
    setMode(mode === "edit" ? "preview" : "edit");
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        changeMode
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}