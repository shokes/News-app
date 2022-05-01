import { useGlobalContext } from '../context';
import { useEffect, useRef } from 'react';
const SearchForm = function () {
  const { search, handleSearch } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='search...'
        className='input'
        value={search}
        ref={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
