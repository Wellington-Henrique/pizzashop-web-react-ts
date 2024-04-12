import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 300 },
    { date: '02/01/2024', receipt: 600 },
    { date: '02/01/2024', receipt: 431.2 },
    { date: '03/01/2024', receipt: 800 },
    { date: '05/01/2024', receipt: 160 },
    { date: '05/01/2024', receipt: 351 },
    { date: '05/01/2024', receipt: 360 },
    { date: '06/01/2024', receipt: 461.1 },
    { date: '07/01/2024', receipt: 233.2 },
  ])
})
