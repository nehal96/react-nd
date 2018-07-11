export function formatQuestion(question, user) {
  const { id, author, timestamp, optionOne, optionTwo} = question
  const { name, avatarURL } = user

  return {
    id,
    name,
    avatarURL,
    author,
    timestamp,
    optionOne,
    optionTwo
  }
}

export function formatProfile(user) {
  const { id, name, avatarURL } = user
  const questionsAnswered = Object.keys(user.answers).length
  const questionsCreated = Object.keys(user.questions).length
  const score = questionsAnswered + questionsCreated

  return {
    id,
    name,
    avatarURL,
    questionsAnswered,
    questionsCreated,
    score
  }
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toString()
  return time.substr(4, 6) + ', ' + time.substr(11, 4)
}
