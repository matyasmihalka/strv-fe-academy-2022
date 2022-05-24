import type { NextPage } from 'next'

import { DefaultLayout } from '~/features/ui/components/Layout/parts/DefaultLayout'

export const DashboardPage: NextPage = () => (
  <DefaultLayout>
    <h1>This is Dashboard Page!</h1>
  </DefaultLayout>
)
