import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.25),
    -6px -6px 6px 0px rgba(77, 77, 77, 0.1);
  border: 1px solid var(--clr-bg-1);
  border-radius: 25px;
  background-color: var(--clr-bg-1);
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`

const Input = styled.input`
  margin-top: 0.25rem;
  border: 2px solid transparent;
  border-radius: 50px;
  background: var(--clr-bg-1);
  color: var(--clr-grey-10);
  outline: none;
  padding: 0.6rem 1rem;
  box-shadow: -3px -3px 4px 0 rgba(77, 77, 77, 0.1) inset,
    2px 2px 3px 0 rgba(0, 0, 0, 0.25) inset;
  &:focus {
    box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 0.25),
      -12px -12px 16px 0px rgba(77, 77, 77, 0.1);
  }
`

const TextArea = styled.textarea`
  margin-top: 0.25rem;
  border: 2px solid transparent;
  border-radius: 25px;
  background: var(--clr-bg-1);
  color: var(--clr-grey-10);
  outline: none;
  padding: 0.6rem 1rem;
  box-shadow: -3px -3px 4px 0 rgba(77, 77, 77, 0.1) inset,
    2px 2px 3px 0 rgba(0, 0, 0, 0.25) inset;
  &:focus {
    box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 0.25),
      -12px -12px 16px 0px rgba(77, 77, 77, 0.1);
  }
`

const Button = styled.button`
  cursor: pointer;
  width: 9rem;
  letter-spacing: var(--spacing);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  background: var(--clr-bg-1);
  border: 2px solid var(--clr-bg-1);
  color: var(--clr-primary-5);
  border-radius: 50px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25),
    -3px -3px 4px 0px rgba(77, 77, 77, 0.1);
  transition: all 0.2s ease-out;
  &:hover {
    color: var(--clr-primary-8);
  }
  &:focus {
    outline: none;
    box-shadow: -3px -3px 4px 0 rgba(77, 77, 77, 0.1) inset,
      2px 2px 3px 0 rgba(0, 0, 0, 0.25) inset;
  }
`

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  }
  const [values, setValues] = useState(initialState)

  const handleChange = e => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <Container>
      <h2>Get In Touch</h2>
      <StyledForm
        action="https://formspree.io/f/xjvpapwd"
        method="POST"
      >
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Lionel Messi"
            value={values.name}
            onChange={e => handleChange(e)}
          />
        </Label>
        <Label>
          Email
          <Input
            type="text"
            name="email"
            placeholder="messi@barcelona.com"
            value={values.email}
            onChange={e => handleChange(e)}
          />
        </Label>
        <Label>
          Message
          <TextArea
            type="text"
            name="message"
            placeholder="Let's get in touch..."
            value={values.message}
            onChange={e => handleChange(e)}
          />
        </Label>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Container>
  )
}

export default Form
