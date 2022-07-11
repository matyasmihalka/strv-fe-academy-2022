import type { Story, Meta } from '@storybook/react/types-6-0'

import { createUser } from '~/features/events/types.fixtures'

import { HeaderComponent } from '..'
import type { ComponentProps, ContainerProps } from '..'

export default {
  title: 'UI/ Header',
  component: HeaderComponent,
} as Meta

const Template: Story<ComponentProps & ContainerProps> = (args) => {
  return <HeaderComponent {...args} />
}

export const Default = Template.bind({})
Default.args = {
  user: undefined,
  isExternal: false,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: createUser(),
  isExternal: false,
}

export const CustomComp = Template.bind({})
CustomComp.args = {
  user: createUser(),
  isExternal: false,
  leftActionComponent: <div>Close</div>,
  centerActionComponent: <div>Go back</div>,
}
