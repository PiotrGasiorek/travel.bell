import Nav from './Nav';

const Header:React.FC = () => {
  return (
    <header className='header'>
      <Nav/>
      <h1 className='header__title'>Find perfect hotel rooms which fits you</h1>
    </header>
  );
}

export default Header;
