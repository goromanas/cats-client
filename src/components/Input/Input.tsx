import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

const checkboxStyles = css`
  cursor: pointer;
  & {
    cursor: pointer;
    border: 4px solid blue;
    color: green;
  }
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Prefix = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.input<{ prefix?: string }>`
  border-radius: 4px;
  padding: ${({ prefix }) => (prefix ? '4px 6px 4px 44px' : '4px 6px')};
  border: none;
  position: relative;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.roseBud};
  }

  ${({ type }) => type === 'checkbox' && checkboxStyles};
`

export const InputElement: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ prefix, ...rest }) => (
  <InputWrapper>
    {prefix && <Prefix>{prefix}</Prefix>}
    <InputContainer {...rest} prefix={prefix} />
  </InputWrapper>
)

export const Input = styled(InputElement)``
