// Sobre.styles.ts
import styled, { keyframes } from 'styled-components';
// import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh; // Altura mínima de uma tela inteira
  background-color: #333D29;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;




// Define a animação
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
// Card com animação

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1.5rem;
  
  border-radius: 0.75rem;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: start;

  animation: ${fadeInUp} 1.5s ease forwards;

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 1rem;
  }
`;


export const Title = styled.h1<{ color?: string; size?: string }>`
  font-size: ${({ size }) => size || '4.6875rem'};
  font-weight: 600;
  letter-spacing: 10px;

  color: ${({ color }) => color || '#B6AD90'};
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: ${({ size }) =>
      size ? `calc(${size} / 2)` : '2.5rem'}; 
  }
`;

export const Paragraph = styled.p<{ color?: string }>`
  font-size: 24px;
  color: ${({ color }) => color || '#A4AC86'};
  line-height: 1.5;
  // letter-spacing: 3px;


  @media (max-width: 800px) {
    font-size: 18px;
  }
`;


export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #333D29;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
    overflow-wrap: break-word;

`;

export const IconLink = styled.a`
  color: inherit;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #B6AD90;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.75rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;



export const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #B6AD90;
  color: #333D29;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #A4AC86;
  }
`;

