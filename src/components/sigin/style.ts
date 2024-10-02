import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem;
  background-color: #fff;
  position: absolute;
  transition: all 0.6s ease-in-out;

  left: 0;
  z-index: 2;
  &.active {
    transform: translateX(100%);
    opacity: 0;
    z-index: 1;
  }
`

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`

export const InputSeparator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const PasswordForgotten = styled.div`
  display: flex;
  justify-content: space-between;
`