import type { NextPage } from 'next'

import { HeadIcon } from './parts/HeadIcon'
import { Container, Description, Title } from './styled'

import { Button } from '../Button'
import { LayoutExternal } from '../LayoutExternal'

export const NotFoundPage: NextPage = () => (
  <LayoutExternal>
    <Container>
      <Title>404 Error - page not found</Title>
      <Description>
        Seems like Darth Vader just hits our website and drops it down. Please
        press the refresh button and everything should be fine again.
      </Description>
      <Button type="button" onClick={() => alert('TODO')}>
        Refresh
      </Button>
    </Container>
    <HeadIcon />
  </LayoutExternal>
)
