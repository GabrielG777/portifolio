import TopoFixo from './components/TopoFixo';
import Sobre from './sections/Sobre';

export default function App() {
  return (
    <div className="bg-[#333D29] text-white">
      <TopoFixo />
      <main className="pt-24">
        <Sobre />
      </main>
    </div>
  );
}
