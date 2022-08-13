import React,{useState} from "react"
import "./Cadastro.css"
import { ReactDOM } from "react"

function cadastro(){
    const[nome, setNome] = useState('')
    const[contato, setContato] = useState('')
    const[sintomas, setSintomas] = useState('')
    const[hora, setHora] = useState('')

    function imprimir(e){
        console.log(e)
    }
    return (
        <section className="CadastroFichas">
            <h2>Cadastro de Consultas</h2>
            <div className="formulario">
                <form >
                    Nome:
                    <div>
                        <input type="text" placeholder="Insira seu nome" className="marcar" value={nome} onChange={(e)=>setNome=(e.target.value)} />
                    </div>
                    Contato:
                    <div>
                        <input type="number" placeholder="Insira seu contato" className="marcar" value={contato} onChange={(e)=>setContato=(e.target.value)}/>
                    </div>
                    Sintomas:
                    <div>
                        <input type="text" placeholder="Descreva o que você esta sentindo" className="marcar" value={sintomas} onChange={(e)=>setSintomas=(e.target.value)}/>
                    </div>
                    Hora da consulta:
                    <div>
                        <select name="hora_consulta" value={hora} onChange={(e)=>setHora=(e.target.value)} >
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
    )
}
export default cadastro