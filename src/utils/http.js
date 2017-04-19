/**
 * Created by shengj on 2017/4/17.
 */
/**
 * fetch data
 */

import 'axios'
import localDb from './localDb'

class Http {

    get(url, params) { // GET请求
        url = params ? this.build(url, params) : url;
        return this.request(url, {
            method: 'GET'
        })
    }

    post(url, body) { // POST请求
        let options = {
            method: 'POST',
        };
        if (body) options.body = JSON.stringify(body);
        return this.request(url, options)
    }

    request(url, options) { // 根请求
        options.headers = this.defaultHeader();
        return fetch(url, options)
            .then(response => {
                return response.json()
            })
            .catch( err => console.error(url + ":" + err))
    }

    defaultHeader() { // 默认头
        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer${localDb.get('session')}`,
        };
        return header
    }

    build(url, params) { // URL构建方法
        let ps = [];
        if (params) {
            for (let p in params) {
                if (p) {
                    ps.push(p + '=' + params[p]);
                }
            }
        }
        return url + "?" + ps.join('&')
    }

}

export default new Http()