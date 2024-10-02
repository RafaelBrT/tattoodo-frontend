'use client'

import SignIn from "@/components/sigin"
import SignUp from "@/components/signup"

import { CenterPage, LoginBackground, LoginPageWrapper } from "./style"
import { useCallback, useState } from "react"

const LoginPage = () => {
  const [signupActive, setSignupActive] = useState(false)

  const changeSignupActive = useCallback((isSignupActive: boolean) => {
    setSignupActive(isSignupActive)
  }, [])

  return (
    <LoginPageWrapper>
      <CenterPage>
        <SignIn
          changeSignupActive={changeSignupActive}
          signupActive={signupActive}
        />
        <SignUp
          changeSignupActive={changeSignupActive}
          signupActive={signupActive}
        />
        <LoginBackground className={signupActive ? 'active' : ''}>
          <div className="overlay"></div>
        </LoginBackground>
      </CenterPage>
    </LoginPageWrapper>
  )
}

export default LoginPage