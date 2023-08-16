import React from 'react'

const QuestionWithAnswer = ({question,userAnswer}) => {
  return (
    <div className="question">
    <p> <strong>Category:</strong>: {question.category}</p>
    <p className="question-answer"> <strong>Question:</strong>{question.question}</p>
    <p><strong>Your Answer:</strong> {userAnswer.answer} </p>
    <p><strong>Correct Answer</strong> {question.correct_answer}</p>
    </div>
  )
}

export default QuestionWithAnswer