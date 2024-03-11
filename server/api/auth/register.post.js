import { createUser } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/userTransformer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password, name, username, repeatPassword } = body;

  if (!email || !password  || !username || !repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Invalid params",
    }))
  }

  if (password !== repeatPassword) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Passwords do not match",
    }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://i.pravatar.cc/300',
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
});
