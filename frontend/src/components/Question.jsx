import PropTypes from "prop-types";
import React from "react";

function Question({
  questionData,
  setQuestNumber,
  setCurrentPage,
  questNumber,
}) {
  return (
    <>
      <h1>{questionData.title}</h1>
      <div className="question-genre">
        {questionData.answers.map(({ text, className }) => (
          <button
            key={text}
            type="button"
            className={className}
            onClick={() => {
              if (questionData.label === "age") {
                setQuestNumber(1);
              }
              if (
                questionData.label === "genres" &&
                questionData.answers[0].text === "Vibrer"
              ) {
                setQuestNumber(2);
              }
              if (questNumber === 2) {
                setCurrentPage("movie");
              }
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
}
Question.propTypes = {
  questionData: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  setQuestNumber: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  questNumber: PropTypes.number.isRequired,
};

export default Question;
