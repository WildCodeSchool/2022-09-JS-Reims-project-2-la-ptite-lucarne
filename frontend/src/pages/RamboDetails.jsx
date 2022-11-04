function RamboDetails() {
  return (
    <section>
      <div className="logo">
        <img className="Logo_site" alt="Logo" src="assets/logo_rouge.png" />
      </div>

      <div className="indiana">
        <h2>Rambo (1982)</h2>

        <img className="india" alt="indi" src="photo/rambo.jpg" />

        <button
          type="button"
          className="bande_annonce"
          onClick="location.href='https://www.youtube.com/watch?v=Bf00G3yPrIU'"
        >
          <img
            className="play_button"
            src="photo/play_button.png"
            alt="plateform button"
          />
          <h2 className="bande">Bande Annonce</h2>
        </button>

        <p className="Synopsis">
          John Rambo, ancien combattant du Viêt-nam où il a gagné plusieurs
          médailles, est arrêté dans une petite ville pour vagabondage.
          Maltraité, il décide de fuir. La chasse à l’homme commence...
        </p>

        <h2>Disponible sur</h2>
        <button
          type="button"
          onClick="location.href='https://www.primevideo.com/detail/0LCTGXX5850D0ANKSM2SB1TD6R/ref=atv_dl_rdr?tag=justfrrsjd-21'"
        >
          <img
            className="prime_button"
            src="photo/prime_button.png"
            alt="logo prime"
          />
        </button>
      </div>
    </section>
  );
}

export default RamboDetails;
