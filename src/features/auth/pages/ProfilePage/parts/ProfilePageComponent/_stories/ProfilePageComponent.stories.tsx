import type { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import { createUser } from '~/features/events/types.fixtures'

import type { Props } from '..'
import { ProfilePageComponent } from '..'

export default {
  title: 'Profile/ Page component',
  component: ProfilePageComponent,
} as Meta

const PaddingDiv = styled.div`
  padding-top: 100px;
`

const Template: Story<Props> = (args) => {
  return (
    <PaddingDiv>
      <ProfilePageComponent {...args} />
    </PaddingDiv>
  )
}

export const Default = Template.bind({})
Default.args = {
  user: createUser(),
}
