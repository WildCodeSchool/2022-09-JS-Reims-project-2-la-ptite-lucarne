function IndianaDetails() {
  return (
    <section>
      <div className="indiana">
        <h2>Indiana Jones et le Royaume du Crâne de Cristal (2008)</h2>
        <img className="india" src="./src/photo/indiana.jpg" alt="india" />

        <button
          type="button"
          className="bande_annonce"
          onClick="location.href='https://www.youtube.com/watch?v=zzQG8xf1IPs'"
        >
          <img
            className="play_button"
            src="photo/play_button.png"
            alt="plateform button"
          />
          <h2 className="bande">Bande Annonce</h2>
        </button>

        <p className="Synopsis">
          Ayant accepté d'aider une jeune rebelle dans une mission personnelle,
          mais qui pourrait le mettre en présence d'un artefact de valeur
          inestimable, le légendaire crâne de cristal d'Akator, Indiana Jones
          met le cap vers une région éloignée du Pérou pour constater que des
          agents soviétiques sont également sur la piste, convaincus que le
          fameux crâne, s'il révèle ses secrets, pourrait les aider à dominer le
          monde.
        </p>

        <h2>Disponible sur</h2>
        <button
          className="button_prime"
          type="button"
          onClick="location.href='https://www.primevideo.com/detail/Indiana-Jones-et-le-Royaume-du-Cr%C3%A2ne-de-Cristal/0H38U9W63MQGAEW4Z6EA48TE5Q?_encoding=UTF8&language=fr_FR'"
        >
          <img
            className="prime_button"
            src="./src/photo/prime_button.png"
            alt="primebutton"
          />
        </button>
      </div>
    </section>
  );
}

export default IndianaDetails;
