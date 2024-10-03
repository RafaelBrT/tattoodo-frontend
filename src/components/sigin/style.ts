import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 80%;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &.active {
    transform: translateX(100%);
    opacity: 0;
    z-index: 1;
  }
  p > span {
    color: #31A2C6;
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
    top: unset;
    left: unset;
    transform: unset;
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