import styled, { css } from 'styled-components'

import { colors } from '../../theme/colors'
import { typography } from '../../theme/typography'
import { StyleReset } from '../StyleReset'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive'
}

export const Button = styled.button<ButtonProps>`
  --text-color: ${colors.text.inverted};
  --background-color: ${colors.background.dark};
  --background-color-hover: ${colors.background.dark};

  /* StyleReset missing */
  ${StyleReset}
  ${typography.label.large}
  padding: 0.8em 5.4em;
  color: var(--text-color);
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: var(--background-color);

  &:disabled {
    --text-color: ${colors.text.inactive};
    --background-color: ${colors.background.inactive};
  }

  &:not(:disabled) {
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--background-color-hover);
    }
  }

  ${(props) =>
    props.accent === 'primary' &&
    css`
      --background-color: ${colors.accent.primary};
      --background-color-hover: ${colors.accent.primaryHover};
    `}

  ${(props) =>
    props.accent === 'destructive' &&
    css`
      --background-color: ${colors.accent.destructive};
      --background-color-hover: ${colors.accent.destructiveHover};
    `}

    ${(props) =>
    props.size === 'small' &&
    css`
      ${typography.label.medium}
      padding: 0.3em 2em 0.2em;
    `}
`
