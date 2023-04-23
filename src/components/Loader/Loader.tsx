import styled, { keyframes } from 'styled-components'

const loaderAnimation = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const LoaderContainer = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fd79a8;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${loaderAnimation} 1s linear infinite;
`

export const Loader = () => (
  <>
    <LoaderContainer>
      <div></div>
      <div></div>
    </LoaderContainer>
  </>
)
