// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from '@storybook/addons'
import type { Story, Meta } from '@storybook/react/types-6-0'

import type { Props } from '..'
import { NavigationFilter } from '..'
import { FilterType } from '../../../types'

export default {
  title: 'Events/Navigation Filter',
  component: NavigationFilter,
} as Meta

const Template: Story<Props> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__args, updateArgs] = useArgs()

  const handleChange = (filterType: FilterType) => {
    updateArgs({
      ...args,
      activeFilter: filterType,
    })
  }

  return (
    <NavigationFilter
      onChange={handleChange}
      // eslint-disable-next-line react/destructuring-assignment
      activeFilter={args.activeFilter}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  activeFilter: FilterType.ALL,
}
