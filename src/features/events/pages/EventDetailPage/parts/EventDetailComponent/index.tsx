import type { FC } from 'react'

import { EventItemContainer } from '~/features/events/components/EventItemContainer'
import { ViewType } from '~/features/events/components/EventsList/types'
import type { ArticleType } from '~/features/events/types'
import { ContainerEventPages } from '~/features/ui/components/ContainerEventPages'

import { StyledH1 } from './styled'

export type Props = {
  event: ArticleType
}

export const EventDetailComponent: FC<Props> = ({ event }) => {
  return (
    <ContainerEventPages>
      <StyledH1>Detail Event: #{event.id}</StyledH1>
      <EventItemContainer view={ViewType.GRID} event={event} />
    </ContainerEventPages>
  )
}
