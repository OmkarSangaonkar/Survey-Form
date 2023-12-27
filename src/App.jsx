import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SurveyForm from "./Components/SurveyForm";
import SurveyList from "./Components/SurveyList";

function App() {
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleFormSubmit = (submittedData) => {
    setFormSubmissions((prevSubmissions) => [
      ...prevSubmissions,
      submittedData,
    ]);
  };

  console.log("Form Submissions:", formSubmissions);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<SurveyForm onFormSubmit={handleFormSubmit} />}
          />

          <Route
            exact
            path="/surveylist"
            element={<SurveyList submissions={formSubmissions} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
