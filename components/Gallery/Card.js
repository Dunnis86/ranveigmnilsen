import styled from 'styled-components';
import { fadeIn } from '../StyledComp/fadeIn';

const Card = styled.div`
    animation: ${fadeIn} 1s ease-out;
    position: relative;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 10px 7px rgba(0, 0, 0, 0.3);
    transition: color 0.15s ease, border-color 0.15s ease;
    @media(max-width: 576px) {
      padding: 0.1rem;
      margin: 1rem;
      
    }

    @media(max-width: 320px){
      padding: 0.1rem; 
        
    }
    div { p {
        position: absolute;
        bottom: 10px;
        left: 20px;
        color: white;
        z-index: 5;
      }
    }
`;

export default Card;