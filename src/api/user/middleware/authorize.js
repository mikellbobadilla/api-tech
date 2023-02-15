const isAuthorized = (req = request, res = response, next) => {
  try {
    const { username } = req.params
    const { payload } = req.body
    const user = req.body
    console.log(user)
    if (username !== payload.username) {
      throw new Error('The user can only alter his own data')
    }
    return next()
  } catch (err) {
    err.status = 400
    return next(err)
  }
}

export default isAuthorized