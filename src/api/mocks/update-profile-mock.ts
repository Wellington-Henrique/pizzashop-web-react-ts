import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const UpdateProfileMock = http.post<never, UpdateProfileBody>(
  '/restaurants',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza')
      return new HttpResponse(null, {
        status: 204,
        headers: { 'Set-Cookie': 'auth=sample-jwt' },
      })

    return new HttpResponse(null, { status: 400 })
  },
)
