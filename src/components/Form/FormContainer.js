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
  box-shadow: 11px 11px 11px 0px rgba(0, 0, 0, 0.1),
    -11px -11px 11px 0px rgba(77, 77, 77, 0.1);
  border: 1px solid var(--clr-bg-1);
  border-radius: 25px;
  background-color: var(--clr-bg-1);
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 1.25rem;
`

const Input = styled.input`
  margin-top: 0.25rem;
  border: 2px solid transparent;
  border-radius: 25px;
  outline: none;
  padding: 0.25rem;
  &:focus {
    border-color: var(--clr-primary-5);
  }
`

const TextArea = styled.textarea`
  margin-top: 0.25rem;
  border: 2px solid transparent;
  border-radius: 25px;
  outline: none;
  padding: 0.25rem;
  &:focus {
    border-color: var(--clr-primary-5);
  }
`

const Button = styled.button`
  cursor: pointer;
  width: 8rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  background: var(--clr-bg-1);
  border: 2px solid var(--clr-bg-1);
  color: var(--clr-primary-5);
  border-radius: 25px;
  box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.1),
    -7px -7px 11px 0px rgba(77, 77, 77, 0.1);
  &:focus {
    outline: none;
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

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <h2>Get In Touch</h2>
      <StyledForm onSubmit={e => handleSubmit(e)}>
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
