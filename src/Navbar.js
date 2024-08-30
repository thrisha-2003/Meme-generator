import logo from './meme-logo.jpg';
import './index.css';
export default function Navbar(){
    return(
        <nav>
           
<img src={logo} alt='logo' className="Nav-bar-logo"/>
<h1>Memes Generator</h1>


        </nav>
        
        
    );
}