import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'

import {
  Article,
  Author,
  Description,
  H3,
  StyledActions,
  StyledAttendeeIcon,
  Time,
} from './styled'

export const EventItem: FC = () => (
  <Article>
    <Time>April 4, 2017 - 2:17PM</Time>
    <H3>How to get angry</H3>
    <Author>Tom Watts</Author>
    <Description>I will show you how to get angry in a second</Description>
    <StyledActions>
      <span>
        <StyledAttendeeIcon /> 9 of 31
      </span>
      <Button type="button" size="small" accent="primary">
        EDIT
      </Button>
    </StyledActions>
  </Article>
)
