import React from "react";
import "./style.css";
import Homem  from "./image/homem.png"

export default function Card() {
    return(
        <div>
            <div className="Card-pessoas">
                <img src={Homem} alr="Cliente Homem" title="Marco Vilela cliente"></img>
            </div>
        </div>
    );
}