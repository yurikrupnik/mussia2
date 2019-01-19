import request from '../jamesRequest';
import { url, provider } from './config';

class Api {
    constructor(p, u) {
        this.provider = p;
        this.url = u;
    }

    fetch(params) {
        return request.get(`${this.url}`, { params })
            .then(res => res.data.CurrencyRates.CurrencyRate)
            .catch(err => err);
    }
}

export default new Api(provider, url);
