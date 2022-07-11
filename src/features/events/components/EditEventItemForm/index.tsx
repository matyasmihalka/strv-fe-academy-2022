// import { yupResolver } from '@hookform/resolvers/yup'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '~/features/ui/components/Input'

import type { EventFormTypes } from '../../pages/CreateEventPage'
// import { EventFormSchema } from '../../pages/CreateEventPage'
import type { ArticleType } from '../../types'
import { EventCard } from '../EventCard'
import { StyledEventForm } from '../StyledForm'

export type Props = {
  event: ArticleType
}
const minDate = new Date().toISOString().split('T')[0]

const formatDateForInput = (UTCdate: string) => {
  const date = new Date(UTCdate)
  const year = date.getFullYear()
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
  const day =
    date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()

  return `${year}-${month}-${day}`
}

export const EditEventItemForm: FC<Props> = ({ event }) => {
  const onSubmitHandler = () => {
    console.log('Form submitted huraa')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormTypes>({
    // resolver: yupResolver(EventFormSchema),
  })

  return (
    <EventCard>
      <StyledEventForm
        id="myform"
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
          value="11:25"
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

        {/* <Input
          {...register('description')}
          label="Description"
          type="text"
          name="description"
          error={errors?.description?.message}
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
