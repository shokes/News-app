import { useGlobalContext } from '../context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const Navbar = function () {
  const { search, setSearch, handleThemeChange, theme } = useGlobalContext();

  return (
    <nav className='navigation'>
      <div className='nav-flex container'>
        <div className='logo'>Landy News</div>

        <div>
          <input
            type='text'
            placeholder='search...'
            className='input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={handleThemeChange} className='container btn-toggle'>
            {theme === 'dark-theme' ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
