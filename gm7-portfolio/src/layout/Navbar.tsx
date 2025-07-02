import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50 p-4 flex gap-6 justify-center text-white shadow-md">
      {isHome ? (
        <>
          <a href="#sobre" className="hover:text-orange-400">Sobre</a>
          <a href="#projetos" className="hover:text-orange-400">Projetos</a>
          <a href="#produtos" className="hover:text-orange-400">Serviços</a>
        </>
      ) : (
        <>
          <a href="/" className="hover:text-orange-400">Início</a>
          <a href="/sobre" className="hover:text-orange-400">Sobre</a>
          <a href="/projetos" className="hover:text-orange-400">Projetos</a>
        </>
      )}
    </nav>
  )
}
