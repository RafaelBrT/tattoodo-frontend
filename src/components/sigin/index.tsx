'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

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
  const [showPassword, setShowPassword] = useState(false)

  const renderPasswordIcon = () => {
    return showPassword ?
      <IoMdEyeOff onClick={() => setShowPassword(!showPassword)} />
      : <IoMdEye onClick={() => setShowPassword(!showPassword)} />
  }

  return (
    <SignInWrapper className={signupActive ? 'active' : ''}>
      <Logo />
      <p>Sign in</p>
      <p onClick={() => changeSignupActive(true)}>Não tem uma conta? <span>Faça uma agora.</span></p>

      <SignInForm>
        <InputSeparator>
          <label htmlFor="login">Login</label>
          <Input
            id="login"
            type="text"
            leftIcon={<MdOutlineMail />}
            placeholder="Digite seu e-mail"
            {...register('login')}
          />
        </InputSeparator>
        <InputSeparator>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            leftIcon={<MdLockOutline />}
            rightIcon={renderPasswordIcon()}
            placeholder="Digite sua senha"
            {...register('password')}
          />
        </InputSeparator>
        <PasswordForgotten>
          <p>Checkbox</p>
          <p><span>Esqueçeu a senha?</span></p>
        </PasswordForgotten>
      </SignInForm>
      <Button text="Entrar" />
    </SignInWrapper>
  )
}

export default SignIn