import PropTypes from "prop-types";
import React from "react";

function Question({ questionData, setQuestNumber, questNumber }) {
  return (
    <section>
      <h1>{questionData.title}</h1>
      {questionData.answers.map(({ text, className }) => (
        <button
          key={text}
          type="button"
          className={className}
          onClick={() => setQuestNumber((questNumber += 1))}
        >
          {text}
        </button>
      ))}
    </section>
  );
}
Question.propTypes = {
  questionData: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  questNumber: PropTypes.number.isRequired,
  setQuestNumber: PropTypes.func.isRequired,
};

export default Question;
