import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: FC<Props> = ({ label, name, type, ...rest }) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <input id={name} name={name} type={inputType} {...rest} />

      {type === 'password' && (
        <button
          type="button"
          aria-label="Display password text"
          onClick={() => togglePassword((prevState) => !prevState)}
        >
          👁
        </button>
      )}
    </div>
  )
}
