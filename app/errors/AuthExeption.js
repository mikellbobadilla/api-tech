class AuthExeption extends Error {
  constructor(message, options) {
    super(message, options)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthExeption)
    }

    this.name = 'AuthExeption'
    this.date = new Date()
  }
}

export default AuthExeption