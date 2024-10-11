import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/ask", {
        question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching the answer", error);
    }
  };

  return (
    <div className="container">
      <div className="qa-box">
        <h1>Pathway Question Answering System</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
            className="question-input"
          />
          <button type="submit" className="submit-button">Ask</button>
        </form>
        {answer && <p className="answer">Answer: {answer}</p>}
      </div>
    </div>
  );
};

export default App;
