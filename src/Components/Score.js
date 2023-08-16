import { useState,useEffect } from "react"
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
    <div>Score is {score}</div>
  )
}

export default Score