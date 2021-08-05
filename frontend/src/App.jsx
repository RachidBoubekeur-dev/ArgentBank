import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/dumb/Header';
import { Home } from './containers/Home';
import { Login } from './containers/Login';
import { Profile } from './containers/Profile';
import { Footer } from './components/dumb/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/profile" exact>
                            <Profile />
                        </Route>
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
