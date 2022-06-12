import type { FC } from 'react'

import { NavButton } from '~/features/ui/components/NavButton'

import { List, MobileToggleLabel } from './styled'

import { FilterType } from '../../types'

type Props = {
  onChange: (filterType: FilterType) => void
}

export const NavigationFilter: FC<Props> = ({ onChange }) => {
  return (
    <>
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

      <MobileToggleLabel>
        <span>SHOW:</span>
        <select>
          <option value={FilterType.ALL}>All Events</option>
          <option value={FilterType.FUTURE}>Future Events</option>
          <option value={FilterType.PAST}>Past Events</option>
        </select>
      </MobileToggleLabel>
    </>
  )
}
