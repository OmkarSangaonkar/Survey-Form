import PropTypes from "prop-types";
import { useEffect } from "react";
import "./SurveyList.css";

const SurveyList = ({ submissions }) => {
  useEffect(() => {
    console.log("submissions changed:", submissions);
  }, [submissions]);
  return (
    <div className="survey-list-container">
      <h2 className="survey-list-heading">Previous Survey Submissions</h2>
      <div className="submission-cards">
        {submissions.map((submission, index) => (
          <div className="submission-card" key={index}>
            {/* Display submission details */}
            <h3>Name: {submission.name}</h3>
            {/* Display other submission data */}
            <p>Gender: {submission.gender}</p>
            <p>Nationality: {submission.nationality}</p>
            <p>Email: {submission.email}</p>
            <p>Phone: {submission.phone}</p>
            <p>Address: {submission.address}</p>
            <p>Message: {submission.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop type validation
SurveyList.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      // Add other fields with their respective PropTypes
    })
  ).isRequired,
};

export default SurveyList;
