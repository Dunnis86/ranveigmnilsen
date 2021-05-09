import styled from 'styled-components'

const Container = styled.div`
  max-width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;

  
  @media(max-width: 576px){
    max-width: 100%;
    padding: 0;
  }
  @media(max-width: 320px){
        padding: 0;
  }
`;

const Main = ({ children }) => (
  <Container>
      {children}
  </Container>
);

export default Main;