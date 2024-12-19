import { ReactNode, createContext, useState } from "react";

export type ActualSelection =
  | { type: "table"; id: null }
  | { type: "column"; id: number };

export type TableConfiguration = {
  title: string;
  titleFontWeight: string;
  titleFontSize: number;
}

export type TableColumn = {
  id: number;
  title: string;
  fontWeight: string;
  fontSize: number;
  textAlign: string;
}

type ModeContextData = {
  mode: "edit" | "preview";
  actualSelection: ActualSelection;
  setActualSelection: React.Dispatch<React.SetStateAction<ActualSelection>>
  changeMode: () => void;
  tableConfiguration: TableConfiguration;
  setTableConfiguration: React.Dispatch<React.SetStateAction<TableConfiguration>>;
  tableColumns: TableColumn[];
  addColumn: () => void;
  removeColumn: (id: number) => void;
}

type ModeProviderProps = {
  children: ReactNode
}

export const ModeContext = createContext({} as ModeContextData);

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [actualSelection, setActualSelection] = useState<ActualSelection>({
    id: null,
    type: "table"
  });

  const [tableConfiguration, setTableConfiguration] = useState<TableConfiguration>({
    title: "Dynamic Table #1",
    titleFontWeight: "400",
    titleFontSize: 18
  });

  const [tableColumns, setTableColumns] = useState<TableColumn[]>([
    {
      id: 1,
      title: "Column #1",
      fontWeight: "400",
      fontSize: 16,
      textAlign: "left"
    }
  ])

  function addColumn() {
    const nextId = tableColumns.reduce((acc, column) => Math.max(acc, column.id), 0) + 1

    setTableColumns([
      ...tableColumns,
      {
        id: nextId,
        title: `Column #${nextId}`,
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left"
      }
    ])
  }

  function removeColumn(id: number) {
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

    document.getElementById(newSelectionId.toString())?.classList.add("focused")
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
        tableConfiguration,
        setTableConfiguration,
        tableColumns,
        addColumn,
        removeColumn
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}