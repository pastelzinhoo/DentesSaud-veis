import React from "react";
import "./infos.css";

export default function Infos(props) {
    return(
        <div className="Infos-box">
            <h1 className="Infos-box">{props.titulo}</h1>
            <p className="Infos-box">{props.conteudo}</p>
        </div>
    );
}