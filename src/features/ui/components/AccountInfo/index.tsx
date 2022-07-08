import type { FC } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import type { UserType } from '~/features/auth/contexts/userContext'
import { useUserContext } from '~/features/auth/contexts/userContext'

import { InitialsIcon } from './parts/InitialsIcon'
import {
  ActionButton,
  Button,
  Dropdown,
  DropdownArrow,
  DropdownIcon,
  P,
  Wrapper,
} from './styled'

export type Props = {
  user: UserType
}

export const AccountInfo: FC<Props> = ({ user }) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false)
  const { firstName, lastName } = user
  const initials = `${firstName[0]}${lastName[0]}`
  const { handleLogout } = useUserContext()

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isDropdownShown &&
        ref.current &&
        // with addEventListener the event target is always Node (MouseEvent target is not)
        !ref.current.contains(e.target as Node)
      ) {
        setIsDropdownShown(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isDropdownShown])

  const handleClick = () => {
    setIsDropdownShown((prevState) => !prevState)
  }

  return (
    <Wrapper ref={ref}>
      <Button type="button" onClick={handleClick}>
        <InitialsIcon initials={initials} />
        <P>{`${firstName} ${lastName}`}</P>
        <DropdownIcon />
      </Button>
      {isDropdownShown && (
        <Dropdown onBlur={() => setIsDropdownShown(false)}>
          <DropdownArrow />
          <ActionButton type="button" onClick={() => alert('ADD PROFILE LINK')}>
            Profile
          </ActionButton>
          <ActionButton type="button" onClick={handleLogout}>
            Logout
          </ActionButton>
        </Dropdown>
      )}
    </Wrapper>
  )
}
