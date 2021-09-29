import api from "./base.service";

const controller = 'alunos/';

class AlunoService{
    
    
    static async getAluno(){

        return await api.get(`${controller}return.php`);

    }

    static async createAluno(obj){

        return await api.post(`${controller}create-update.php`, obj);

    }

}

export default AlunoService