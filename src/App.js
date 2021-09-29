import Botao from "./components/botao"
import Header from "./components/header"
import { Route, Link , Switch} from "react-router-dom"
import Aula from "./pages/aula"
import Principal from "./pages/principal"
import Cadastro from "./pages/cadastro"
import Contato from "./pages/contato"
import Login from "./pages/login"
import ListaAula from "./pages/lista-aula"

function App (){
  return (
    <>
    <Header />
    
      <Switch>
      
      <Route path="/lista-aula" component={ListaAula}/>
      <Route path="/login" component={Login}/>
      <Route path="/contato" component={Contato}/>
      <Route path="/aula" component={Aula}/>
      <Route path="/cadastro" component={Cadastro}/>
      <Route path="/" component={Principal}/>
      
      </Switch>
    </>
  )
}
export default App