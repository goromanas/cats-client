import { Input } from 'components/Input'
import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: 30px;
  align-items: center;

  ${Input} {
    width: 100%;
    height: 40px;
  }
`

export const Fieldset = styled.fieldset`
  display: flex;
  font-size: 12px;
  padding: 10px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.geyser};

  label {
    cursor: pointer;
  }

  legend {
    padding: 0 4px;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 5px;
`
