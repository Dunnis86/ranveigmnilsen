import styled from 'styled-components';

const Icon = styled.button`
  position: relative;
  left: 2rem;
  width: 60px;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  @media(max-width: 576px) {
    height: 2.5rem;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 2.5rem;
  width: 60%;
  height: 4px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
  transition: all 0.3s linear;


  &::after, &::before {
    content: '';
    position: absolute;
    width: 40%;
    height: 4px;
    left: -4px;
    background-color: black;
    border-radius: 10px;
  }

  &::after {
    top: -4px;
    transform: rotate(-45deg);
  }

  &::before {
    top: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
    transform: rotate(45deg);
  }

  &:hover {
        opacity: .7;
  }
  
  &:active {
  opacity: 0;
  transform: translateX(-20px);
}
`;

const BackArrow = () => {
  return (
    <Icon>
      <Arrow/>
    </Icon>
  )
}

export default BackArrow;