'use strict'

export const validatePassword = (password) => {
  const patterm = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/
  return patterm.test(password)
}