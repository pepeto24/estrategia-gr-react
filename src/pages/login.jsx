import { Link, useHistory } from "react-router-dom"
import AuthService from "../core/services/auth.service"

function Login  (props){
    const history = useHistory();
    if(AuthService.isAuthenticated() == true){
        history.push('/lista-aulas');
    }
    return (
    <>

    <main className="d-flex login justify-content-center align-items-center">
        <section className="d-flex flex-column justify-content-center bg-white login">
        
        <h2 className="fs-2">FAZER LOGIN</h2>
        
        <input className="form-control mb-3" type="text" placeholder="Digite seu e-mail"/>
        
        <input className="form-control mb-3" type="text" placeholder="Digite sua senha"/>
            
        <Link to="/lista-aulas" className="btn btn-primary fs-3 botao text-center u-none" >Login</Link>
        </section>
    </main>

    <div className="modal" id="modalLogin" tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">OLá ....</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Bem vindo ao Estratégia GR!</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>

    <style jsx> {`

        body{
            background-color: var(--secondary-color);
        }
    
    `} </style>

    </>

    
    )

   
  }
  export default Login