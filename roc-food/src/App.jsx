import './App.css';
import OutraLista from './components/OutraLista';



function App() {

  const meusItens = ["React", "Vue", "Angular", "Next"]

  return (
    <div className="App"> 
      <h1>Renderizaçao de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
