import styled from 'styled-components';
import Image from 'next/image';

const Img = styled(Image)`
    transform: scale(1);
    transition: all 1s;

    @media all and (min-width: 577px) {
    &:hover {
        opacity: .7;
        transform: scale(1.05)
        }
    }
`;

export default Img;