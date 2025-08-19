import styled from "styled-components";

export const Section2 = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #333D29;

  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: flex-start;

  /* Para garantir alinhamento interno */
  box-sizing: border-box;
`;

export const Title = styled.section`

  color: #C2C5AA;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;


  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

`;