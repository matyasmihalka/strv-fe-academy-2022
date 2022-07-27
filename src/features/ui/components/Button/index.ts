import styled, { css } from 'styled-components'

import { colors } from '../../theme/colors'
import { typography } from '../../theme/typography'
import { StyleReset } from '../StyleReset'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive' | 'silent'
}

const accents = {
  // Default value.
  normal: null,

  primary: css`
    --background-color: ${colors.accent.primary};
    --background-color-hover: ${colors.accent.primaryHover};
  `,

  destructive: css`
    --background-color: ${colors.accent.destructive};
    --background-color-hover: ${colors.accent.destructiveHover};
  `,

  silent: css`
    --background-color: ${colors.background.inactive};
    --text-color: ${colors.text.inactive};
    --background-color-hover: ${colors.background.inactiveHover};
  `,
}

const sizes = {
  // Default value.
  medium: null,

  small: css`
    ${typography.label.medium}
    padding: 0.3em 2em 0.2em;
  `,
}

export const Button = styled.button<ButtonProps>`
  --text-color: ${colors.text.inverted};
  --background-color: ${colors.background.dark};
  --background-color-hover: ${colors.background.dark};

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

  ${({ accent = 'normal' }) => accents[accent] ?? null}
  ${({ size = 'medium' }) => sizes[size] ?? null}
`
