'use client'
import { useForm } from "react-hook-form";

import Logo from "../logo"
import Button from "../button";
import Input from "../input";

import { InputSeparator, SignUpForm, SignUpWrapper, PasswordForgotten } from "./style"

interface SignUpProps {
  changeSignupActive: (isSignupActive: boolean) => void
  signupActive: boolean
}

const SignUp = ({ changeSignupActive, signupActive }: SignUpProps) => {
  const { register } = useForm();

  return (
    <SignUpWrapper className={signupActive ? 'active' : ''}>
      <Logo />
      <p>Sign in</p>
      <p onClick={() => changeSignupActive(false)}>Já tem uma conta? Faça login.</p>

      <SignUpForm>
        <InputSeparator>
          <label htmlFor="fullname">Nome Completo</label>
          <Input
            id="fullname"
            type="text"
            {...register('fullname')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            {...register('email')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            {...register('password')}
          />
        </InputSeparator>
        <PasswordForgotten>
          <p>Checkbox</p>
          <p>Esqueçeu a senha?</p>
        </PasswordForgotten>
      </SignUpForm>
      <Button text="Cadastrar" />
    </SignUpWrapper>
  )
}

export default SignUp