import { Observable } from "rxjs";
import api from "./base.service";

const controller = 'alunos/';

class AuthService{
    
    
    static isAuthenticated(user){
        let logado = window.localStorage.getItem('logado');
        return logado ? true : false;
    }
    static logout(user){
        window.localStorage.clear();
        return new Observable();
    }

    static async Authenticate(user){
        window.localStorage.setItem('logado', true);
        window.localStorage.setItem('user', JSON.stringify(user));

        return true;
    }

}

export default AuthService