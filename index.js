function validatePassword(password) {
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let special = '!@#$%^&*()-_+='
  let numbers = '1234567890'
  
  let validLower = false
  let validUpper = false
  let validNumber = false
  let validSpecChar = false
  let validLength = false

  for (let i = 0; i < password.length; i++) {
    let currentLetter = password[i]

    if (password.length >= 8) {
      validLength = true
    }
    if (lowercase.includes(currentLetter)) {
      validLower = true
    }
    if (uppercase.includes(currentLetter)) {
      validUpper = true
    }
    if (numbers.includes(currentLetter)) {
      validNumber = true
    }
    if (special.includes(currentLetter)) {
      validSpecChar = true
    }
  }

  return validSpecChar && validNumber && validUpper && validLength && validLower
}




module.exports = validatePassword

// needs 8 characters
// needs one lowercase
// needs one uppercase
// needs one number
// needs one special character
