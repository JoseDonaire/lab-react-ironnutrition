import { useState } from "react"

function Search(props) {

  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
    props.filterFood(event.target.value)
  }
  return (
    <div>

      <h4>Search</h4>
        <label htmlFor="search">Search: </label>
        <input type="text" name="search" onChange={handleSearch} value={search}/>
    </div>
  )
}

export default Search