import './welcomeProfile.css';

/**
 *  WelcomeProfile component smart
 */
export const WelcomeProfile = () => {
    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button className="edit-button">Edit Name</button>
        </div>
    );
};
