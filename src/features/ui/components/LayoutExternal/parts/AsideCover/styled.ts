import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { font, typography } from '~/features/ui/theme/typography'
// import typography and fonts

export const Aside = styled.aside`
  display: none;

  ${mq.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    max-width: 48rem;
    min-width: 30rem;
    color: ${colors.text.inverted};
    text-align: center;
    background-color: ${colors.background.dark};
  }
`

export const Quote = styled.q`
  display: block;
  margin: 2rem, 0;
  text-align: center;
  /* add font family */
  font-family: ${font.quotes};
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  line-height: 1.166;
`

export const FigCaption = styled.figcaption`
  ${typography.paragraph.small}
`

export const Figure = styled.figure`
  margin-bottom: 5rem;
  text-align: center;
  width: 70%;
`

export const HR = styled.hr`
  background-color: ${colors.accent.primary};
  height: 0.2rem;
  border: none;
  width: 1rem;
  margin: 1.5rem auto 1rem auto;
  /* text-align: center; */
`
