import Image from 'next/image'
import type { FC } from 'react'

import asideImage from './assets/background.jpg'
import { Aside, Quote, FigCaption, Figure, HR } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Image
      src={asideImage}
      alt="Stormtroopers"
      objectFit="cover"
      layout="fill"
      objectPosition="right"
      placeholder="blur"
      priority
    />

    <Figure>
      <Quote>Great, kid. Don&apos;t get cocky</Quote>
      <HR />
      <FigCaption>Han Solo</FigCaption>
    </Figure>
  </Aside>
)
