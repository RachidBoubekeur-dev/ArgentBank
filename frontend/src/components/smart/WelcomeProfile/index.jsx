import './welcomeProfile.css';

/**
 *  WelcomeProfile component smart
 */
export const WelcomeProfile = () => {
    return (
        <div class="header">
            <h1>
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button class="edit-button">Edit Name</button>
        </div>
    );
};
