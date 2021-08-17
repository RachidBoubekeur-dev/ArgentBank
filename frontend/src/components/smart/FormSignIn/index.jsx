import { useRef, useState } from 'react';
import Axios from '../../../services/Axios';
import { useDispatch } from 'react-redux';
import { profile } from '../../../slices/User';
import { useHistory } from 'react-router-dom';
import './formSignIn.css';

/**
 *  FormSignIn component smart
 *  login form
 */
export const FormSignIn = () => {
    const email = useRef();
    const password = useRef();
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    /**
     *  SetUserData send data to Slice
     * @param  {Object} userData this is the data received by Axios
     */
    const SetUserData = (userData) => {
        dispatch(profile({ ...userData }));
        localStorage.setItem('token', JSON.stringify(userData.token));
        history.push('/profile');
    };

    const SignInSubmit = (e) => {
        e.preventDefault();
        const dataForm = {
            email: email.current.value,
            password: password.current.value,
        };
        Axios('login', dataForm)
            .then((userData) => {
                SetUserData(userData);
            })
            .catch(() => {
                setError(true);
            });
    };

    return (
        <div className="sign-in-content">
            {error && (
                <span style={{ color: 'red' }}>
                    Your username or password is incorrect !
                </span>
            )}
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={SignInSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Email</label>
                    <input type="email" id="email" ref={email} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={password}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <input
                    type="submit"
                    value="Sign In"
                    className="sign-in-button"
                />
            </form>
        </div>
    );
};
