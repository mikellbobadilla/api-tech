class UserExeption extends Error {
  constructor(message) {
    super(message)

    Object.setPrototypeOf(this, UserExeption.prototype)
  }
}

export default UserExeption