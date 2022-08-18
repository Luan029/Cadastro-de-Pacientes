import React from "react"
import { useState } from "react"
import "./index.css"

const SaveUser = ({onAddUser}) =>{
    function handleSaveUser(e){
        e.preventDefault()
        const informaces ={
            name, numero, sintomas, hora
        }
        console.log(informaces)
        onAddUser(informaces)

   }
   const [name, setName] = useState("")
   const [numero, setNumero] = useState("")
   const [sintomas, setSintomas] = useState("")
   const [hora, setHora] = useState("")
    return (
        <React.Fragment>
            <section className="CadastroFichas" id="fiichass">
                <h2>Cadastro de Consultas </h2>
                <div className="formulario">
                    <form onSubmit={handleSaveUser}>
                        Nome:
                        <div>
                            <input
                                type="text"
                                placeholder="Insira seu nome"
                                className="marcar"
                                id="name"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        Contato:
                        <div>
                            <input
                                type="number"
                                placeholder="Insira seu contato"
                                className="marcar"
                                id="numero"
                                onChange={(e) => setNumero(e.target.value)} />
                        </div>
                        Sintomas:
                        <div>
                            <input
                                type="text"
                                placeholder="Descreva o que você esta sentindo"
                                className="marcar"
                                id="sintomass"
                                onChange={(e) => setSintomas(e.target.value)} />
                        </div>
                        Hora da consulta:
                        <div>
                            <select name="hora_consulta" onChange={(e) => setHora(e.target.value)}>
                                <option >Selecionar</option>
                                <option value="7:00">7:00</option>
                                <option value="7:30">7:30</option>
                                <option value="8:00">8:00</option>
                                <option value="8:30">8:30</option>
                                <option value="9:00">9:00</option>
                                <option value="9:30">9:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value="Marcar consulta!" className="enviar" />
                        </div>
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
} 
export default SaveUser