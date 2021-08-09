import './footer.css';

/**
 *  Footer component dump - this component is available everywhere in the application.
 */
export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                Copyright {new Date().getFullYear()} Argent Bank
            </p>
        </footer>
    );
};
