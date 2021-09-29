import { useHistory } from "react-router-dom";
import AulaCadastroDto from "../core/models/aula-cadastro.dto";
import AulaService from "../core/services/aula.service";
import AuthService from "../core/services/auth.service";

function CadastroAula  (props){
    const history = useHistory();
    if(AuthService.isAuthenticated() != true){
        history.push('/login');
    }
    const cadastrar = () => {
      let aulaCadastro = new AulaCadastroDto();
      aulaCadastro.titulo = document.getElementById('titulo').value;
      aulaCadastro.url = document.getElementById('url').value;
      AulaService.createAula(aulaCadastro);
    }
    return( 
        <>
        <div className="container">
          <h1 className="text-center my-4 className=fs-2">Cadastra Aula</h1>
         <section className="card-deck row">

              <div className="mb-3">
                <label for="tituloAula" className="form-label">Título da Aula</label>
                <input type="text" id="titulo" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="linkYoutube" className="form-label">Link do Vimeo</label>
                <input type="text" id="url" className="form-control" />
              </div>
              <button onClick={cadastrar} className="btn btn-primary">Salvar</button>

          </section>

      </div>
        </>
        )
    

   
  }
  export default CadastroAula