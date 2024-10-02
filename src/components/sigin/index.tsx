'use client'
import { useForm } from "react-hook-form";
import { MdOutlinePerson, MdLockOutline } from "react-icons/md";

import Logo from "../logo"
import Button from "../button";
import Input from "../input";

import { InputSeparator, SignInForm, SignInWrapper, PasswordForgotten } from "./style"

interface SignInProps {
  changeSignupActive: (isSignupActive: boolean) => void
  signupActive: boolean
}

const SignIn = ({ changeSignupActive, signupActive }: SignInProps) => {
  const { register } = useForm();

  return (
    <SignInWrapper className={signupActive ? 'active' : ''}>
      <Logo />
      <p>Sign in</p>
      <p onClick={() => changeSignupActive(true)}>Não tem uma conta? Faça uma agora.</p>

      <SignInForm>
        <InputSeparator>
          <label htmlFor="login">Login</label>
          <Input
            id="login"
            type="text"
            leftIcon={<MdOutlinePerson />}
            {...register('login')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            leftIcon={<MdLockOutline />}
            {...register('login')}
          />
        </InputSeparator>
        <PasswordForgotten>
          <p>Checkbox</p>
          <p>Esqueçeu a senha?</p>
        </PasswordForgotten>
      </SignInForm>
      <Button text="Entrar" />
    </SignInWrapper>
  )
}

export default SignIn