import type { ChangeEvent, FC } from 'react'

import { NavButton } from '~/features/ui/components/NavButton'

import { List, MobileToggleLabel } from './styled'

import { FilterType } from '../../types'

type Props = {
  onChange: (filterType: FilterType) => void
  activeFilter: FilterType
}

export const NavigationFilter: FC<Props> = ({ onChange, activeFilter }) => {
  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    let selectedFilterType = FilterType.ALL
    if (event.target.value === 'ALL') {
      selectedFilterType = FilterType.ALL
    }
    if (event.target.value === 'FUTURE') {
      selectedFilterType = FilterType.FUTURE
    }
    if (event.target.value === 'PAST') {
      selectedFilterType = FilterType.PAST
    }
    onChange(selectedFilterType)
  }
  return (
    <>
      <List>
        <li>
          <NavButton
            isActive={activeFilter === FilterType.ALL}
            type="button"
            onClick={() => onChange(FilterType.ALL)}
          >
            All Events
          </NavButton>
        </li>
        <li>
          <NavButton
            isActive={activeFilter === FilterType.FUTURE}
            type="button"
            onClick={() => onChange(FilterType.FUTURE)}
          >
            Future events
          </NavButton>
        </li>
        <li>
          <NavButton
            isActive={activeFilter === FilterType.PAST}
            type="button"
            onClick={() => onChange(FilterType.PAST)}
          >
            Past Events
          </NavButton>
        </li>
      </List>

      <MobileToggleLabel>
        <span>SHOW:</span>
        <select onChange={selectHandler}>
          <option value={FilterType.ALL}>All Events</option>
          <option value={FilterType.FUTURE}>Future Events</option>
          <option value={FilterType.PAST}>Past Events</option>
        </select>
      </MobileToggleLabel>
    </>
  )
}
