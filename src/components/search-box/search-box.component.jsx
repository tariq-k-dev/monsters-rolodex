import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input
    id="monster-search"
    name="monster-search"
    aria-label="Search monsters"
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
