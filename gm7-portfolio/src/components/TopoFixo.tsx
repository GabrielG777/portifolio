import { FaBars } from 'react-icons/fa';
import foto from '../assets/img-perfil.png';
import {
  Container,
  Profile,
  Photo,
  Name,
  Subtitle,
  MenuButton,
} from '../styles/TopoFixo.module.ts';

const TopoFixo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Photo src={foto} alt="Gabriel Gonçalves" />
        <div>
          <Name>Gabriel Gonçalves</Name>
          <Subtitle>Dev mobile/web</Subtitle>
        </div>
      </Profile>
      <MenuButton>
        <Name>MENU</Name>
        <FaBars />
      </MenuButton>
    </Container>
  );
};

export default TopoFixo;
