import type { FC } from 'react'

import { NavButton } from '~/features/ui/components/NavButton'

import { GridIcon } from './parts/GridIcon'
import { ListIcon } from './parts/ListIcon'
import { List } from './styled'

import { ViewType } from '../../types'

type Props = {
  onChange: (viewType: ViewType) => void
  activeView: ViewType
}

export const NavigationView: FC<Props> = ({ onChange, activeView }) => (
  <List>
    <li>
      <NavButton
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
        isActive={activeView === ViewType.GRID ? true : false}
      >
        <GridIcon />
      </NavButton>
    </li>
    <li>
      <NavButton
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
        isActive={activeView === ViewType.LIST ? true : false}
      >
        <ListIcon />
      </NavButton>
    </li>
  </List>
)
