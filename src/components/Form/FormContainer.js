import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  display: flex;
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
      <FormContainer>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            Message
            <input
              type="text"
              name="message"
              value={values.message}
              onChange={e => handleChange(e)}
            />
          </label>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Form
