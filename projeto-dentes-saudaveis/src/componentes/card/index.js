import React from "react";
import "./style.css";

export default function Card(props) {
    return(
        <div> 
            <div className="Card-Pessoas">
                <img src={props.imagem} alt="Cliente" className="Imagem-Card"></img>
                <h3 className="Titulo-Card">{props.nome}</h3>
                <p className="Feedback-Card">{props.feedback}</p>
            </div>
        </div>
    );
}