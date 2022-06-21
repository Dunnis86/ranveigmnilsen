import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button.js';
import Layout from '@/components/Layout.js';
import Container from '@/components/Container.js';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Grid = styled.div`
  padding: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
`;

const Wrapper = styled.div`
  justify-items: center;
  @media(max-width: 576px){
      margin: 0 2rem;
    }
`;

const H2 = styled.h2`
  font-weight: lighter;
  font-size: 2rem;
  letter-spacing: -0.03em;
  color: black;
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
    width: 500px;
    z-index: 5;
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


const Kontakt = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
    return (
      <Layout title={'Ranveig M Nilsen - Kontakt'} description={'Underside med kontaktskjema'}>
        <Container>
        <Grid>
            <Wrapper>
              <H2>Contact Form</H2>
              <P>Use the contact form in case you have any questions or are interested in some of the paintings.</P>
            <Form onSubmit={handleOnSubmit}>  
                <label htmlFor="name">Navn</label>
                <Input 
                id="name" 
                type="name" 
                onChange={handleOnChange} 
                required 
                value={inputs.name} />
                <label htmlFor="email">Email</label>
                <Input
                id="email" 
                type="email"
                onChange={handleOnChange} 
                required
                value={inputs.email} />
                <label htmlFor="message">Message</label>
                <TextArea 
                id="message"
                onChange={handleOnChange} 
                value={inputs.message}  />
                <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
                />
                <Button type="submit" disabled={status.submitting}>
                  {!status.submitting
                    ? !status.submitted
                    ? 'Send'
                    : 'Sendt'
                    : 'Sender...'}
                </Button>
            </Form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
            </Wrapper>
        </Grid>
        </Container>
      </Layout>
    );
}

export default Kontakt;