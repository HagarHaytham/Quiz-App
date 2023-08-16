import { useState,useEffect } from "react"
import QuestionWithAnswer from "./QuestionWithAnswer"

const Score = ({questions,userAnswers}) => {
    const [score,setScore] = useState(0)
    useEffect (()=>{
        const calcScore = () => {
            let s = 0;
            for (let i=0;i<questions.length;i++){
                if (questions[i].correct_answer === userAnswers[i].answer){
                    s = s+1;
                }
            }
            setScore(s)

        }
        calcScore()

    })
  return (
    <div>
    
    <div>Score is {score} / 10</div>

    {questions.map((question)=> (
        <QuestionWithAnswer key = {question.id} question ={question} userAnswer = {userAnswers[question.id]}/>
    ))}

    </div>
  )
}

export default Score