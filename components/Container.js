import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1900px;
`;

const Main = ({ children }) => (
  <Container>
      {children}
  </Container>
);

export default Main;