export const userTransformer = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    username: user.username,
    profileImage: user.profileImage,
  }
}
