/* Question d'ouverture */
const allData = [
  {
    title: "Film entre adultes ou enfants à bord ?",
  },
];

function Question() {
  const data = allData[0];

  return (
    <div>
      <h1>{data.title}</h1>
      <button type="button" className="adults">
        Entre adultes
      </button>

      <button type="button" className="kids">
        Avec des enfants
      </button>
    </div>
  );
}

export default Question;
