import React from "react";
import "./style.css";


export default function Infos(props) {
    return(
        <div>
            <span className="container-info">
                <h1 className="info-titulo">{props.titulo}</h1>
                <p className="info-conteudo">{props.conteudo}</p>
            </span>
        </div>
    );
}