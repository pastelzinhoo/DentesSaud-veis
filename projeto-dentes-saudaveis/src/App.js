import './App.css';
import Menu from './componentes/menu';
import Mural from './componentes/mural';
import { RiWhatsappFill } from "react-icons/ri";
import Conteudo from './componentes/conteudo';

function App() {
  return (
    <main>
      <Menu />
      <Mural />
      <span className="WhatsApp"><RiWhatsappFill /></span>
      <Conteudo />
    </main>
  );
}

export default App;
