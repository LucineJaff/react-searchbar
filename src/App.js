import { useState, useRef, useMemo } from "react";

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
    return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, items])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value

    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })
    inputRef.current.value = ""
  }

  return (
    <>
    Search: <input
    type="search"
    value={query}
    onChange={e => setQuery(e.target.value)}
    />
    <br />
    <br />
    <form type="text" onSubmit={onSubmit}>
      New Item: <input type ="text" ref={inputRef} />
      <button type="submit">Add</button></form>
      <h3>Items:</h3>
      { filteredItems.map(item => (
        <div>{item}</div>
      ))}
      </>
  )
}

export default App;
