import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import { TogglePasswordIcon } from './parts/TogglePasswordIcon'
import {
  InputWrapper,
  LabelText,
  StyledInput,
  StyledLabel,
  ToggleButton,
} from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input: FC<Props> = ({ label, name, type, error, ...rest }) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <InputWrapper>
      <StyledLabel key={error} hasError={Boolean(error)}>
        <StyledInput
          placeholder={label}
          name={name}
          type={inputType}
          {...rest}
        />
        <LabelText>{label}</LabelText>
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
      {/* eslint-disable-next-line react/forbid-dom-props */}
    </InputWrapper>
  )
}

Input.defaultProps = {
  error: '',
}
