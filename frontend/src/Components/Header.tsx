import logo from './Logo-1.jpg';
import './Header.css';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="bg-gray-200 p-4 text-center pd-2">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-4">
          
            <img className="h-16 w-16 rounded-lg" src={logo} alt="Logo" />
          
            <h1 className=" text-3xl font-bold">BlurrSmith.ai</h1>
          
        </div>
      </div>
    </header>
    
  );
};


        
       
export default Header;