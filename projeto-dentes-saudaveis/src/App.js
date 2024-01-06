import './App.css';
import Menu from './componentes/menu';
import Mural from './componentes/mural';
import { RiWhatsappFill } from "react-icons/ri";

function App() {
  return (
    <main>
      <Menu />
      <Mural />
      <span className="WhatsApp"><RiWhatsappFill /></span>
      
    </main>
  );
}

export default App;
