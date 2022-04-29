const Navbar = function () {
  return (
    <nav className='navigation'>
      <div className='nav-flex container'>
        <div className='logo'>Landy News</div>
        <input type='text' placeholder='search...' className='input' />
      </div>
    </nav>
  );
};

export default Navbar;
