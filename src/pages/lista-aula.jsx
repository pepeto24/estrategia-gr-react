
function ListaAula  (props){
    return( 
        <>

        <div className="container">
            <h1 className="text-center my-4">Aulas disponíveis</h1>
            <h2 className="text-center my-4"> Módulo I</h2>
            <section className="card-deck row">
                <div className="col">
                    <div className="card mb-3">
                        <div className="card-header text-center font-weight-bold">
                            <span className="modulo-name">
                            Aula I
                            </span>
                        </div>
                        <div className="card-body p-0">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/v0qA3aHt1Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3">
                        <div className="card-header text-center font-weight-bold">
                            <span className="modulo-name">
                            Aula II
                            </span>
                        </div>
                        <div className="card-body p-0">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/v0qA3aHt1Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3">
                        <div className="card-header text-center font-weight-bold">
                            <span className="modulo-name">
                            Aula III
                            </span>
                        </div>
                        <div className="card-body p-0">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/v0qA3aHt1Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3">
                        <div className="card-header text-center font-weight-bold">
                            <span className="modulo-name">
                            Aula IV
                            </span>
                        </div>
                        <div className="card-body p-0">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/v0qA3aHt1Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </section>

        </div>

        </>
        )
    

   
  }
  export default ListaAula