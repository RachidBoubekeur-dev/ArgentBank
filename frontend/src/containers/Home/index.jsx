import { HeroContent } from '../../components/dumb/HeroContent';
import FeatureItem from '../../components/dumb/FeatureItem';

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
