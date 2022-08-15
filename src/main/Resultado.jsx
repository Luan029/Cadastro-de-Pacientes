
import React from "react"

import "./Resultado.css"

const ImprimirTabela = props =>{
    return(
        <section>
            <h2>Consultas Marcadas</h2>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Contato</td>
                        <td>Sintomas</td>
                        <td>Hora da consulta</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luan Alves de Paiva</td>
                        <td>83 99999999</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae minima beatae voluptatum consectetur quidem perspiciatis unde jdsaldjsdjasldj</td>
                        <td>11:30</td>
                    </tr>
                </tbody>
            </table>
        </section>

    )
}
export default ImprimirTabela