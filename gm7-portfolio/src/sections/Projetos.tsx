import { Section, Titulo, Container, ContainerWrapper } from '../styles/Projetos.styles';

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
            <p>Container 1</p>
          </Container>
          <Container>
            <p>Container 2</p>
          </Container>
        </ContainerWrapper>
      </div>
    </Section>
  );
}

