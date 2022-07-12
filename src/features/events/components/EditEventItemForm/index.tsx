import { yupResolver } from '@hookform/resolvers/yup'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '~/features/ui/components/Input'

import type { EventFormTypes } from '../../pages/CreateEventPage'
import { EventFormSchema } from '../../pages/CreateEventPage'
import type { ArticleType } from '../../types'
import { EventCard } from '../EventCard'
import { StyledEventForm } from '../StyledForm'

export type Props = {
  event: ArticleType
  onSubmitHandler: (data: EventFormTypes) => void
}
const minDate = new Date().toISOString().split('T')[0]

const formatDateForInput = (UTCdate: string) => {
  const date = new Date(UTCdate)
  const year = date.getFullYear()
  const month =
    date.getUTCMonth() < 10
      ? `0${date.getUTCMonth() + 1}`
      : date.getUTCMonth() + 1
  const day =
    date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()

  return `${year}-${month}-${day}`
}

const formatTimeForInput = (UTCdate: string) => {
  const date = new Date(UTCdate)
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  return `${hours}:${minutes}`
}

export const EditEventItemForm: FC<Props> = ({ event, onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormTypes>({
    resolver: yupResolver(EventFormSchema),
  })

  return (
    <EventCard>
      <StyledEventForm
        id={event.id}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <Input
          {...register('date')}
          label="Date"
          type="date"
          name="date"
          min={minDate}
          error={errors?.date?.message}
          defaultValue={formatDateForInput(event.startsAt)}
        />
        <Input
          {...register('time')}
          label="Time"
          type="time"
          name="time"
          defaultValue={formatTimeForInput(event.startsAt)}
          error={errors?.time?.message}
        />
        <Input
          {...register('title')}
          label="Title"
          type="text"
          name="title"
          error={errors?.title?.message}
          defaultValue={event.title}
        />

        <Input
          {...register('description')}
          label="Description"
          type="text"
          name="description"
          error={errors?.description?.message}
          defaultValue={event.description}
        />

        <Input
          {...register('capacity')}
          label="Capacity"
          type="number"
          name="capacity"
          min={1}
          error={errors?.capacity?.message}
          defaultValue={event.capacity}
        />
      </StyledEventForm>
    </EventCard>
  )
}
