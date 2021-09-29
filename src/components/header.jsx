import { Link } from "react-router-dom";
import logo from "../assets/images/logo-branca.png";

function Header (props){
    return <header className="sticky-top">
    <div className="bg-primary d-flex flex-wrap justify-content-between align-items-center w-100">
        <Link className="col-3" to="/">
          <img className="img-fluid" src={logo} alt="logo"/>
        </Link>

        <input className="d-none" type="checkbox" name="" id="nav"/>
        
        <label htmlFor="nav" className="d-block d-md-none" id="navBtn">
          <i className="fa fa-bars text-white fa-3x"></i>
        </label>

        <label htmlFor="nav" id="labelMenu">
          <nav className="d-none d-md-block">
            <Link to="/" className="btn btn-primary text-uppercase fw-bold">
              Página Inicial
            </Link>
            <Link to="/contato" className="btn btn-primary text-uppercase fw-bold">
              Contato
            </Link>
            <Link to="/login" className="btn btn-primary text-uppercase fw-bold">
              Login
            </Link>
            <Link to="/cadastro" className="btn btn-secondary text-uppercase fw-bold">
              Cadastre-se
            </Link>
          </nav>
        </label>
        <label className="d-none" htmlFor="nav" id="backdrop"></label>
    </div>
      
</header>

   
  }
  export default Header