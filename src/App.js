import { useState,useEffect } from 'react';
import Questions from './Components/Questions';

function App() {
  const [questions,setQuestions] = useState([])
  const [userAnswers,setUserAnswers] = useState(Array.from(Array(10), (_, index) => ({
    id: index,
    answer: 'True',
  })))
  const [correctAnswers,setCorrectAnswers] = useState([])

  useEffect(()=> {
    const getQuestions = async ()=>{
      const questionsFromAPI = await fetchQuestions()
      console.log(questionsFromAPI.results)
      
      await setQuestions(questionsFromAPI.results.map((question,index)=> (
        {...question,id:index}
  
      )))
      await setCorrectAnswers(questionsFromAPI.results.map((question,index) => (
        {answer:question.correct_answer,id:index}
      )))
      console.log("My questions")
      // await console.log(questions)
      // await console.log(correctAnswers)
    }

    getQuestions()
  },[])

  const fetchQuestions = async () => {
    const res = await fetch ("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
    const data = await res.json()
    // console.log(data)
    return data
  }

  const getUserAnswers=() => {

    console.log(userAnswers)

  }


  const changeAnswer = (e,id) => {
    console.log(e.target.value)
    console.log(id)
    setUserAnswers(userAnswers.map((useranswer) =>  useranswer.id === id ?{...useranswer,answer:e.target.value} : useranswer
    ))
  }


  return (
    <div className="App">
      
      <Questions questions = {questions} changeAnswer={changeAnswer}/>
      <button onClick={getUserAnswers}>Submit</button>

    </div>
  );
}

export default App;
