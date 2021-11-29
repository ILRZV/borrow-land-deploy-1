export const setToken = (tokenValue: string) => {
  localStorage.setItem('token', tokenValue)
}

export const getToken = () => {
  return localStorage.getItem('token')?.toString()
}
