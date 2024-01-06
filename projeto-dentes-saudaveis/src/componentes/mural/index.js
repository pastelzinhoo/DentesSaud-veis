import React from 'react';
import "./style.css";
import { FaTooth } from "react-icons/fa";

export default function Mural() {
    return(
        <div className="Container">
            <div>
                <h2>OS MELHORES APARELHOS DENTÁRIOS!</h2>
                <p className="Textinho">Confira abaixo todas as especialidades odontológicas que temos a sua disposição!</p>
            </div>
            <div className="Container-Especialidades">
                <span className="Especialidades"><FaTooth /></span>
                <p>TEXTO</p> {/* Inserir Props */}
            </div>
        </div>
    );
}