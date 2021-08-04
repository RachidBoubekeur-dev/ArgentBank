import iconChat from '../../../assets/icon-chat.png';
import iconMoney from '../../../assets/icon-money.png';
import iconSecurity from '../../../assets/icon-security.png';
import PropTypes from 'prop-types';
import './featureItem.css';

/**
 *  FeatureItem component dump
 * @param {String} feature required wait chat, money or security default is chat.
 */
const FeatureItem = (feature = 'chat') => {
    const arrayFeature = {
        chat: {
            icon: iconChat,
            title: 'You are our #1 priority',
            text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        },
        money: {
            icon: iconMoney,
            title: 'More savings means higher rates',
            text: 'The more you save with us, the higher your interest rate will be!',
        },
        security: {
            icon: iconSecurity,
            title: 'Security you can trust',
            text: 'We use top of the line encryption to make sure your data and money is always safe.',
        },
    };

    return (
        <div class="feature-item">
            <img
                src={arrayFeature.feature.icon}
                alt={`${feature} icon`}
                class="feature-icon"
            />
            <h3 class="feature-item-title">{arrayFeature.feature.title}</h3>
            <p>{arrayFeature.feature.text}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: PropTypes.string.isRequired,
};

FeatureItem.defaultProps = {
    feature: 'chat',
};

export default FeatureItem;
