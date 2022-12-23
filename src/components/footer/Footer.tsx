import logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <div className="bg-footer-neutral-100">
      <img src={logo} alt="logo"></img>
      <nav className="footer-navigation">
        <ul></ul>
        <ul></ul>
      </nav>
    </div>
  );
};
export default Footer;
