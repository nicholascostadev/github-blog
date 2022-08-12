import { intlFormatDistance } from 'date-fns'

export const formatDate = (createdAt: string) =>
  intlFormatDistance(new Date(createdAt), new Date(), {
    locale: 'pt-BR',
  })
