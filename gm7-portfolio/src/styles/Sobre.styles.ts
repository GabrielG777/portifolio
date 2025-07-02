import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333d29;
  color: white;
  padding: 1rem;
`

export const Card = styled.div`
  max-width: 40rem; /* equivalente a max-w-xl */
  padding: 1.5rem;
  background-color: #2d2f33; /* um cinza escuro próximo do gray-800 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
`

export const Title = styled.h1`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  color: #f97316; /* laranja (tailwind orange-500) */
  margin-bottom: 1rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`
