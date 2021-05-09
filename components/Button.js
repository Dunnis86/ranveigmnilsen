import styled from 'styled-components'

const Btn = styled.button`
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
    background: black;
    color: #fff;
    border: none;
    border-radius: 40px;
    outline {
        background-color: transparent;
        border: 1px black solid;
    }
    &:hover {
    transform: scale(0.97);
    }
`;

const Button = ({children}) => (
        <Btn type="submit">{children}</Btn>
)

export default Button;