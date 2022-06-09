import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { HeadIcon } from './parts/HeadIcon'
import { Container, Description, Title } from './styled'

type Props = {
  title: string
  description: string
}

export const ErrorPageLayout: FC<Props> = ({ title, description }) => (
  <LayoutExternal>
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button type="button" onClick={() => alert('TODO')}>
        Refresh
      </Button>
    </Container>
    <HeadIcon />
  </LayoutExternal>
)
