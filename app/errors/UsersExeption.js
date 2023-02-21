class UserExeption extends Error {
  constructor(message, options) {
    super(message, options)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UserExeption)
    }
    this.name = 'UserExeption'
    this.date = new Date()
  }
}

export default UserExeption