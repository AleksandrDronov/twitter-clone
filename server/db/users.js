import { prisma } from ".";
import { hashSync } from "bcrypt";

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: hashSync(userData.password, 10)
  }

  return prisma.user.create({
    data: finalUserData
  })
}

export const getUserByUsername = (username) => prisma.user.findUnique({
  where: {
    username
  }
});