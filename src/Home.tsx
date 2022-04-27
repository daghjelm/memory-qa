import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Question, QuestionSet } from "./interfaces/Question"


interface HomeProps {
  questionSets: QuestionSet[]
}

function Home(props: HomeProps) {

  return (
    <div className="container">
      <div className="row justify-content-md-center text-center">
        <h1 className="mt-5">Memory q/a!</h1>
        <h4 className="m-5">
          This is a memory game for questions and answers. <br></br>
          Instead of matching pictures, you match a question with the correct
          answer! (or vice versa)
        </h4>

        <div className="col-4">
          <h4 className="mb-2">Select question set:</h4>
          <div>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              {
                props.questionSets.map((set: QuestionSet) => 
                  (<option key={set.name} value={set.name}>{set.name}</option>)
                ) 
              }
            </Form.Select>
          </div>
          <h4 className="m-2">or</h4>
          <div className="">
            <Link to="/form">
              <Button variant="primary">
                Add questions
              </Button>
            </Link>
          </div>
            <Button onClick={print} variant="primary">
              click
            </Button>
        </div>

      </div>
    </div>
  );
}

export default Home;
