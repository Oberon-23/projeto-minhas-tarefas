import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
