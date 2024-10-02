import { CustomButton } from "./style"

interface ButtonProps {
  text: string
  disabled?: boolean
}

const Button = ({ text, disabled }: ButtonProps) => (
  <CustomButton disabled={disabled}>{text}</CustomButton>
)

export default Button