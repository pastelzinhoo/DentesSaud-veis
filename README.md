# 🦷 Dentes Saudáveis

## 🟢 Status: Finalizado 📅 Publicado: 09/01/2024 🧍‍♂️ Programador: muuhlirø

####  Esse foi meu primeiro projeto utilizando React, um site para uma empresa fictícia chamada "Dentes Saudáveis" o projeto teve inspiração no curso da DevMedia onde conclui minha certificação em JavaScript e React, não vejo a hora de produzir mais sites e apreender mais sobre a tecnologia.

## Confira como o site ficou!
![2024-01-09-15-10-10-ezgif com-optimize](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/4ba5b6dd-4b66-42bb-bc51-f28c27c6a73b)
---
---

# 👨‍💻 Componente App.js
#### Este é o componente principal da aplicação.


#### Confira como ele foi feito abaixo: 

```jsx
import './App.css';                                 // Importando estilização do Componente Principal App.js
import Menu from './componentes/menu';              // Importando Componente Menu que é responsavel pelo menu
import Mural from './componentes/mural';            // Importando Componente Mural que é responsavel pelas informações abaixo do menu
import Aparelho from "./image/dente.png";           // Importando a Imagem do Aparelho dental
import Homem from "./image/homem/homem.png";        // Importando a Imagem de um Homem que fica na sessão Card
import Mulher from "./image/mulher/mulher.png";     // Importando a Imagem de uma Mulher que fica na sessão Card
import Idoso from "./image/idoso/idoso.png"         // Importando a Imagem de um Idoso que fica na Sessão Card
import Infos from './componentes/infos';            // Importando o Componente Infos que são as informações ecuriosaidades sobre o uso de aparelho abaixo da Imagem Aparelho  
import Card from './componentes/card';              // Importando o Componente Card que contem Imagens e Feedback dos cliente
import Mapa from './componentes/mapa';              // Importando Componente Mapa Responsavel pela parte do Mapa no final do Site
import Footer from './componentes/footer';          // Importando Componente Footer que fica embaixo do mapa

function App() {                                    
  return (
    <main>
      <Menu />                                      {/* Componente Menu sendo chamado */}       
      <Mural />                                     {/* Componente Mural sendo chamado */}   
      <div className="Container-One-Conteudo">
          <img src={Aparelho} alt="Aparelho Dentário" title="Aparelho Dentário"></img>  {/* Imagem do Aparelho sendo chamada por parâmetro props */}   
      </div>
      <div className="Infos-Centraliza">            {/* Componente Infos sendo chamado e sendo passado valores diferentes por props, reaproveitando o componente mais de uma vez */}   
          <Infos titulo="Alinhar os dentes" conteudo="Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração. " />
          <Infos titulo="Melhorar a dicção" conteudo="Muitas pessoas não conseguem nem usar fio dental devido a posição da sua dentição. Contudo, a correção possibilita o cuidado com sua saúde bucal de forma bem mais ampla." />
          <Infos titulo="Corrigir os dentes" conteudo="Usar aparelho nos dentes ajuda a ter uma dentição alinhada e sem espaço entre os dentes, algo que incomoda muita gente são os espaços indesejados que ficam entre os dentes" />
      </div>
      <h1 className="titulo-card">VEJA O QUE NOSSOS CLIENTES ESTÃO FALANDO...</h1>
      <div className="Card-Centraliza">             {/* Componente Card sendo chamado e sendo passado valores diferentes por props, reaproveitando o componente mais de uma vez */}
          <Card imagem={Homem} nome="Rogerio Vilela" feedback="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado." />
          <Card imagem={Mulher} nome="Eliana Pereira" feedback="A dentes Saudáveis mudou meu sorriso com o clareamento que eles fizeram, todos perguntam onde eu fiz de tão bom que o trabalho ficou!" />
          <Card imagem={Idoso} nome="Valter Freitas" feedback="A dentes Saudáveis esta cuidando da minha saúde bucal a mais de 6 anos, eles fizeram minha primeira dentadura e não troco eles por nada! " />
      </div>
      <div> 
          <Mapa />                                  {/* Componente Mapa sendo chamado */}    
      </div>
      <Footer />                                    {/* Componente Footer sendo chamado */}    
    </main>
  );
}

export default App;

```

---


# 👨‍💻 Componente Mural
#### Vamos conhecer as partes deste site começando pela parte do Mural onde ficam algumas informações e a autopropaganda da empresa. 
![image](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/8c5e53b3-66df-4588-ba84-4d5d45891c27)


#### Confira como ele foi feito abaixo: 

```jsx
import React from 'react';    // Importando React para aplicação
import "./style.css";         // Importando arquivo de responsavél pela estilização do componente Mural
import Texto from './props';  //Importando o componente Texto para poder ser aplicado no site

export default function Mural() {
    return(
        <div className="Container-One">
            <h2>OS MELHORES APARELHOS DENTÁRIOS!</h2>
            <p className="Textinho">Confira abaixo todas as especialidades odontológicas que temos a sua disposição!</p>
            <div className="Container-two">
                <div className="Coluna-One">
                    <Texto texto="Pré-Avaliação" />          {/* Chamando o Componente Texto e passando valores props para eles através de texto= */}  
                    <Texto texto="Aparelhos Dentários" />   {/* Chamando o Componente Texto e passando valores props para eles através de  */}  
                </div>
                <div className="Coluna-Two">
                    <Texto texto="Raio-X digital" />        {/* Chamando o Componente Texto e passando valores props para eles através de  */}  
                    <Texto texto="Clareamento Dental" />    {/* Chamando o Componente Texto e passando valores props para eles através de  */}  
                </div>
                </div>
        </div>
    );
}
```
```jsx
import React from "react";    // Importando React para a aplicação
import { FaTooth } from "react-icons/fa";       // Importando biblioteca React Icons para utilizar o Icone de dente
import "./props.css"


export default function Texto(props) {           // Componente Texto que recebe como parametro props
    return (
        <div className="container">
            <span><FaTooth /></span>                        {/* Componente importado da biblioteca React Icons que tras um icone de dente para dentro da aplicação  */}  
            <p className="Props-">{props.texto}</p>         {/* Recebe um valor props  */}  
        </div>
    );
}
```

#### Um detalhe significativo dentro da aplicação web é que, se o usuário passar o mouse sobre as informações fornecidas, isso fará com que a aplicação tenha uma interação de mudança de cor automaticamente. O usuário entenderá que ali é um elemento no qual ele pode clicar para saber mais sobre o serviço que a empresa oferece.



---


# 👨‍💻 Componente Info | Imagens e Informações Aparelho Dental
#### A imagem foi inserida sem utilizar nenhum tipo de componente para possibilitar fácil manipulação sobre ela e torná-la responsiva sem a necessidade de mexer na DIV inteira. No entanto, para as informações abaixo, foi criado um componente chamado **'Infos'**, que pode ser observado abaixo da imagem. Isso permite fácil manipulação sobre essas informações sem ter que mexer na DIV inteira.
![image](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/dde2efb5-c18d-4dd7-b8c3-8085f76b429d)


#### Confira como ele foi feito abaixo: 

```jsx
import React from "react";      // Importando React para o componente
import "./style.css";           // Importando o arquivo CSS responsável pela estilização


export default function Infos(props) {                                      // Parametro Props sendo passado
    return(
        <div>
            <span className="container-info">
                <h1 className="info-titulo">{props.titulo}</h1>             {/* Designando onde os valores props irão entrar */}  
                <p className="info-conteudo">{props.conteudo}</p>           {/* Designando onde os valores props irão entrar */}  
            </span>
        </div>
    );
}
```



# 👨‍💻 Componente Card
#### Bem neste componente temos apenas o código dentro dos card como imagens, nomes e o feedback dos clientes o título acima foi inserido direto no Componente Principal **(App.js)**.
![image](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/15b36c8e-a45c-4a91-8c62-53778203bd58)


#### Confira como ele foi feito abaixo: 

```jsx
import React from "react";                  // Importando React pro componente
import "./style.css";                      // Importando o arquivo Css para responsavel estilização

export default function Card(props) {      // Parametro Props sendo passado
    return(
        <div> 
            <div className="Card-Pessoas">
                <img src={props.imagem} alt="Cliente" className="Imagem-Card"></img>         {/* Designando onde os valores props irão entrar */}  
                <h3 className="Titulo-Card">{props.nome}</h3>                                {/* Designando onde os valores props irão entrar */}  
                <p className="Feedback-Card">{props.feedback}</p>                            {/* Designando onde os valores props irão entrar */}  
            </div>
        </div>
    );
}
```

#### Aqui nos passamos os parâmetro props para que possamos reaproveitar o componente Card mais de uma vez como é feito na aplicação final, os valores props foram passado no Componente Principal v(App.js)**.

# 👨‍💻 Componente Mapa
#### Este componente era pra conter uma vAPI do google** para podemos introduzir o mapa no site, tivemos diversos erros para trabalhar com esta API e acredito que só não tenha funcionado por conta que eu não tenho cartão de credito cadastrado dentro do Google Console Cloud, um programador mais experiente estava me explicando que isso é normal quando trabalhamos com o Console Cloud da Google. 
![image](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/8d561b57-c104-44b8-9028-b4cb7f2fec1f)

####Confira como foi feito abaixo:

```jsx
  import React from "react";     // Importando React para a aplicação
import "./style.css";           // Importando o arquivo CSS responsavél pela estilização



export default function Mapa() {         // Componente Mapa e seu conteudo abaixo

    return (
        <div>
            <h1 className="titulo-map">ONDE ESTAMOS LOCALIZADOS?</h1>
            <p className="texto-map">Rua Saulo de Castro Bicudo, 22 - Esplanada Dos Barreiros, São Vicente - SP. CEP: 11340-030</p>
            <div>
                <iframe className="map"       /* Tentamos usar uma API para colocar o mapa mas deu muito errado por isso foi feito o mapa através de Iframe */
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.980819081902!2d-46.39856509999999!3d-23.9611184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c8029e547af%3A0xd6a81de49cf250ed!2sR.%20Saulo%20de%20Castro%20Bicudo%20-%20Beira%20Mar%2C%20S%C3%A3o%20Vicente%20-%20SP%2C%2011340-030!5e0!3m2!1spt-PT!2sbr!4v1704736812598!5m2!1spt-PT!2sbr"
                    width="100%"          
                    height="600px"  
                    style={{border: 0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">   
                </iframe>
            </div>
        </div>
    );
}

```
#### No final das contas decidimos trabalhar com Iframe que não esta tão na moda mas resolve o problema muito bem, como não vamos pedir senha nem nada do tipo não tem problema útilizarmos o Iframe para nos salvar nesta situação.

# 👨‍💻 Componente Footer
#### O componente Footer é responsável pela parte inferior do site, que contém as informações de direitos autorais reservados. É uma parte bastante simples de ser feita.
![image](https://github.com/pastelzinhoo/DentesSaudaveis/assets/152567365/e072e745-0431-4330-b1d2-fcd9ef310846)

#### Confira abaixo como foi feito:



```jsx
import React from "react";     // Importando React para o Componente

export default function Footer() {
    return(
        <div className="Container-Footer">
            <p className="texto-footer"> &copy; COPYRIGHT 2023 | Consultória Dentes Saudáveis </p>          {/* Apenas o conteudo do Componente Footer */}  
        </div>
    );
}
```

---

# 👨‍💻 Estilização das barras Laterais 
#### Eu gosto sempre de trazer coisas que chamem a atenção e se tornem diferentes dentro de uma aplicação. Sendo assim, costumo estilizar as barras laterais utilizando CSS. Confira o código abaixo.

####Confira abaixo como foi feito:
```css
*::-webkit-scrollbar {                   /* Estilizando o fundo do Scroll do site */
  background-color: transparent;
  width: 0.625rem;
  height: 3.125rem;
      
  }
  
  *::-webkit-scrollbar-thumb {
      background-color: rgb(82, 82, 172);;    /* Estilizando a barra de scroll do site */
      border: 0.125rem black solid;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: rgb(255, 196, 0);      /* Aplicando uma estilização com uma condição, apenas quando passar o mouse em cima ira mudar de cor */
  }

```

#### O código CSS foi feito direto do Componente Principal **(App.js)** sendo assim App.css onde esta localizado nossa estilização que foi vista agora.





