const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="search"
    placeholder="Search"
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
    className="search-bar"
    aria-label="Search books"
  />
);

export default SearchBar;