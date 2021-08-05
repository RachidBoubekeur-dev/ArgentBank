import { FormSignIn } from '../../components/smart/FormSignIn';
import './login.css';

/**
 *  Login container
 */
export const Login = () => {
    return (
        <section className="main bg-dark">
            <FormSignIn />
        </section>
    );
};
