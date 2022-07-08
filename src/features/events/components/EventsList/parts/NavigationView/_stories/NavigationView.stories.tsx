// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from '@storybook/addons'
import type { Story, Meta } from '@storybook/react/types-6-0'

import { NavigationView } from '..'
import type { Props } from '..'
import { ViewType } from '../../../types'

export default {
  title: 'Events/Navigation View',
  component: NavigationView,
} as Meta

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__args, updateArgs] = useArgs()

  const handleChange = (viewType: ViewType) => {
    updateArgs({
      ...args,
      activeView: viewType,
    })
  }

  // eslint-disable-next-line react/destructuring-assignment
  return <NavigationView onChange={handleChange} activeView={args.activeView} />
}

export const Default = Template.bind({})
Default.args = {
  activeView: ViewType.GRID,
}
