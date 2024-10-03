import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #3c3939, #403e3e, #444243, #484748, #4c4c4c);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterPage = styled.div`
  width: 80%;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  background: none;
  height: fit-content;
  background-color: #fff;
  position: relative;
  height: 80vh;
`

export const LoginBackground = styled.div`
  display: none;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  transition: transform 0.6s ease-in-out;
  .overlay {
    background-image: url('/images/login-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }
  &.active {
    transform: translateX(-100%);
  }

  @media screen and (min-width: 992px) {
    display: block;
  }
`