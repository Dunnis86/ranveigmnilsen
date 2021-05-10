import Link from 'next/link';
import styled from 'styled-components';
import Button from '@/components/Button.js';
import Layout from '@/components/Layout.js';
import Container from '@/components/Container.js';

const P = styled.p`
    margin-bottom: 2rem;
`;

const Div = styled.div`
    a {
        color: white;
    }
`;

export default function Contact (href) {
    return (
        <Layout>
            <Container>
                <h2>Kontakt</h2>
                <P>Takk! Beskjeden din er mottatt.</P>
                <Div><Button type='submit'><Link href="/"><a>Hjem</a></Link></Button></Div>        
            </Container>
        </Layout>
    )
}