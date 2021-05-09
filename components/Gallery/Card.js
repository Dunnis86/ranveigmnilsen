import styled from 'styled-components'

const Card = styled.div`
    justify-items: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transition: color 0.15s ease, border-color 0.15s ease;
    @media(max-width: 320px){
        box-shadow: 0; 
        transition: 0;
  }
`;

export default Card;