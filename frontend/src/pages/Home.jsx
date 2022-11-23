import PropTypes from "prop-types";

function Home({ setCurrentPage }) {
  return (
    <main className="lineaireSimple">
      <div className="Rules">
        <h1 className="=bienvenue">On regarde quoi ce soir ?</h1>
      </div>
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
