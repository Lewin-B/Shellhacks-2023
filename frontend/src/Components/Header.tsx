//import logoImg from './logo.png';
import './Header.css';

interface HeaderProps{
    title: string;
    description: string;
}
const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
      <header>
        <div className="header-left">
          <p>"Logo goes here</p>
          <h1>{title}</h1>  
        </div>
  
        <p className="header-right">
          {description}
        </p>
      </header>
    );
  };

export default Header;