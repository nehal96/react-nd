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
