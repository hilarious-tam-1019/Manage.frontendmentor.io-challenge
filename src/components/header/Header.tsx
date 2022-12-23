import Button from '../button/Button';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo"></img>

        <nav className="primary-navigation">
          <ul role="list" className="nav-list">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>

        <Button name="Get Started" />
      </div>
    </header>
  );
};
export default Header;
