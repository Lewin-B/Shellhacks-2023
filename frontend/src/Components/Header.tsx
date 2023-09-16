import logo from './Logo-1.jpg'
import './Header.css';

interface HeaderProps{
    title: string;
    description: string;
}
const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
      <header>
        <div className="header-left">
          <img className = "headerImg" src = {logo}></img>
          <h1>{title}</h1>  
        </div>
  
        <p className="header-right">
          {description}
        </p>
      </header>
    );
  };

export default Header;