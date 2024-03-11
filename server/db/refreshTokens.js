import { prisma } from "."

export const createRefreshToken = (refreshTokenData) => {
  return prisma.refreshToken.create({
    data: refreshTokenData
  })
}