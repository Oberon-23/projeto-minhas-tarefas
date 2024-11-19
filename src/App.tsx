import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'
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
