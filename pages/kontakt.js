import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button.js';
import Layout from '@/components/Layout.js';
import Container from '@/components/Container.js';

const Grid = styled.div`
  padding: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto; 
  justify-content: center;
`;

const H2 = styled.h2`
  font-weight: lighter;
  font-size: 2rem;
  letter-spacing: -0.03em;
  color: black;
  justify-content: center;
  margin-bottom: auto;
  @media(max-width: 576px){
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

const P = styled.p`
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
`;

const Form = styled.form`
    top: 6rem;
    height: 25rem;
    width: 40%;
    z-index: 5;
    justify-self: left;
    @media(max-width: 576px) {
        width: 100%;
    }
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: auto;
    &:focus {
        outline: none;
  }
`;

const TextArea = styled.textarea`
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: auto;
    &:focus {
        outline: none;
  }
`;


export default function SectionContact () {
    const [allValues, setAllValues] = useState({
        name: '',
        email: '',
        message: ''
     });
    const handleInputChange = (event) => {
        setAllValues({...allValues, [event.target.name]: event.target.value})
    };

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...allValues })
      }
      fetch("/", options)
      .then(function (response) {
        window.location.assign('/kontakt-takk/');
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    return (
      <Layout>
        <Container>
        <Grid>
            <H2>Kontakskjema</H2>
            <P>Benytt skjemaet dersom du har spørsmål eller er interessert i noen av bildene.</P>
            <Form name='contact' data-netlify="true" onSubmit={handleSubmit}>
                <label htmlFor="contact-form-name">Navn</label>
                <Input type="text" name="name" value={allValues.name} onChange={handleInputChange}/>
                <label htmlFor="contant-form-email">Epost</label>
                <Input type="email" name="email" value={allValues.email} onChange={handleInputChange}/>
                <label htmlFor="contant-form-message">Beskjed</label>
                <TextArea name="message" value={allValues.message} onChange={handleInputChange} />
                <Button type="submit">Send</Button>
            </Form>
        </Grid>
        </Container>
      </Layout>
    );
}
