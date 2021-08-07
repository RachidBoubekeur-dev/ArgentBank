import { useQuery } from 'react-query';
import { axios } from 'axios';

export const useAxios = (action, data) => {
    const login = useQuery(action, async () => {
        const response = await axios.post(
            `http://${window.location.hostname}:3001/user/login`,
            { data }
        );
        if (response.ok) {
            return response.data;
        }
        throw new Error('Your username or password is incorrect !');
    });

    switch (action) {
        case 'login':
            login();
            break;
        case 'update':
            break;
        case 'logout':
            break;
        default:
            return 'null';
    }
};
