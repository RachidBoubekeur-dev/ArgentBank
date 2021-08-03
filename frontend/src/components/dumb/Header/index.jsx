import { NavLink } from 'react-router-dom';
import logo from '../../../assets/argentBankLogo.png';
import './header.css';

/**
 *  Header component dump - this component allows navigation on the application.
 */
export const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink exact to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink exact to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};
