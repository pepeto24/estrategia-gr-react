import env from "../../environments/environments"

class BaseService{

    apiUrl = 'http://157.245.132.213/joao/estrategia-gr/';

    static async get(url){
        
        return await fetch(this.apiUrl + url, {
 
            method: 'get',
            headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            },

        });
    }

    static async post(url, obj){
        console.log(this.apiUrl)
        return await fetch('http://157.245.132.213/joao/estrategia-gr/' + url, {

            method: 'post',
            body: JSON.stringify(obj),
            headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            },

        });
    }

}

export default BaseService