import React from 'react';
import "./style.css";
import Texto from './props';

export default function Mural() {
    return(
        <div className="Container-One">
            <h2>OS MELHORES APARELHOS DENTÁRIOS!</h2>
            <p className="Textinho">Confira abaixo todas as especialidades odontológicas que temos a sua disposição!</p>
            <div className="Container-two">
                <div className="Coluna-One">
                    <Texto texto="Pré-Avaliação" />
                    <Texto texto="Raio-X digital" />
                </div>
                <div className="Coluna-Two">
                    <Texto texto="Aparelhos Dentários" />
                    <Texto texto="Clareamento Dental" />
                </div>
                </div>
        </div>
    );
}

// Comentar o Código todo cabaço...