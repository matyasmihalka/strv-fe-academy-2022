import styled, { css } from 'styled-components'

import { ViewType } from '~/features/events/components/EventsList/types'
import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import { AttendeeIcon } from '../../../AttendeeIcon'

export const Description = styled.p`
  ${typography.paragraph.normal}
  /* padding: 2.5rem 0 4rem 0; */
  margin: 2.5rem 0 4rem 0;
  width: 90%;
  box-sizing: content-box;
  height: 5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`

export const Author = styled.p`
  color: ${colors.text.author};
  margin-top: -0.3rem;
`
export const StyledActions = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 3rem;
`
export const StyledAttendeeIcon = styled(AttendeeIcon)`
  margin-right: 0.5rem;
  margin-bottom: -0.3rem;
`

export const Container = styled.div``

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
    cursor: pointer;
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

        /* white-space: normal; */
        white-space: wrap;
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
          display: block;
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
      }
    `}
`
