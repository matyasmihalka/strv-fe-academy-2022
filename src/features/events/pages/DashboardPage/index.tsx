import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { CreateFAB } from '~/features/events/components/EventsList/parts/CreateFAB'
import { Layout } from '~/features/ui/components/Layout'

export const DashboardPage: NextPage = () => (
  <Layout>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateFAB />
    </section>
  </Layout>
)
