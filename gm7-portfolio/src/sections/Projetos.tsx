import { Section, Titulo, Container, ContainerWrapper } from '../styles/Projetos.styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Projetos() {
  return (
    <Section id="projetos" color="#C2C5AA">
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <Titulo>
          Projetos acadêmicos e profissionais
        </Titulo>

        <ContainerWrapper>
          <Container>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <button onClick={() => alert('Voltar acadêmico')}>
                <FaArrowLeft size={24} />
              </button>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p>Acadêmicos</p>
              </div>
              <button onClick={() => alert('Avançar acadêmico')}>
                <FaArrowRight size={24} />
              </button>
            </div>
          </Container>

          <Container>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <button onClick={() => alert('Voltar profissional')}>
                <FaArrowLeft size={24} />
              </button>
              <div style={{ flex: 1, textAlign: 'center' }}>

                <p>Profissionais</p>
              </div>
              <button onClick={() => alert('Voltar profissional')}>
                <FaArrowRight size={24} />
              </button>
            </div>
          </Container>
        </ContainerWrapper>
      </div>
    </Section>
  );
}

