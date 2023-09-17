import logo from './Logo-1.jpg';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
      <img src = {logo}
      style = {{height: '40px', width: '40px', marginRight: '100px', borderRadius: "10%", borderColor: 'black', borderWidth: '2px', backgroundColor: 'rgb(229 231 235)'}}/>
      <footer style={{ height: '0px', marginTop: '8px'}}>
        {`Copyright © BlurrSmith.ai ${year}`}
      </footer>
    </div>

    );
  };
  
  export default Footer;
  