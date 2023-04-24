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
  border: 5px solid ${({ theme }) => theme.colors.salmon};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${loaderAnimation} 1s linear infinite;
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`

export const Loader = () => (
  <LoaderWrapper>
    <LoaderContainer>
      {Array(2)
        .fill('')
        .map((_, index) => (
          <div key={`${index}-loader`} />
        ))}
    </LoaderContainer>
  </LoaderWrapper>
)
