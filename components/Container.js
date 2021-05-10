import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 80%;
  max-width: 1400px;
`;

const Main = ({ children }) => (
  <Container>
      {children}
  </Container>
);

export default Main;