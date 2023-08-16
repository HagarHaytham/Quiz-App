import {Link} from 'react-router-dom'
import Question from "./Question"
const Questions = ({questions,changeAnswer,getUserAnswers}) => {
  return (
    <div>
    {questions.map((question,index)=> (
        <Question key = {index} question = {question} changeAnswer={changeAnswer}/>

    ))}
    
    <Link to="/score">
        <button className='btn' onClick={getUserAnswers}>Submit</button>
    </Link>

    </div>
  )
}

export default Questions