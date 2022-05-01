import { useGlobalContext } from '../context';

const SearchForm = function () {
  const { search, handleSearch } = useGlobalContext();
  return (
    <div className='container'>
      <input
        type='text'
        placeholder='search...'
        className='input'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
