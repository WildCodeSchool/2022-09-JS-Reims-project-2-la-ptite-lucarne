import PropTypes from "prop-types";

function Home({ setCurrentPage }) {
  return (
    <main className="lineaireSimple">
      <p className="Rules">
        <h1>Bienvenue sur la p'tite lucarne</h1>
        <br />
        Nous allons vous poser quelques questions et vous proposer une sélection
        de films.
        <br />
        Bon visionnage
      </p>
      <button
        className="startButton"
        type="button"
        onClick={() => setCurrentPage("question")}
      >
        <div className="text">
          <span className="flicker">
            ST<span className="offset">A</span>
            RT
          </span>
        </div>
      </button>
    </main>
  );
}

Home.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Home;
