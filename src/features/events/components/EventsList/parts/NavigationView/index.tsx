import type { FC } from 'react'

import { ViewType } from '../../types'

type Props = {
  onChange: (viewType: ViewType) => void
}

export const NavigationView: FC<Props> = ({ onChange }) => (
  <ul>
    <li>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
      >
        #
      </button>
    </li>
    <li>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
      >
        =
      </button>
    </li>
  </ul>
)
