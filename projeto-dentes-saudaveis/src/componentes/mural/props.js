import React from "react";
import { FaTooth } from "react-icons/fa";
import "./props.css"


export default function Texto(props) {
    return (
        <div className="container">
            <span><FaTooth /></span>
            <p className="Props-">{props.texto}</p>
        </div>
    );
}