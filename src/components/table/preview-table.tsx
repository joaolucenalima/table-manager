import { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../contexts/mode-context"
import "./preview-table.css"

type PostsType = {
  userId: number
  id: number
  title: string
  body: string
}

export function PreviewTable() {
  const { tableColumns, tableConfiguration } = useContext(ModeContext)

  const [posts, setPosts] = useState<PostsType[]>()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((data: PostsType[]) => {
        setPosts(data.slice(0, 5))
      })
  }, [])

  return (
    <div className="table_container">
      <div className="table_header" style={{ fontWeight: tableConfiguration.fontWeight }}>
        {tableConfiguration.title}
      </div>

      <div className="table_content">
        <table>
          <thead>
            <tr>
              {tableColumns.map((column, index) => (
                <th key={index} style={{ textAlign: column.textAlign }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {tableColumns.map((column, colIndex) => (
                  <td key={colIndex} style={{ textAlign: column.textAlign }}>
                    {posts ? posts[rowIndex]?.title || "-" : "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  )
}