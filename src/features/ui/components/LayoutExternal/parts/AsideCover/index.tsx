import type { FC } from 'react'

import { Aside, Quote, FigCaption, Figure, HR } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Figure>
      <Quote>Great, kid. Don&apos;t get cocky</Quote>
      <HR />
      <FigCaption>Han Solo</FigCaption>
    </Figure>
  </Aside>
)
