import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <a href="#" class="brand">Brand</a>
        </div>
        <div class="site-header__middle">
          <nav class="nav">
            <ul class="nav__wrapper">
              <li class="nav__item"><a href="#">Home</a></li>
              <li class="nav__item"><a href="#">About</a></li>
              <li class="nav__item"><a href="#">Blog</a></li>
              <li class="nav__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="site-header__end">
          <a class="button" href="#">Sign in</a>
        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;