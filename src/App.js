import logo from './logo.svg';
import './App.css';
import SalvarUsuarios from './components/salvarUsuarios';
import TabelaResultado from './components/tabelaUsuarios';
import { useState } from "react"
import Cabecalho from './header/Cabecalho';

import Noticias from './main/Noticias';
  function App() {
    const[list, setList] = useState([])
  function handleSaveUser(user){
    let newList = {...list}
    newList.push(user)
    setList(newList)
  }
  return (
    <React.Fragment>
    <Cabecalho/>
    <Noticias/>
    <SalvarUsuarios onAddUser={handleSaveUser} />
    <TabelaResultado list={list}/>
  </React.Fragment>
  );
}

export default App;
