import styled from 'styled-components'
import Navigation from './Navigation'

const Container = styled.div`
  margin: 0 0 2rem 0;
  padding: 0 2rem;
  @media(max-width: 576px){
        display: block;
        margin-bottom: 1rem;
        padding: 0
        } 
`; 


export default function Layout({children}) {
    return (
        <div>
            <Navigation/>
            <Container>
                {children}
            </Container>
        </div>
    )
}

