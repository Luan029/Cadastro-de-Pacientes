import React from 'react';
import './App.css';
import SaveUser from './components/SaveUser';
import TableUsers from './components/TableUsers';
import { useState } from "react"
import Cabecalho from './header/Cabecalho';
import Noticias from './components/news/Noticias';
import Rodape from './footer/Footer';

function App() {
  const[list, setList] = useState([])
  function handleSaveUser(user){
    let newList = [...list]
    newList.push(user)
    setList(newList)
  }
  return (
    <React.Fragment>
    <Cabecalho/>
    <Noticias/>
    <SaveUser onAddUser={handleSaveUser} />
    <TableUsers list={list}/>
    <Rodape/>
  </React.Fragment>
  );
}

export default App;
