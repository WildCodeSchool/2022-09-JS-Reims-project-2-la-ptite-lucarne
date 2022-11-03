function Indiana() {
  return (
    <section>
      <div className="logo">
        <img className="Logo_site" alt="Logo" src="assets/logo_rouge.png" />
      </div>
      <div className="indiana">
        <h1>Indiana Jones et le Royaume du Crâne de Cristal (2008)</h1>
        <img className="india" alt="indi" src="photo/indiana.jpg" />

        <button
          type="button"
          className="seen"
          onClick="location.href='pres_rambo.html'"
        >
          Déja Vu
        </button>
        <button
          type="button"
          className="look"
          onClick="location.href='indiana.html'"
        >
          Voir ce film
        </button>
      </div>
    </section>
  );
}
export default Indiana;
