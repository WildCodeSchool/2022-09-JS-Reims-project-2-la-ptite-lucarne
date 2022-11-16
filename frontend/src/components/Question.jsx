import PropTypes from "prop-types";
/* Question d'ouverture */
const allData = [
  {
    title: "Film entre adultes ou enfants à bord ?",
  },
];

function Question({ setCurrentPage }) {
  const data = allData[0];

  return (
    <div>
      <h1>{data.title}</h1>
      <button
        type="button"
        className="adults"
        onClick={() => setCurrentPage("movie")}
      >
        Entre adultes
      </button>

      <button type="button" className="kids">
        Avec des enfants
      </button>
    </div>
  );
}

Question.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Question;
