function Botao (props){
    return <button className={'btn btn-' + props.color}>
      {props.nome}

    </button>
  }
  export default Botao