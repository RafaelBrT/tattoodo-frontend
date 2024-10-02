import { forwardRef, ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { MdOutlinePerson } from "react-icons/md";

import { CustomInput, CustomInputWrapper, LeftIcon, RightIcon } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <CustomInputWrapper>
        {leftIcon && (
          <LeftIcon>
            {leftIcon}
          </LeftIcon>
        )}
        <CustomInput
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <RightIcon>
            {rightIcon}
          </RightIcon>
        )}
      </CustomInputWrapper>
    );
  }
);

export default Input;