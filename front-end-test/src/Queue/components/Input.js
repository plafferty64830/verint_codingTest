import styled from "styled-components";

export const Form = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
`
export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`