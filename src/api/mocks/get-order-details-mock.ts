import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'jhondoe@example.com',
      phone: '99 99999-9999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 45000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2000,
        product: { name: 'Pizza Marguerita' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2500,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
    ],
  })
})
