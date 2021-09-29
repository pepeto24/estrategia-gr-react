import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

function Contato  (props){
    return <div className="d-flex flex-column flex-wrap justify-content-center align-items-center">

    <section className="bg-white mt-5 p-5">
  
      <h2 className="fs-3 text-uppercase fw-bold mb-2 p-2 text-primary">Entre em Contato</h2>
  
      <ul className="ps-5 mt-2 text-decoration-none list-unstyled fs-3">
        <li className="p-2">
          <a href="#" className="text-decoration-none text-primary w-100">
            <FontAwesomeIcon className="me-2" icon={faInstagram} />
            Instagram
          </a>
        </li>   
  
        <li className="p-2">
          <a href="#" className="text-decoration-none text-primary w-100">
            <FontAwesomeIcon className="me-2" icon={faWhatsapp} />
            Whatsapp
          </a>
        </li>
  
        <li className="p-2">
          <a href="#" className="text-decoration-none text-primary w-100">
            <FontAwesomeIcon className="me-2" icon={faGoogle} />
            Email
          </a>
        </li>
      </ul>
      
    </section>

    <style jsx> {`

        body{
            background-color: var(--secondary-color);
        }
    
    `} </style>
  </div>
   
  }

export default Contato