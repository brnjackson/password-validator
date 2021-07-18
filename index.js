function checkLowerCase(currentLetter) {
  return currentLetter >= 97 && currentLetter <= 122
}

function passwordLength(password) {
  if (password.length < 8) {
    return false
  }

  return true
}

function validatePassword(password) {
  let length = passwordLength(password)
  let lowerCaseCount = 0

  for(let i = 0; i < password.length; i++) {
    let currentLetter = password[i]

    if (checkLowerCase(currentLetter)) {
      lowerCaseCount++
    }
  }

  return lowerCaseCount > 0 && length
}




module.exports = validatePassword

// needs 8 characters
// needs one lowercase
// needs one uppercase
// needs one number
// needs one special character
