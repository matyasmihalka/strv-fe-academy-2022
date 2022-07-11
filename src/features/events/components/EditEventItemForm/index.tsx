import type { FC } from 'react'

import { Input } from '~/features/ui/components/Input'

import type { ArticleType } from '../../types'
import { EventCard } from '../EventCard'
import { StyledEventForm } from '../StyledForm'

export type Props = {
  event: ArticleType
}

export const EditEventItemForm: FC<Props> = ({ event }) => {
  const handleSubmit = () => {
    console.log('Form submitted huraa')
  }
  return (
    <EventCard>
      <StyledEventForm id="myform" onSubmit={handleSubmit} noValidate>
        <Input
          //   {...register('title')}
          label="Title"
          type="text"
          name="title"
          value={event.title}
          //   error={errors?.title?.message}
        />
        {/* <Input
          {...register('description')}
          label="Description"
          type="text"
          name="description"
          error={errors?.description?.message}
        />
        <Input
          {...register('date')}
          label="Date"
          type="date"
          name="date"
          min={minDate}
          error={errors?.date?.message}
        />
        <Input
          {...register('time')}
          label="Time"
          type="time"
          name="time"
          error={errors?.time?.message}
        />
        <Input
          {...register('capacity')}
          label="Capacity"
          type="number"
          name="capacity"
          min={1}
          error={errors?.capacity?.message}
        /> */}
      </StyledEventForm>
    </EventCard>
  )
}
