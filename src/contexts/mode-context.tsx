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
  tableColumns: {
    id: string;
    fontWeight: string;
    fontSize: number;
    textAlign: string;
  }[];
  addColumn: () => void;
  removeColumn: (id: string) => void;
}

type ModeProviderProps = {
  children: ReactNode
}

export const ModeContext = createContext({} as ModeContextData);

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [actualSelection, setActualSelection] = useState<ActualSelection>({
    id: "Dynamic Table #1",
    type: "table"
  });

  const [tableColumns, setTableColumns] = useState([
    {
      id: "Column #1",
      fontWeight: "normal",
      fontSize: 16,
      textAlign: "left"
    }
  ])

  function addColumn() {
    setTableColumns([
      ...tableColumns,
      {
        id: `Column #${tableColumns.length + 1}`,
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left"
      }
    ])
  }

  function removeColumn(id: string) {
    const columnIndex = tableColumns.findIndex(column => column.id === id)

    if (columnIndex === -1 || tableColumns.length === 1) {
      return;
    }

    setTableColumns(tableColumns.filter(column => column.id !== id))

    const newSelectionId = tableColumns[columnIndex - 1]?.id || tableColumns[0].id

    setActualSelection({
      id: newSelectionId,
      type: "column"
    })

    document.getElementById(newSelectionId)?.classList.add("focused")
  }

  function changeMode() {
    setMode(mode === "edit" ? "preview" : "edit");
  }

  return (
    <ModeContext.Provider
      value={{
        mode,
        changeMode,
        actualSelection,
        setActualSelection,
        tableColumns,
        addColumn,
        removeColumn
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}