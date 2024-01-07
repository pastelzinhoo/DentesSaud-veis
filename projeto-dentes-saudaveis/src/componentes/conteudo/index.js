import React from "react";
import Aparelho from "./dente.png"
import "./style.css"
import Infos from "./infos";

export default function Conteudo() {
    return (
    <div>
        <div className="Container-One-Conteudo">
            <img src={Aparelho} alt="Aparelho Dentário" title="Aparelho Dentário"></img>
        </div>
        <div className="Container-Two-Conteudo-flex">
            <Infos titulo="Alinhar os dentes" conteudo="Dentes desalinhados causam o problemas nos dentes e podem afetar a digestão dos alimentos e a respiração" />
            <Infos titulo="Melhorar a dicção e a higiene dentária" conteudo="Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla." />
            <Infos tituo="Corrigir espaço entre os dentes" conteudo="Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos." />
        </div>
        <div className="Container=Tree-Conteudo">
            <></>
        </div>
    </div>  
    );
}