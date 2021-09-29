import rodrigo from "../assets/images/rodrigo1.png";
import info from "../assets/images/info-hero.png";
import foguete from "../assets/images/foguete.png";
import video from "../assets/images/video-home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCloud, faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons";

function Principal  (props){
    return (
    
    <>

<main>
    <section className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between bg-primary" id="hero">
      <div className="col-4">
        <img className="img-fluid" src={rodrigo} alt="rodrigo"/>

      </div>

      <ul className="text-white fs-3 fw-bold mx-auto col-4 mx-auto d-block py-2 px-2">
        <li>APOIO INDIVIDUAL</li>
        <li>AULAS ONLINE/GRAVADAS</li>
        <li>PROPOSTAS SEMANAIS</li>
      </ul>

      <div className="info-hero  col-4 p-2">
        <img className="mx-auto d-block img-fluid" src={info} alt="informações"/>
      </div>
    </section>
    

      <section id="vantagens" className="text-primary">
        <div className="container d-flex  align-items-center py-2">
          <div className="d-flex align-items-md-start align-items-center flex-column flex-md-row justify-content-around ">

            <div className="d-block w-md-15 w-50 py-1">
              <FontAwesomeIcon className="fa-4x" icon={faBook}/>
              <p>MATERIAIS COMPLETOS E ATUALIZADOS!</p>
            </div>

            <div className="d-block w-md-15 w-50 py-1">
              <FontAwesomeIcon className="fa-4x" icon={faHome}/>
              <p>ASSISTA AS AULAS NO CONFORTO DA SUA CASA</p>
            </div>

            <div className="d-block w-md-15 w-50 py-1">
              <FontAwesomeIcon className="fa-4x" icon={faGraduationCap}/>
              <p>CONSIGA A APROVAÇÃO QUE VOCÊ TANTO PROCURA COM O ESTRATEGIA GR</p>
            </div>

          </div>
        </div>
      </section>


      <section id="formacao" className="bg-secondary">
        <div className="container d-flex flex-wrap-reverse">
          <div className="d-flex justify-content-center w-md-50 w-100 py-2">
            <img src={video} alt="" id="video-home"/>

          </div>
          <div className="w-100 text-primary w-md-50">
            <h2 className="text-center">Conheça o professor</h2>
            <div className="bg-white rounded fw-bold">
              <ul>
                <li>
                  Mestre em Letras
                </li>
                <li>
                  Especialista em Mídias na Educação
                </li>
                <li>
                  Graduado em Letras pela UEPB - UC Portugal
                </li>
              </ul>

            </div>
            
          </div>

        </div>
      </section>
    </main>

    <footer className="bg-primary">
      
     
    <div className="foguete-container d-flex flex-column">
      <img className="foguete" src={foguete} alt="" srcset=""/>

      <FontAwesomeIcon className="fumaca" icon={faCloud}/>
      <FontAwesomeIcon className="fumaca" icon={faCloud} />

    </div>

    <small>Todos os direitos reservados &copy</small> 

    </footer>


    </>
        
    )

   
  }
  export default Principal