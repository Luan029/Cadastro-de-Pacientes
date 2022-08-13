import React from "react"
import "./Cabecalho.css"


export default props => (
    <React.Fragment>
        <header>
            <div className="top1">
                <h1>Hospital</h1>
            </div>
            <div className="menuFlutuante">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Notícias</a></li>
                    <li><a href="#">Cadastro de Consulta</a></li>
                    <li><a href="#">Consultas Marcadas</a></li>
                </ul>
            </div>
            <div className="top2">
                <p>Um novo meio de marcar sua consulta sem precisar sair de casa.</p>
            </div>
        </header>

    </React.Fragment>
)