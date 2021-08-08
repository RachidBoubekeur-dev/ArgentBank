import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/dumb/Header';
import { Home } from './containers/Home';
import { Login } from './containers/Login';
import { Profile } from './containers/Profile';
import { Footer } from './components/dumb/Footer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from './services/Axios';
import { profile } from './slices/User';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const [connect, setConnect] = useState(false);
    const userData = useSelector((state) => state.user);

    /**
     * if the token is valid and the user is not logged in, we connect the user
     */
    const setResponse = (res) => {
        dispatch(profile({ ...res }));
        setConnect(true);
    };

    /**
     * if the user is not logged in, we check the validation of the token
     */
    const verifTokenValid = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            Axios('profile', {}, token)
                .then((res) => {
                    setResponse(res);
                })
                .catch(() => {
                    setConnect(false);
                    localStorage.clear();
                });
        } else {
            setConnect(false);
        }
    };

    /**
     * we check if the user is logged in
     */
    useEffect(() => {
        if (userData.user.status === 'connect') {
            setConnect(true);
        } else {
            verifTokenValid();
        }
        // eslint-disable-next-line
    }, [userData]);

    return (
        <div>
            <Router>
                <Header isConnect={connect} />
                <main>
                    <Switch>
                        {connect ? (
                            <Route path="/profile" exact>
                                <Profile />
                            </Route>
                        ) : (
                            <Route path="/login" exact>
                                <Login />
                            </Route>
                        )}
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
