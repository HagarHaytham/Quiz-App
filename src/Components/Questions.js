import Question from "./Question"
const Questions = ({questions}) => {
  return (
    <div>
    {questions.map((question,index)=> (
        <Question key = {index} question = {question}/>

    ))}
    
    </div>
  )
}

export default Questions