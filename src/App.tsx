import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from "./containers/ListaDeTarefas"
import EstiloGlobal, { Container } from './styles"

function App() {
  return (
    <div className="App">
      <>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </>
    </div>
  )
}

export default App
