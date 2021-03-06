import AuthService from "./auth.service";
import api from "./base.service";

const controller = 'alunos/';

class AlunoService{
    
    
    static async getAluno(){
        return await api.get(`${controller}return.php`);

    }

    static async createAluno(obj){
        const result = await api.post(`${controller}create-update.php`, obj);
        AuthService.Authenticate(obj)
        return result;

    }

}

export default AlunoService