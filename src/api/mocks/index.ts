import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-mock'
import { getMonthRevenueAmountMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './resister-restaurant-mock.mock'
import { signInMock } from './sign-in.mock'
import { UpdateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  UpdateProfileMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
