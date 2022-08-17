import React from "react"
import "./Noticias.css"


const Noticias =()=> (
    <React.Fragment>
        <h2>Noticias</h2>
        <section className="noticias">
            
            <div>
                <img src="https://conteudo.imguol.com.br/c/entretenimento/6d/2022/05/28/variola-de-macaco-1653750898458_v2_4x3.jpg" alt="variola" />
                <h4>
                    <a href="https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2022/08/08/variola-dos-macacos-novo-balanco-agosto.htm" target="_blank" rel="noopener noreferrer">20 Estados e o DF têm casos da varíola dos macacos: Número sobe para 2.131</a>
                </h4>
            </div>
            <div>
                <img src="https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2022/08/caozinho-alegria-hospital-para-3.jpg&w=1920&q=75" alt="depressao" />
                <h4>
                    <a href="https://www.sonoticiaboa.com.br/2022/08/16/alecrim-cao-espanta-medo-depressao-criancas-internadas" target="_blank" rel="noopener noreferrer">Alecrim, o cão que espanta medo e depressão de crianças internadas</a>
                </h4>
            </div>
            <div>
                <img src="https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2022/08/cancer-pancreas-capa.jpg&w=1080&q=75" alt="cancer" />
                <h4>
                    <a href="https://www.sonoticiaboa.com.br/2022/08/02/cancer-de-pancreas-cientistas-brasileiros-proteina-freia-doenca" target="_blank" rel="noopener noreferrer">Câncer de pâncreas: cientistas brasileiros descobrem como frear a doença</a>
                </h4>
            </div>
            <div>
                <img src="https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2022/07/chocolate-pressao-coracao.jpg&w=1080&q=75" alt="chocolate" />
                <h4>
                    <a href="https://www.sonoticiaboa.com.br/2022/07/30/chocolate-reduz-pressao-arterial-protege-coracao" target="_blank" rel="noopener noreferrer">Chocolate reduz a pressão arterial e protege o coração, mostra estudo</a>
                </h4>
            </div>
        </section>
    </React.Fragment>
)
export default Noticias