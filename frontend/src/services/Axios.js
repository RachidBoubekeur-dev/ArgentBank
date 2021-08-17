import axios from 'axios';
import PropTypes from 'prop-types';

/**
 * Axios is returns a promise it allows to make API calls according to the send action
 * @param  {String} action is login, profile or update
 * @param  {Object} dataForm is data for request axios
 * @param  {String} token for authorization request axios
 */
const Axios = (action, dataForm = {}, token = '') => {
    return new Promise((resolve, reject) => {
        const url = `http://${window.location.hostname}:3001/api/v1/user/`;

        /**
         * update allows you to send a modification request from the token
         */
        const update = () => {
            axios({
                method: 'put',
                url: `${url}profile`,
                data: {
                    ...dataForm,
                },
                headers: {
                    authorization: token,
                },
            })
                .then((res) => {
                    const userData = {
                        ...res.data.body,
                        token,
                        status: 'connect',
                    };
                    resolve(userData);
                })
                .catch((err) => {
                    reject(err);
                });
        };

        /**
         * profile allows to send an API request if the data is correct the API sends us the user data from the token
         * @param  {String} token for authorization request axios
         */
        const profile = (token) => {
            axios({
                method: 'post',
                url: `${url}profile`,
                headers: {
                    authorization: token,
                },
            })
                .then((res) => {
                    const userData = {
                        ...res.data.body,
                        token,
                        status: 'connect',
                    };
                    resolve(userData);
                })
                .catch((err) => {
                    reject(err);
                });
        };

        /**
         * login allows you to send an API request if the data is correct the API sends us a token
         */
        const login = () => {
            axios({
                method: 'post',
                url: `${url}login`,
                data: {
                    ...dataForm,
                },
            })
                .then((res) => profile(`Bearer ${res.data.body.token}`))
                .catch((err) => reject(err));
        };

        /**
         * depending on the action we call the function
         */
        switch (action) {
            case 'login':
                login();
                break;
            case 'profile':
                profile(token);
                break;
            case 'update':
                update();
                break;
            default:
                reject('The action is missing !');
        }
    });
};

Axios.propTypes = {
    action: PropTypes.string.isRequired,
    dataForm: PropTypes.object,
    token: PropTypes.string,
};

Axios.defaultProps = {
    dataForm: {},
    token: '',
};

export default Axios;
