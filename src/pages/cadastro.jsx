import { useState } from "react";
import { useHistory } from "react-router-dom";
import Aluno from "../core/models/aluno";
import AlunoService from "../core/services/aluno.service";

const Cadastro = (props, context) => {
    const [aluno, setAluno] = useState(new Aluno());
    const history = useHistory();

    async function handleClick(event){
        let novoAluno = new Aluno();
        const inputs = document.querySelectorAll('.form-cadastro input');
        inputs.forEach(input => {
            novoAluno[input.name] = input.value;
        });
        await AlunoService.createAluno(novoAluno);
        history.push('/login')
    };

    const handleChangeCpf = (event) => {
        const value = event.target.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');

        setAluno({...aluno, cpf: value});
    }

    return <div className="d-flex flex-column align-items-center justify-content-center" >
    <section className=" w-md-25 w-75 d-flex flex-column justify-content-center  bg-tertiary mt-3 p-3">
      <h3 className="fs-2 bg text-primary mb-4 text-uppercase">Preencha com seus dados e seja mais um dos aprovados! </h3>
      <div className="form-cadastro">
        <input name="nome" className="form-control mb-3" type="text"  placeholder="NOME" required/>
        <input name="email" className="form-control mb-3" type="text" placeholder="E-MAIL"required/>
        <input name="senha" className="form-control mb-3" type="password" placeholder="SENHA"/> 
        <input name="cpf" onChange={handleChangeCpf} value={aluno.cpf} className="form-control mb-3" type="text" placeholder="CPF"required/>
      </div>

      <div>Você prefere aulas gravadas ou aulas online?</div>
      <div className="form-check">
          <input className="form-check-input" type='radio' name="curso-user" value="AG" id="AG"/>
          <label htmlFor="AG">Aulas gravadas</label>
      </div>
      <div className="form-check">
          <input className="form-check-input" type='radio' name="curso-user" value="online" id="online"/>
          <label htmlFor="AG">Aulas online</label>
      </div>
     <button className="btn btn-primary fs-3 mt-4" onClick={handleClick}>Cadastrar</button>
    </section>
  </div>

   
  }
  export default Cadastro