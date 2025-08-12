import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  `

  export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
  `

  export const Subtitle = styled.h2`
  font-size: 1.7rem;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
  font-weight: 500;
  `

  export const Text = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 400;
  `

  export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;
  `
