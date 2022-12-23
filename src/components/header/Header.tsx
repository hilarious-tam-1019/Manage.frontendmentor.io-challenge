import Button from '../button/Button';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <ul className="navbar">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <Button name="Get Started" />
    </nav>
  );
};
export default Header;
