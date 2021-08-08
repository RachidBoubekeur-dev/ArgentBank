import { useState } from 'react';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    /**
     *  SetUserData send data to Slice
     * @param  {Object} userData this is the data received by Axios
     */
    const SetUserData = (userData) => {
        dispatch(profile({ ...userData }));
        remember &&
            localStorage.setItem('token', JSON.stringify(userData.token));
        history.push('/profile');
    };

    const SignInSubmit = (e) => {
        e.preventDefault();
        const dataForm = {
            email: email,
            password: password,
        };
        Axios('login', dataForm)
            .then((userData) => {
                SetUserData(userData);
            })
            .catch((err) => {
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
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        onChange={(e) => setRemember(e.target.checked)}
                    />
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
