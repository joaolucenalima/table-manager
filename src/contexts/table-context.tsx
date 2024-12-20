import { ReactNode, createContext, useState } from "react";

export type ActualSelection = {
  type: "column" | "table";
  id: number;
};

export type TableConfiguration = {
  title: string;
  fontWeight: string;
}

export type TableColumn = {
  id: number;
  title: string;
  textAlign: "left" | "center" | "right";
}

type TableContextData = {
  mode: "edit" | "preview";
  actualSelection: ActualSelection;
  setActualSelection: React.Dispatch<React.SetStateAction<ActualSelection>>
  changeMode: () => void;
  tableConfiguration: TableConfiguration;
  setTableConfiguration: React.Dispatch<React.SetStateAction<TableConfiguration>>;
  tableColumns: TableColumn[];
  setTableColumns: React.Dispatch<React.SetStateAction<TableColumn[]>>;
  addColumn: () => void;
  removeColumn: (id: number) => void;
  changeColumnPosition: (index: number, direction: "left" | "right") => void;
}

type TableProviderProps = {
  children: ReactNode
}

export const TableContext = createContext({} as TableContextData);

export function TableProvider({ children }: TableProviderProps) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [actualSelection, setActualSelection] = useState<ActualSelection>({
    type: "table",
    id: 0
  });

  const [tableConfiguration, setTableConfiguration] = useState<TableConfiguration>({
    title: "Table Title",
    fontWeight: "500"
  });
  const [tableColumns, setTableColumns] = useState<TableColumn[]>([
    {
      id: 1,
      title: "Column #1",
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

  function changeColumnPosition(index: number, direction: "left" | "right") {
    const newColumns = [...tableColumns];
    const column = newColumns.splice(index, 1)[0];

    if (direction === "left") {
      newColumns.splice(index - 1, 0, column);
    } else {
      newColumns.splice(index + 1, 0, column);
    }

    setTableColumns(newColumns);
  }

  function changeMode() {
    setMode(mode === "edit" ? "preview" : "edit");
  }

  return (
    <TableContext.Provider
      value={{
        mode,
        changeMode,
        actualSelection,
        setActualSelection,
        tableConfiguration,
        setTableConfiguration,
        tableColumns,
        setTableColumns,
        addColumn,
        removeColumn,
        changeColumnPosition
      }}
    >
      {children}
    </TableContext.Provider>
  );
}