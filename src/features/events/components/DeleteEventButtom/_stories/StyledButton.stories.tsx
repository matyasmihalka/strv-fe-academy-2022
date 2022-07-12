import type { Meta, Story } from '@storybook/react/types-6-0'

import { BinIcon } from '../parts/BinIcon'
import { StyledButton } from '../styled'

export default {
  title: 'Events/Delete event UI component',
  component: StyledButton,
} as Meta

const Template: Story = (args) => {
  return (
    <StyledButton {...args}>
      <BinIcon /> DELETE EVENT
    </StyledButton>
  )
}

export const Default = Template.bind({})
Default.args = {
  disabled: true,
  type: 'button',
  onClick: () => console.log('clocked'),
}
