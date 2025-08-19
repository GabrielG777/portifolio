import TopoFixo from './components/TopoFixo';
import Projetos from './sections/Projetos';
import Servicos from './sections/Servicos';
import Sobre from './sections/Sobre';

export default function App() {
  return (
    <div className="bg-[#333D29] text-white">
      <TopoFixo />
      <main className="pt-24">
        <Sobre />
        <Projetos/>
        <Servicos/>        
      </main>
    </div>
  );
}
