import SearchIcon from "./Icon/SearchIcon";

function Search() {
  return(
    <form>
      <SearchIcon></SearchIcon>
      <input type="text" placeholder={'Search store'}/>
    </form>
  )
}

export default Search