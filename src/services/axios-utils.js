import axios from 'axios';
import GlobalHttp from './GlobalHttp';

const client = axios.create({ baseURL: GlobalHttp })

export const request = ({ ...options }) => {
    client.default.headers.common.Authrization = `Bearer token`
    const onSuccess = (response) => {
        return response;
    }

    const onError = (error) => {
        return error;
    }

    return client(options).then(onSuccess).catch(onError)
}
