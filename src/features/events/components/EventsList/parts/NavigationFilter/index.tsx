import type { FC } from 'react'

import { NavButton } from '~/features/ui/components/NavButton'

import { List } from './styled'

enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type Props = {
  onChange: (filterType: FilterType) => void
}

export const NavigationFilter: FC<Props> = ({ onChange }) => {
  return (
    <List>
      <li>
        <NavButton
          isActive
          type="button"
          onClick={() => onChange(FilterType.ALL)}
        >
          All Events
        </NavButton>
      </li>
      <li>
        <NavButton type="button" onClick={() => onChange(FilterType.FUTURE)}>
          Future events
        </NavButton>
      </li>
      <li>
        <NavButton type="button" onClick={() => onChange(FilterType.PAST)}>
          Past Events
        </NavButton>
      </li>
    </List>
  )
}
