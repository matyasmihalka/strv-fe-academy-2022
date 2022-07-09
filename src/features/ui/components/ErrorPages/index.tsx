import type { NextPage } from 'next'
import Link from 'next/link'
import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { HeadIcon } from './parts/HeadIcon'
import { Container, Description, Title } from './styled'

type Props = {
  title: string
  description: string
  redirectTo: string
  linkLabel: string
}

export const ErrorPageLayout: FC<Props> = ({
  title,
  description,
  redirectTo,
  linkLabel,
}) => (
  <LayoutExternal>
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={redirectTo} passHref>
        <Button as="a">{linkLabel}</Button>
      </Link>
      {/* <Button type="button" onClick={() => alert('TODO')}>
        Refresh
      </Button> */}
    </Container>
    <HeadIcon />
  </LayoutExternal>
)

const NotFoundPage: NextPage = () => (
  <ErrorPageLayout
    title="404 Error - page not found"
    description=" Seems like Darth Vader just hits our website and drops it down. Please
    press the refresh button and everything should be fine again."
    redirectTo="/"
    linkLabel="Go to home page"
  />
)

const GeneralErrorPage: NextPage = () => (
  <ErrorPageLayout
    title="Something went wrong"
    description="Seems like Darth Vader just hits our website and drops it down.
    Please press the refresh button and everything should be fine again."
    redirectTo="" // empty to reload
    linkLabel="Refresh"
  />
)

export { NotFoundPage, GeneralErrorPage }
