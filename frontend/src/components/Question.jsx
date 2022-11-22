import PropTypes from "prop-types";
import React from "react";

function Question({ questionData, setQuestNumber, setCurrentPage, setGenre }) {
  return (
    <section>
      <h1>{questionData.title}</h1>
      {questionData.answers.map(({ text, className, nextQuestionId }) => (
        <button
          key={text}
          type="button"
          className={className}
          onClick={() => {
            if (questionData.label === "age") {
              setQuestNumber(1);
            }
            if (questionData.label === "genres" && nextQuestionId === 3) {
              setQuestNumber(2);
            }
            if (questionData.label === "genres" && nextQuestionId === 4) {
              setQuestNumber(3);
            }
            if (questionData.label === "genres" && nextQuestionId === 5) {
              setQuestNumber(4);
            }
            if (questionData.label === "genres" && nextQuestionId === 6) {
              setQuestNumber(5);
            }
            if (questionData.label === "genres" && nextQuestionId === 7) {
              setQuestNumber(6);
            }
            if (questionData.label === "Vibrer" && text === "Fusil à pompe") {
              setGenre("28&&12");
              setCurrentPage("movie");
            }
            if (questionData.label === "Vibrer" && text === "Blaster") {
              setGenre("14&&878");
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous divertir" && text === "Animés") {
              setGenre("16");
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous divertir" && text === "Comédies") {
              setGenre("35");
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous cultiver" && text === "Menottes") {
              setGenre("80");
              setCurrentPage("movie");
            }
            if (
              questionData.label === "Vous cultiver" &&
              text === "Documentaires"
            ) {
              setGenre("99&&36");
              setCurrentPage("movie");
            }
            if (questionData.label === "Frissonner" && text === "Stresser") {
              setGenre("18&&9648");
              setCurrentPage("movie");
            }
            if (questionData.label === "Frissonner" && text === "Flipper") {
              setGenre("27");
              setCurrentPage("movie");
            }
            if (
              questionData.label === "Vous émouvoir" &&
              text === "Romance et téléfilms"
            ) {
              setGenre("10749&&10770");
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous émouvoir" && text === "Musique") {
              setGenre("10402");
              setCurrentPage("movie");
            }
          }}
        >
          {text}
        </button>
      ))}
    </section>
  );
}
Question.propTypes = {
  questionData: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    title: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setQuestNumber: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default Question;
