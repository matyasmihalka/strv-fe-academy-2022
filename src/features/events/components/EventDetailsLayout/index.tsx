import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

export const EventDetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mq.medium} {
    display: grid;
    gap: 1.5rem;
    padding: 0;
    padding: 3rem, 0, 8rem;
    list-style: none;
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
`
