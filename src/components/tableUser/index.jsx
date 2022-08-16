import React from "react"
const TableUser =({name, numero, sintomas, hora}) =>{
    return(
        <tr>
            <td>{name} </td>
            <td>{numero}</td>
            <td>{sintomas} </td>
            <td>{hora} </td>
        </tr>
    )
}
export default TableUser