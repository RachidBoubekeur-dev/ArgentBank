import { HeroContent } from '../../components/dumb/HeroContent';
<<<<<<< develop
import FeatureItem from '../../components/dumb/FeatureItem';
=======
// import { FeatureItem } from '../../components/dumb/FeatureItem';
>>>>>>> :hammer: add HeroContent component dump in container Home
import './home.css';

export const Home = () => {
    const arrayItem = ['chat', 'money', 'security'];
    return (
        <section>
            <div className="hero">
                <HeroContent />
            </div>
            <div className="features">
                <h2 className="sr-only">Features</h2>
                {arrayItem.map(({ feature }, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </div>
        </section>
    );
};
