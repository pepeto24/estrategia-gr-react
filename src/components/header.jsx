import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/images/logo-branca.png";
import AuthService from "../core/services/auth.service";

function Header (props){
  const history = useHistory();
    const checkLogado = () => {
      return AuthService.isAuthenticated() == true;
    }
    const logout = () => {
      AuthService.logout();
      history.push('/login')
    }
    return <header className="sticky-top">
    <div className="bg-primary d-flex flex-wrap justify-content-between align-items-center w-100 px-3">
        <Link className="col-3" to="/">
          <img className="img-fluid" src={logo} alt="logo"/>
        </Link>

        <input className="d-none" type="checkbox" name="" id="nav"/>
        
        <label htmlFor="nav" className="d-block d-md-none" id="navBtn">
          <i className="fa fa-bars text-white fa-3x"></i>
        </label>

        <label htmlFor="nav" id="labelMenu">
          <nav className="d-none d-md-block">
            <Link to="/" className="btn me-2 btn-primary text-uppercase fw-bold">
              Página Inicial
            </Link>
            <Link to="/contato" className="btn me-2 btn-primary text-uppercase fw-bold">
              Contato
            </Link>
            { checkLogado()
              ? (<> 
                  <Link to="/lista-aulas" className="btn me-2 btn-secondary text-uppercase fw-bold">
                    Aulas
                  </Link>
                  <button onClick={logout} className="btn me-2 text-secondary text-uppercase fw-bold" title="Sair">
                    <FontAwesomeIcon  icon={faPowerOff} />
                  </button>
                </>)
            
              : (<> 
                  <Link to="/login" className="btn me-2 btn-primary text-uppercase fw-bold">
                    Login
                  </Link>
                  <Link to="/cadastro" className="btn me-2 btn-secondary text-uppercase fw-bold">
                    Cadastre-se
                  </Link> 
                </>)
            }
            

          </nav>
        </label>
        <label className="d-none" htmlFor="nav" id="backdrop"></label>
    </div>
      
</header>

   
  }
  export default Header