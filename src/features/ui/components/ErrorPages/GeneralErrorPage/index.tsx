import type { NextPage } from 'next'

import { ErrorPageLayout } from '../parts/ErrorPageLayout'

export const GeneralErrorPage: NextPage = () => (
  <ErrorPageLayout
    title="Something went wrong"
    description="Seems like Darth Vader just hits our website and drops it down.
  Please press the refresh button and everything should be fine again.  "
  />
)
