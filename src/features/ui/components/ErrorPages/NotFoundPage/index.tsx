import type { NextPage } from 'next'

import { ErrorPageLayout } from '../parts/ErrorPageLayout'

export const NotFoundPage: NextPage = () => (
  <ErrorPageLayout
    title="404 Error - page not found"
    description=" Seems like Darth Vader just hits our website and drops it down. Please
  press the refresh button and everything should be fine again."
  />
)
