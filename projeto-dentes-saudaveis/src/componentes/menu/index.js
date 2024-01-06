import React from "react";
import { FaTooth } from "react-icons/fa";
import "./style.css";

export default function Menu () {
    return(
        <div className="ContainerMenu">
            <div className="Dente">
                <FaTooth />
            </div>
            <div>
                <h1>Dentes Saudáveis</h1>
            </div>    
        </div>
    );
}