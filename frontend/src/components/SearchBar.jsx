
const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div className="mb-4 flex items-center justify-center w-full max-w-md gap-2 mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search tokens..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="flex gap-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ease-in cursor-pointer"
      >
        <span>🔍</span> Search
      </button>
    </div>
  );
};

export default SearchBar;
