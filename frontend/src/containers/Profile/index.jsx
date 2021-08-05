import { WelcomeProfile } from '../../components/smart/WelcomeProfile';
// import { Account } from '../../components/smart/Account';
import './profile.css';

export const Profile = () => {
    return (
        <section class="main bg-dark">
            <WelcomeProfile />
            <h2 class="sr-only">Accounts</h2>
            {/* <Account /> */}
        </section>
    );
};
