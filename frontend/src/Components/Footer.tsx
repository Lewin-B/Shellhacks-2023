import logo from './Logo-1.jpg';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer style={{ height: '25px', lineHeight: '50px'}}>
        {`Copyright © Your Company Name ${year}`}
      </footer>
    );
  };
  
  export default Footer;
  
