import './App.css';
import Menu from './componentes/menu';
import Mural from './componentes/mural';
import { RiWhatsappFill } from "react-icons/ri";
import Aparelho from "./image/dente.png"
import Infos from './componentes/infos';
import Card from './componentes/card';

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
      <Card />
    </main>
  );
}

export default App;
