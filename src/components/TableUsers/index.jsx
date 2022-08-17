import React from "react"

import TableUser from "../TableUser"
import "./index.css"

const TableUsers = ({list}) => {
    return(
        <section className="Tabela">
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
                        {list.map((user, index) => (

                            <TableUser key={index} name={user.name} numero={user.numero} sintomas={user.sintomas} hora={user.hora} />
                        ))}
                    </tbody>
                </table>
            </section>
    )
}
export default TableUsers