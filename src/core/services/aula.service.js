import AuthService from "./auth.service";
import api from "./base.service";

const controller = 'aulas/';

class AulaService{
    
    
    static async getAula(){
        return await api.get(`${controller}return.php`);

    }

    static async createAula(obj){
        const result = await api.post(`${controller}create-update.php`, obj);
        return result;

    }

}

export default AulaService