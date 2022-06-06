import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'

import {
  Article,
  AttendeeCount,
  Author,
  Container,
  Description,
  StyledActions,
  StyledAttendeeIcon,
} from './styled'

import { ViewType } from '../../types'

type Props = {
  view: ViewType
}

export const EventItem: FC<Props> = ({ view }) => (
  <Article view={view}>
    {view === ViewType.GRID ? (
      <>
        <time>April 4, 2017 - 2:17PM</time>
        <h3>How to get angry</h3>
        <Author>Tom Watts</Author>
        <Description>I will show you how to get angry in a second</Description>
        <StyledActions>
          <AttendeeCount>
            <StyledAttendeeIcon /> 9 of 31
          </AttendeeCount>
          <Button type="button" size="small" accent="primary">
            EDIT
          </Button>
        </StyledActions>
      </>
    ) : (
      <>
        <h3>How to get angry</h3>
        <Description>I will show you how to get angry in a second</Description>
        <Author>Tom Watts</Author>
        <Container>
          <time>April 4, 2017 - 2:17PM</time>
          <span>9 of 31</span>
        </Container>
        <Button type="button" size="small" accent="primary">
          EDIT
        </Button>
      </>
    )}
  </Article>
)
