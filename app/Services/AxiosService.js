

export const jeopardyApi = axios.create({
  baseURL: 'https://jservice.io/api/random',
  timeout: 8000
})

export const sandboxApi = axios.create({
  baseURL: 'https://jeoparty-server.herokuapp.com/api',
  timeout: 8000
})