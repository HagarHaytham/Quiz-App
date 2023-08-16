import Question from "./Question"
const Questions = ({questions,changeAnswer}) => {
  return (
    <div>
    {questions.map((question,index)=> (
        <Question key = {index} question = {question} changeAnswer={changeAnswer}/>

    ))}
    
    </div>
  )
}

export default Questions