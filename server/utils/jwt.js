import jwt from 'jsonwebtoken'

export const createTokens = (user) => {
  const config = useRuntimeConfig();

  const accessToken = jwt.sign({ userId: user.id }, config.jwtAccessSecret, { expiresIn: '15m' })
  const refreshToken = jwt.sign({ userId: user.id }, config.jwtRefreshSecret, { expiresIn: '7d' })
  
  return { accessToken, refreshToken }
}

export const addRefreshTokenToCookies = (event, refreshToken) => {
  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: true,
  })
}