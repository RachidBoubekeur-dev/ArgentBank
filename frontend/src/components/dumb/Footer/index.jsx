import './footer.css';

/**
 *  Footer component dump - this component is available everywhere in the application.
 */
export const Footer = () => {
    return (
        <footer class="footer">
            <p class="footer-text">
                Copyright {new Date().getFullYear()} Argent Bank
            </p>
        </footer>
    );
};
