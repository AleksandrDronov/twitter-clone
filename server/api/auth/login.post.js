import { compareSync } from "bcrypt";
import { createRefreshToken } from "~/server/db/refreshTokens";
import { getUserByUsername } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/userTransformer";
import { addRefreshTokenToCookies, createTokens } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  // find user in db
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is incorrect",
      })
    );
  }
 
  // check password
  if (!compareSync(password, user.password)) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is incorrect",
      })
    );
  }

  const { accessToken, refreshToken } = createTokens(user);

  // save refresh token in db
  await createRefreshToken({
    userId: user.id,
    token: refreshToken
  });

  addRefreshTokenToCookies(event, refreshToken);

  return {
    access_token :accessToken,
    user: userTransformer(user),
  };
});
