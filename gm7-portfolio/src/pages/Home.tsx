import Sobre from '../sections/Sobre'
import Projetos from '../sections/Projetos'
import Produtos from '../sections/Produtos'

export default function Home() {
  return (
    <div className="pt-20 space-y-24">
      <section id="sobre">
        <Sobre />
      </section>

      <section id="projetos">
        <Projetos />
      </section>

      <section id="produtos">
        <Produtos />
      </section>
    </div>
  )
}
