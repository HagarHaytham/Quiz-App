
const Question = ({question,changeAnswer}) => {
    // console.log(question)
  return (
    <div className="question">
    <p> <strong>Category:</strong>: {question.category}</p>
    <p className="question-answer"> <strong>Question:</strong>{question.question}
        <select name="answers" className="answers" onChange={(e)=>changeAnswer(e,question.id)}>
            <option value="True">True</option>
            <option value="False">False</option>
        </select>
    </p>
    </div>
  )
}

export default Question