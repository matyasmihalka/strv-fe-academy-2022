import type { Story, Meta } from '@storybook/react/types-6-0'

import { createUser } from '~/features/events/types.fixtures'

import { AccountInfo } from '..'
import type { Props } from '..'

export default {
  title: 'UI/Account info',
  component: AccountInfo,
} as Meta

const Template: Story<Props> = (args) => {
  return <AccountInfo {...args} />
}

export const Default = Template.bind({})
Default.args = {
  user: createUser(),
}
