module.exports = function pwdGen (option) {
  // Define all thing which user might want
  const numbers = '0123456789'
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  const upperChars = lowerChars.toUpperCase()
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Prepare the generator pool
  let collection = []

  if (option.lowercase) {
    collection = collection.concat(...lowerChars)
  }

  if (option.uppercase) {
    collection = collection.concat(...upperChars)
  }

  if (option.numbers) {
    collection = collection.concat(...numbers)
  }

  if (option.symbols) {
    collection = collection.concat(...symbols)
  }

  // Extract the exclude Characters
  if (option.excludeCharacters) {
    const excludeList = option.excludeCharacters
    collection = collection.filter((item) => !excludeList.includes(item))
  }

  const pwdLen = Number(option.length)
  let result = ''
  for (let i = 0; i < pwdLen; i++) {
    const randomIdx = Math.floor(Math.random() * collection.length)
    result += collection[randomIdx]
  }
  return result
}
