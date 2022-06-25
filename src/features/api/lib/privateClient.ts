import { getAccessToken } from '~/features/auth/storage'

import { api } from './client'
import type { BeforeRequestInterceptor } from './network-provider'

const appendAccessToken: BeforeRequestInterceptor = (request) => {
  const accessToken = getAccessToken()
  accessToken && request.headers.append('Authorization', accessToken)
  return request
}

const privateApi = api.extend({
  interceptors: { beforeRequest: [appendAccessToken] },
})

export { privateApi }
