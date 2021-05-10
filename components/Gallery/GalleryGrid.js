import styled from 'styled-components';

const GalleryGrid = styled.div`
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: minmax(20rem, 1fr);
    grid-gap: 1rem;
`;

export default GalleryGrid;
