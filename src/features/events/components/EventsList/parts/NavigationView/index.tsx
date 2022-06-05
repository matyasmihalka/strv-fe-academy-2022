import type { FC } from 'react'

import { NavButton } from '~/features/ui/components/NavButton'

import { GridIcon } from './parts/GridIcon'
import { ListIcon } from './parts/ListIcon'
import { List } from './styled'

import { ViewType } from '../../types'

type Props = {
  onChange: (viewType: ViewType) => void
}

export const NavigationView: FC<Props> = ({ onChange }) => (
  <List>
    <li>
      <NavButton
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
        isActive
      >
        <GridIcon />
      </NavButton>
    </li>
    <li>
      <NavButton
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
      >
        <ListIcon />
      </NavButton>
    </li>
  </List>
)
