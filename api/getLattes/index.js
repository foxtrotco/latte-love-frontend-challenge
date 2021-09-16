import axios from 'axios';

const getLattes = () => {
    return axios
        .get(`http://localhost:3000/api/lattes`)
        .then((response) => {
            return { data: response.data, error: false };
        })
        .catch(() => {
            return { error: true };
        });
};
export default getLattes;
