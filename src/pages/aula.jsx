function Aula (props){
    return <div className="d-flex flex-column flex-wrap align-items-center">
    <section className="bg-white video-aula">
      <h2 className="fs-3">AULA Nº 1</h2>

      <video width="320" height="240" controls>
        <source src="#" type="#"/>
      </video>
    </section>

    <section className="bg-white container mt-2 p-2 col-12">
      <div className="w-100 row">
        
        <div className="col-2">
          <img className="img-fluid" src="" alt=""/>
        </div>

        <div className="col-10">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Digite aqui suas dúvidas</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

      </div>
    </section>

    <style jsx> {`

        body{
            background-color: var(--secondary-color);
        }
    
    `} </style>

  </div>

         

  }
  export default Aula