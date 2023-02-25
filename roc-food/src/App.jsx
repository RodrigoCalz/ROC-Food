import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import HelloWorld from './components/HelloWorld';


function App() {

  return (
    <div className="App"> 
      <HelloWorld />
      <Evento numero="1"/>
      <Form />
    </div>
  );
}

export default App;
