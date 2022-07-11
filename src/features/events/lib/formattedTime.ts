import { format } from 'date-fns'

export const formattedTime = (date: string) =>
  format(new Date(date), 'LLLL d, y – p')
