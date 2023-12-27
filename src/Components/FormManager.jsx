// Parent component that holds the form data state and handles submissions
import { useState } from "react";
import SurveyList from "./SurveyList";
import SurveyForm from "./SurveyForm";

const FormManager = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (submittedData) => {
    setSubmissions([...submissions, submittedData]);
  };

  return (
    <div>
      <SurveyList submissions={submissions} />
      {/* Pass handleFormSubmit as a prop to SurveyForm */}
      <SurveyForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default FormManager;
