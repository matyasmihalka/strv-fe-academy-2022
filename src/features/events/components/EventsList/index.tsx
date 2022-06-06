import type { FC } from 'react'
import { useState } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'
import { NavigationView } from './parts/NavigationView'
import { List, Nav } from './styled'
import { ViewType } from './types'

const dummyEvents = [
  {
    date: 'April 4, 2017 - 2:17PM',
    title: 'How to get angry',
    author: 'Tom Watts',
    description: 'I will show you how to get angry in a second',
    attendance: '9 of 31',
    buttonType: 'EDIT',
  },
  {
    date: 'April 4, 2017 - 2:17PM',
    title: 'Mexican party vol. 2',
    author: 'Matilda Daniels',
    description: 'Party in Scrollbar',
    attendance: '5 of 50',
    buttonType: 'JOIN',
  },
  {
    date: 'April 4, 2017 - 2:17PM',
    title: 'How to became Darker Solder',
    author: 'Bill Soto',
    description: 'I will tell you insights how I become Dark Soldier',
    attendance: '5 of 50',
    buttonType: 'JOIN',
  },
  {
    date: 'April 4, 2017 - 2:17PM',
    title: 'Party in Asgrad',
    author: 'Ivan Wong',
    description: 'You can bring your +1',
    attendance: '657 of 1000',
    buttonType: 'LEAVE',
  },
]

export const EventsList: FC = () => {
  // const view = ViewType.GRID as ViewType

  const [view, setView] = useState(ViewType.GRID)

  const setViewHandler = (passedView: ViewType) => {
    setView(passedView)
  }

  return (
    <>
      <Nav>
        <NavigationFilter onChange={(filterType) => alert(filterType)} />
        <NavigationView onChange={setViewHandler} activeView={view} />
      </Nav>
      <List view={view}>
        {dummyEvents.map((data, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <EventItem view={view} eventData={data} />
          </li>
        ))}
        {dummyEvents.map((data, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <EventItem view={view} eventData={data} />
          </li>
        ))}
      </List>
    </>
  )
}
