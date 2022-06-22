import type { FC, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { useState } from 'react'

import { TogglePasswordIcon } from './parts/TogglePasswordIcon'
import {
  ErrorMessage,
  InputWrapper,
  LabelText,
  StyledInput,
  StyledLabel,
  ToggleButton,
} from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string | null
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, type, error, ...rest }, ref) => {
    const [isPasswordShown, togglePassword] = useState(false)
    const inputType = isPasswordShown ? 'text' : type

    return (
      <InputWrapper>
        <StyledLabel hasError={Boolean(error)}>
          <StyledInput
            placeholder={label}
            type={inputType}
            ref={ref}
            {...rest}
          />
          <LabelText>{label}</LabelText>
          {!!error && <ErrorMessage>{error}</ErrorMessage>}
          {type === 'password' && (
            <ToggleButton
              type="button"
              aria-label="Display password text"
              onClick={() => togglePassword((prevState) => !prevState)}
            >
              <TogglePasswordIcon />
            </ToggleButton>
          )}
        </StyledLabel>
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'
