import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Section, Card, Title, Paragraph, ContactItem, IconLink, ButtonGroup, Button } from '../styles/Sobre.styles';


export default function Sobre() {
  return (
    <Section id="sobre">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 500, width: '100%' }}>
        <Card variant="primary" style={{ paddingBottom: '1rem' }}>
          <Title>Desenvolvedor<br />Mobile e Web<br />Full Stack</Title>
          <Paragraph>
            Nos últimos 3 anos, venho aprimorando meus conhecimentos em desenvolvimento de sistemas Mobile e Web. Atuei em projetos do início ao fim, do levantamento à publicação.
          </Paragraph>
        </Card>

        {/* Botões fora do card */}
        <ButtonGroup style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <Button href="#projetos">Ver Projetos</Button>
          <Button href="#sobre">Leia sobre mim</Button>
        </ButtonGroup>
      </div>


      <Card variant="secondary">
        <Title color="#333D29" size="45px">Redes sociais</Title>
        <ContactItem>
          <FaLinkedin />
          <IconLink href="https://www.linkedin.com/in/gabriel-gonçalves-mendonça" target="_blank">
            linkedin.com/in/gabriel-gonçalves-mendonça
          </IconLink>
        </ContactItem>

        <ContactItem>
          <FaGithub />
          <IconLink href="https://github.com/GabrielG777" target="_blank">
            GabrielG777
          </IconLink>
        </ContactItem>

        <ContactItem>
          <FaPhone />
          <span>(14) 99785-8866</span>
        </ContactItem>

        <ContactItem>
          <FaEnvelope />
          <span>gg405246@gmail.com</span>
        </ContactItem>
      </Card>
    </Section>
  );
}
