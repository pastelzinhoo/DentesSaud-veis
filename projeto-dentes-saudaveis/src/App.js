import './App.css';
import Menu from './componentes/menu';
import Mural from './componentes/mural';
import { RiWhatsappFill } from "react-icons/ri";
import Aparelho from "./image/dente.png";
import Homem from "./image/homem/homem.png";
import Mulher from "./image/mulher/mulher.png";
import Idoso from "./image/idoso/idoso.png"
import Infos from './componentes/infos';
import Card from './componentes/card';
import Mapa from './componentes/mapa';

function App() {
  return (
    <main>
      <Menu />
      <Mural />
      <span className="WhatsApp"><RiWhatsappFill /></span>
      <div className="Container-One-Conteudo">
          <img src={Aparelho} alt="Aparelho Dentário" title="Aparelho Dentário"></img>
      </div>
      <div className="Infos-Centraliza">
          <Infos titulo="Alinhar os dentes" conteudo="Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração. " />
          <Infos titulo="Melhorar a dicção" conteudo="Muitas pessoas não conseguem nem usar fio dental devido a posição da sua dentição. Contudo, a correção possibilita o cuidado com sua saúde bucal de forma bem mais ampla." />
          <Infos titulo="Corrigir os dentes" conteudo="Usar aparelho nos dentes ajuda a ter uma dentição alinhada e sem espaço entre os dentes, algo que incomoda muita gente são os espaços indesejados que ficam entre os dentes" />
      </div>
      <h1 className="titulo-card">VEJA O QUE NOSSOS CLIENTES ESTÃO FALANDO...</h1>
      <div className="Card-Centraliza"> 
          <Card imagem={Homem} nome="Rogerio Vilela" feedback="Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado." />
          <Card imagem={Mulher} nome="Eliana Pereira" feedback="A dentes Saudáveis mudou meu sorriso com o clareamento que eles fizeram, todos perguntam onde eu fiz de tão bom que o trabalho ficou!" />
          <Card imagem={Idoso} nome="Valter Freitas" feedback="A dentes Saudáveis esta cuidando da minha saúde bucal a mais de 6 anos, eles fizeram minha primeira dentadura e não troco eles por nada! " />
      </div>
      <div>
          <Mapa />
      </div>
    </main>
  );
}

export default App;
