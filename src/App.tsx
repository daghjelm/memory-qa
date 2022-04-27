import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Form'
import Home from './Home'
import { useState } from "react";
import { Question, QuestionSet } from "./interfaces/Question"

function App() {

  const qs : QuestionSet[] = [
    {
      name: "question set 1",
      questions: [
        {q: "question 0.0", a: "answer 0.0"},
        {q: "question 1.1", a: "answer 1.1"},
        {q: "question 2.2", a: "answer 2.2"}
      ]
    },
    {
      name: "question set 2",
      questions: [
        {q: "question 0.0", a: "answer 0.0"},
        {q: "question 1.1", a: "answer 1.1"},
        {q: "question 2.2", a: "answer 2.2"}
      ]
    }
  ];

  const [questionSets, setQuestionSets] = useState(qs);
  const [questions, setQuestions] = useState(qs[0]);

  function addQuestionSet(questionSet: QuestionSet) {
    setQuestionSets([...questionSets, questionSet]);
  }

  function setQuestionsReducer(questions: QuestionSet) {
    setQuestions({...questions});
  }


  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={
            <Home 
              questionSets={questionSets}
            />} 
          />
          <Route path="Form" element={
            <Form
              addQuestionSet={addQuestionSet} 
              questionSets={questionSets}
            />} 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
