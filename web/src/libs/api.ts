import axios from 'axios'
import cookies from 'js-cookie'

// interface ApiError {
//   message: {
//     error: boolean
//     code: string
//   }
// }

// const isRefreshing = false
// const failedRequestsQueue: any[] = []

const rsToken = cookies.get('token')

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${rsToken}`,
  },
})

// api.interceptors.response.use(
//   (res) => res,
//   (err: AxiosError<ApiError>) => {
//     if (err.response?.status === 401) {
//       if (err.response.data?.message.code === 'token.expired') {
//         const refreshToken = cookies.get('refreshToken')
//         const originalConfig = err.config

//         console.log(refreshToken)

//         if (!isRefreshing) {
//           isRefreshing = true

//           api
//             .post('/session/refresh-token', {
//               refreshToken,
//             })
//             .then((res) => {
//               const data = res?.data

//               console.log(data)

//               const cookieExpiresTime = 60 * 60 * 24 * 30 // 30 days

//               cookies.set('token', data?.newToken, {
//                 httpOnly: false,
//                 path: '/',
//                 maxAge: cookieExpiresTime,
//               })

//               cookies.set('refreshToken', data?.newRefreshToken, {
//                 httpOnly: false,
//                 path: '/',
//                 maxAge: cookieExpiresTime,
//               })

//               api.defaults.headers.common.Authorization = `Bearer ${data?.newToken}`

//               failedRequestsQueue.forEach((request) =>
//                 request.onSuccess(data?.newToken),
//               )
//               failedRequestsQueue = []
//             })
//             .catch((err) => {
//               failedRequestsQueue.forEach((request) => request.onFailure(err))
//               failedRequestsQueue = []

//               api.get('/api/auth/loggout')
//             })
//             .finally(() => {
//               isRefreshing = false
//             })
//         }

//         return new Promise((resolve, reject) => {
//           failedRequestsQueue.push({
//             onSuccess: (token: string) => {
//               if (!originalConfig?.headers) {
//                 return
//               }

//               originalConfig.headers.Authorization = `Bearer ${token}`

//               resolve(api(originalConfig))
//             },
//             onFailure: (error: AxiosError) => {
//               reject(error)
//             },
//           })
//         })
//       }
//     }
//   },
// )
