import { Link } from 'react-router-dom';
import Logo from '/Bloom&Brew_Logo.svg';
import './Header.css';

function Header() {
    return (
        <section className="header_contianer">
            <header>
                <h1>Bloom & Brew</h1>
                <Link to="/"><img src={Logo} alt="Bloom & Brew Logo"/></Link>
            </header>
        </section>
    );
}

export default Header;