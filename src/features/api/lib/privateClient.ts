import { getAccessToken, getRefreshToken } from '~/features/auth/storage'

import { api } from './client'
import type {
  AfterRequestInterceptor,
  BeforeRequestInterceptor,
} from './network-provider'

const appendAccessToken: BeforeRequestInterceptor = (request) => {
  const accessToken = getAccessToken()
  accessToken && request.headers.append('Authorization', accessToken)
  return request
}

const handleUnauthorized: AfterRequestInterceptor = async (
  request,
  options,
  response,
  context
) => {
  if (response.status === 403) {
    const refreshToken = getRefreshToken()
    if (!refreshToken) {
      return response
    }

    // persistTokens interceptor will store the tokens if refresh succeeds
    await api.post('/auth/native', { json: { refreshToken } })

    // repeat request with fresh accessToken
    return await context.client.makeRequest(request.url, { ...options })
  }

  return response
}

const privateApi = api.extend({
  interceptors: {
    beforeRequest: [appendAccessToken],
    afterRequest: [handleUnauthorized],
  },
})

export { privateApi }
