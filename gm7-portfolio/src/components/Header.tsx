export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">Gabriel Dev</h1>
      <nav className="space-x-6">
        <a href="#sobre" className="hover:text-orange-400 transition">Sobre</a>
        <a href="#projetos" className="hover:text-orange-400 transition">Projetos</a>
        <a href="#contato" className="hover:text-orange-400 transition">Contato</a>
      </nav>
    </div>
  );
}
