import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 1rem;      /* top-4 */
  left: 1rem;     /* left-4 */
  right: 1rem;    /* right-4 */
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
//   background-color: rgba(0,0,0,0.5);
  padding: 0.75rem; /* p-3 */
  border-radius: 0.5rem; /* rounded-lg */
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* space-x-3 */
  color: white;
  line-height: 1.2;
`;

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
//   border: 2px solid white;
  object-fit: cover;

  @media (min-width: 640px) {
    width: 48px;
    height: 48px;
  }
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: white;
`;

export const MenuButton = styled.button`
  color: white;
  font-size: 1.25rem; /* text-xl */
  background: none;
  border: none;
  cursor: pointer;
`;
