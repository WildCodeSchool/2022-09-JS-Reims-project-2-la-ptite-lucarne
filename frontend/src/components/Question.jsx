import PropTypes from "prop-types";
import React from "react";

function Question({ questionData, setQuestNumber, setMyUrl, setCurrentPage }) {
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
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=12&&28&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Vibrer" && text === "Blaster") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=14&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (
              questionData.label === "Vous divertir" &&
              text === "Animés et familiaux"
            ) {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous divertir" && text === "Comédies") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (
              questionData.label === "Vous cultiver" &&
              text === "Pierre Bellemare"
            ) {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=80&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous cultiver" && text === "Arte") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Frissonner" && text === "stresser") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=18&&9648&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Frissonner" && text === "flipper") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=27&&53&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (
              questionData.label === "Vous émouvoir" &&
              text === "romance et téléfilms"
            ) {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=10749&&10770&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
              setCurrentPage("movie");
            }
            if (questionData.label === "Vous émouvoir" && text === "musique") {
              setMyUrl(
                `https://api.themoviedb.org/3/discover/movie?with_genres=10402&api_key=${
                  import.meta.env.VITE_API_KEY
                }&language=fr`
              );
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
    text: PropTypes.string,
    answers: PropTypes.shape,
  }).isRequired,
  setQuestNumber: PropTypes.func.isRequired,
  setMyUrl: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Question;
