import { useState,useEffect } from 'react';
import Questions from './Components/Questions';

function App() {
  const [questions,setQuestions] = useState([])

  useEffect(()=> {
    const getQuestions = async ()=>{
      const questionsFromAPI = await fetchQuestions()
      console.log(questionsFromAPI.results)
      await setQuestions(questionsFromAPI.results)
    }

    getQuestions()
  },[])

  const fetchQuestions = async () => {
    const res = await fetch ("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
    const data = await res.json()
    console.log(data)
    return data
  }
  return (
    <div className="App">
      
      <Questions questions = {questions}/>
    </div>
  );
}

export default App;
