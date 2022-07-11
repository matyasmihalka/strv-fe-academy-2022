import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'
import { set as setDate } from 'date-fns'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { withPrivateRoute } from '~/features/auth/hocs/withPrivateRoute'
import { useCreateEvent } from '~/features/auth/hooks/useCreateEvent'
import { Routes } from '~/features/core/constants/routes'
import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { CloseIcon } from './parts/CloseIcon'
import {
  CenterContainer,
  CloseLink,
  H1,
  InputFormContainer,
  P,
  StyledButton,
  StyledForm,
} from './styled'

const minDate = new Date().toISOString().split('T')[0]
const minDateFormatted = format(new Date(minDate), 'dd/MM/yyyy')

const EventFormSchema = yup.object({
  title: yup.string().min(3).max(50).required(),
  description: yup.string().min(10).max(200).required(),
  date: yup
    .date()
    .typeError('date is a required field')
    .min(minDate, `value must be ${minDateFormatted} or later`)
    .required(),
  time: yup
    .string()
    .matches(/\d+:\d+/u, 'time must be in a format HH:MM ')
    .required(),
  capacity: yup.number().integer().positive().lessThan(1000).required(),
})

type EventFormTypes = yup.InferType<typeof EventFormSchema>

type Props = {
  prevUrl?: string | undefined
}

export const Page: NextPage<Props> = ({ prevUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormTypes>({
    resolver: yupResolver(EventFormSchema),
  })

  // console.log(isSubmitting)

  const { mutate, isLoading } = useCreateEvent()

  const onSubmit = (data: EventFormTypes) => {
    console.log(data)
    const [hours, minutes] = data.time.split(':').map(Number)
    const startsAt = setDate(new Date(data.date), {
      hours: hours,
      minutes: minutes,
    }).toISOString()
    mutate({
      startsAt,
      title: data.title,
      description: data.description,
      capacity: data.capacity,
    })
  }

  return (
    <LayoutInternal
      leftHeaderComponent={
        <Link href={prevUrl ? prevUrl : Routes.DASHBOARD}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <CloseLink>
            <CloseIcon aria-hidden="true" />
            Close
          </CloseLink>
        </Link>
      }
    >
      <CenterContainer>
        <InputFormContainer>
          <H1>Create new event</H1>
          <P>Enter details below</P>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              {...register('title')}
              label="Title"
              type="text"
              name="title"
              error={errors?.title?.message}
            />
            <Input
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
            />
            <StyledButton type="submit" accent="primary" disabled={isLoading}>
              Create new Event
            </StyledButton>
          </StyledForm>
        </InputFormContainer>
      </CenterContainer>
    </LayoutInternal>
  )
}

export const CreateEventPage = withPrivateRoute(Page)

// this will be called by Next.js server side
// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      prevUrl: context.req.headers.referer,
    }, // will be passed to the page component as props
  }
}
