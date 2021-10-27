
import "./SearchInput.css"
import { Search } from "../Icons/SlackCloneIcons"

const SearchInput = () => {
    return (
        <button className="searchOrg">
            <Search width="1em" height="1em" color="white" />
            <span className="searchText"> Search Arizona State University</span>
        </button>
    )
}

export default SearchInput