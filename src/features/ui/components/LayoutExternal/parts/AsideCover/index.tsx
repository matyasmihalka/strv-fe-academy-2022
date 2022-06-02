import type { FC } from 'react'

import { Aside, Quote, FigCaption } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <figure>
      <Quote>Great, kid. Dont get cocky</Quote>
      <hr />
      <FigCaption>Han Solo</FigCaption>
    </figure>
  </Aside>
)
