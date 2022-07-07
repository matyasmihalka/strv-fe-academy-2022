import styled, { css } from 'styled-components'

import { ViewType } from '~/features/events/components/EventsList/types'
import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import { AttendeeIcon } from './parts/AttendeeIcon'

export const Description = styled.p`
  ${typography.paragraph.normal}
  padding: 2.5rem 0 4rem 0;
  width: 90%;
  box-sizing: content-box;
  height: 5rem;
`

export const Author = styled.p`
  color: ${colors.text.author};
  margin-top: -0.3rem;
`
export const StyledActions = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const StyledAttendeeIcon = styled(AttendeeIcon)`
  margin-right: 0.5rem;
  margin-bottom: -0.3rem;
`

export const Container = styled.div``

export const StyledButton = styled(Button)`
  padding: 0.3em 0em 0.2em;
  width: 10rem;
`

export const Article = styled.article<{ view: ViewType }>`
  background-color: ${colors.background.light};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1.6rem;
  display: block;

  time {
    color: ${colors.text.silent};
    margin-bottom: 1.5rem;
    display: block;
  }

  h3 {
    ${typography.heading.h3}
    color: ${colors.text.base};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ${mq.medium} {
    padding: 3.2rem;
  }

  ${(props) =>
    props.view === ViewType.LIST &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;

      time {
        margin: 0;
      }

      h3 {
        ${typography.heading.h4}
        width: 100%;
      }

      ${Description} {
        padding: 0;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: -0.3rem;
        margin-bottom: 0.8rem;
      }

      ${Author} {
        display: none;
      }

      /* Media query - MEDIUM */
      ${mq.medium} {
        padding: 3rem;

        /* flex-wrap: nowrap; */
        display: grid;
        grid-template-columns: 4fr 4fr 2fr 5fr 10rem;
        grid-column-gap: 3rem;

        ${Author} {
          margin: 0;
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        ${Description} {
          margin-top: 0;
          margin-bottom: 0;
          white-space: nowrap;
        }

        ${Container} {
          display: grid;
          grid-template-columns: 50% 1fr;
          grid-column-gap: 3rem;

          time {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        ${StyledButton} {
          justify-self: end;
        }
      }
    `}
`
