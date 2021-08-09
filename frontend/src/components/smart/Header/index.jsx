import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../../assets/argentBankLogo.png';
import { logout } from '../../../slices/User';
import './header.css';

/**
 *  Header component smart - this component allows navigation on the application.
 */
export const Header = (props) => {
    const name = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    /**
     *  If the user logs out, reset the state with the logout action, we clean the localStorage and redirect it to the Home page.
     */
    const SignOut = () => {
        dispatch(logout());
        localStorage.clear();
        history.push('/');
    };

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
                    {props.isConnect ? (
                        <div>
                            <NavLink
                                exact
                                to="/profile"
                                className="main-nav-item"
                            >
                                <i className="fa fa-user-circle"></i>
                                {name.user.firstName}
                            </NavLink>
                            <span
                                className="main-nav-item"
                                style={{
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                                onClick={SignOut}
                            >
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </span>
                        </div>
                    ) : (
                        <NavLink exact to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};
