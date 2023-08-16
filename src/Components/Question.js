
const Question = ({question}) => {
  return (
    <div className="question">
    <p> <strong>Category:</strong>: {question.category}</p>
    <p> <strong>Question:</strong>{question.question}</p>
    </div>
  )
}

export default Question