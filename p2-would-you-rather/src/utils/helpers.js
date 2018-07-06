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
