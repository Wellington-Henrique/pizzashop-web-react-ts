import { api } from '@/lib/axios'

export interface GetDailyReveneuInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyReveneuInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyReveneuInPeriod({
  from,
  to,
}: GetDailyReveneuInPeriodQuery) {
  const response = await api.get<GetDailyReveneuInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
