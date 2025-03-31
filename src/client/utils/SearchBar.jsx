import PropTypes from 'prop-types';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <form onSubmit={handleSearch} className="relative flex items-center p-4">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search cards..."
      className="bg-gray-700 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-redMana"
    />
    <button
      type="submit"
      className="absolute right-2 text-black dark:text-white hover:text-redMana"
    >
      🔍
    </button>
  </form>
);

// Move propTypes outside of the component
SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;

