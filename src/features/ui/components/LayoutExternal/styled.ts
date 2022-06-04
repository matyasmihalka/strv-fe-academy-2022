import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { font } from '~/features/ui/theme/typography'

export const Main = styled.main`
  display: flex;
  /* padding-top: 10rem; */
  /* font-family: ${font.quotes}; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${colors.background.light};
`
