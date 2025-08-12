import styled from 'styled-components';

export const Hero = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: row; // Changed to row for columns
  align-items: center;
  justify-content: center;
  background: url('https://placehold.co/1920x1080') no-repeat center center;
  background-size: cover;
`;

export const HeroColumn = styled.div`
  flex: 1;
  padding: 2rem;
  display: block;
  flex-direction: column;
  justify-content: center;
`;
