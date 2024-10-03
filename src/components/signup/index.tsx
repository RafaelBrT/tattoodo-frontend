'use client'
import { useForm } from "react-hook-form";
import { MdOutlinePerson, MdLockOutline, MdOutlineMail } from "react-icons/md";

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
      <p onClick={() => changeSignupActive(false)}>Já tem uma conta? <span>Faça login.</span></p>

      <SignUpForm>
        <InputSeparator>
          <label htmlFor="fullname">Nome Completo</label>
          <Input
            id="fullname"
            type="text"
            leftIcon={<MdOutlinePerson />}
            placeholder="Digite seu nome completo"
            {...register('fullname')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            leftIcon={<MdOutlineMail />}
            placeholder="Digite seu e-mail"
            {...register('email')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type="password"
            leftIcon={<MdLockOutline />}
            placeholder="Digite sua senha"
            {...register('password')}
          />
        </InputSeparator>
        <PasswordForgotten>
          <p>Checkbox</p>
          <p><span>Esqueçeu a senha?</span></p>
        </PasswordForgotten>
      </SignUpForm>
      <Button text="Cadastrar" />
    </SignUpWrapper>
  )
}

export default SignUp