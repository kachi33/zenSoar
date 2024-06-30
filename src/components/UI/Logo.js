import logo from '../../images/logo.png';

const Logo = () => {
    return ( 
        <div className='header-logo'>
        <img alt='logo' src={logo} />
        <h1 className= 'header-tagline'>Digital Lab Assistant</h1>
    </div>
     );
}
 
export default Logo;