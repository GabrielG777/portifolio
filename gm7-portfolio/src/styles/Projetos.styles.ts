import styled, { } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #C2C5AA;

  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: flex-start;

  /* Para garantir alinhamento interno */
  box-sizing: border-box;
`;


export const Titulo = styled.h2`
  color: #333D29;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  
`;

// ContainerWrapper: "row" com espaçamento igual dos lados
export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  max-width: 1400px;
  padding: 2rem;
  box-sizing: border-box;
`;

// Container: largura fixa
export const Container = styled.div`
  background-color: #656D4A;
  border-radius: 0.75rem;
  color: white;
  padding: 1rem;
  height: 724px;

  flex: 1 1 300px;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;










