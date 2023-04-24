import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const CheckboxContainer = styled.input`
  cursor: pointer;
  display: grid;
  width: 15px;
  height: 15px;
  border: 1px solid ${({ theme }) => theme.colors.geyser};
  appearance: none;
  font-size: 10px;
  transition: 120ms all ease-in-out;
  place-content: center;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.salmon};
  }
`

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => <CheckboxContainer {...props} type='checkbox' />
