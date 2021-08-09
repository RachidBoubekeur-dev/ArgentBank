import { WelcomeProfile } from '../../components/smart/WelcomeProfile';
import { Account } from '../../components/dumb/Account';
import './profile.css';

/**
 *  Profile container
 */
export const Profile = () => {
    return (
        <section className="main bg-dark">
            <WelcomeProfile />
            <h2 className="sr-only">Accounts</h2>
            <Account />
        </section>
    );
};
