import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { CreateButton } from '..'
import type { Props } from '../index'

export default {
  title: 'Events/Create Button',
  component: CreateButton,
} as Meta

const Template: Story<Props> = () => {
  return <CreateButton />
}

export const Default = Template.bind({})
Default.args = {}
