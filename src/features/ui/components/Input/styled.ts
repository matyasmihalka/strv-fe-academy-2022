import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

const padding = 'padding: 0.6rem 0;'

export const LabelText = styled.span`
  /* padding? */
  ${padding}

  display: block;
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  color: ${colors.text.formLabel};
  transition: 0.4s transform;
  transform-origin: 0 50%;
`

export const StyledInput = styled.input`
  border: none;
  /* padding */
  ${padding}
  margin-bottom: 1rem;
  /* reset styles */
  display: block;
  width: 100%;
  outline: none;
  border-bottom: 1px solid ${colors.text.formLabel};
  transition: border-bottom-color 0.2s;

  &:focus {
    border-bottom-color: ${colors.accent.primary};
  }

  &::placeholder {
    opacity: 0;
  }

  &:focus + ${LabelText}, &:not(:placeholder-shown) + ${LabelText} {
    transform: translateY(-2rem) scale(0.8);
  }
`

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  padding-top: 2.5rem;
`

export const InputWrapper = styled.div`
  /* width: 80%; */
  /* flex-basis: 500px; */
  width: 100%;
`

export const ToggleButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 0;
  border: none;
  background-color: transparent;
`
