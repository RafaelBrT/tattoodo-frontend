import { ReactNode } from "react";
import styled from "styled-components";

export const CustomInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const CustomInput = styled.input`
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  box-sizing: border-box;
`

export const LeftIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`

export const RightIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`