import { ReactNode, createContext, useState } from "react";

export type ActualSelection = {
  id: string,
  type: "table" | "column"
}

type ModeContextData = {
  mode: "edit" | "preview";
  actualSelection: ActualSelection;
  setActualSelection: React.Dispatch<React.SetStateAction<ActualSelection>>
  changeMode: () => void;
}

type ModeProviderProps = {
  children: ReactNode
}

export const ModeContext = createContext({} as ModeContextData);

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [actualSelection, setActualSelection] = useState<ActualSelection>({
    id: "Coluna #1",
    type: "column"
  });

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