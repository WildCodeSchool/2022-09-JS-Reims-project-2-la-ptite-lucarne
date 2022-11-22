const allData = [
  {
    id: 1,
    label: "age",
    title: "Film entre adultes ou enfants à bord ?",
    answers: [
      {
        text: "Entre Adultes",
        className: "adults",
        nextQuestionId: 2,
      },
      {
        text: "Avec des enfants",
        className: "adults",
        nextQuestionId: 2,
        answerData: "Filtre -18 ans activé",
      },
    ],
  },
  {
    id: 2,
    label: "genres",
    title: "Vous voulez ...",
    answers: [
      { text: "Vibrer", className: "adults", nextQuestionId: 3 },
      { text: "Vous divertir", className: "adults", nextQuestionId: 4 },
      { text: "Vous cultiver", className: "adults", nextQuestionId: 5 },
      { text: "Frissonner", className: "adults", nextQuestionId: 6 },
      { text: "Vous émouvoir", className: "adults", nextQuestionId: 7 },
    ],
  },
  {
    id: 3,
    label: "Vibrer",
    title: "Ouh! on a pas froid aux yeux! = plutôt fusil à pompe ou blaster ?",
    answers: [
      {
        text: "Fusil à pompe",
        className: "adults",
      },
      {
        text: "Blaster",
        className: "adults",
      },
    ],
  },
  {
    id: 4,
    label: "Vous divertir",
    title: "Plutôt Goldorak ou Tuche ?",
    answers: [
      {
        text: "Animés",
        className: "adults",
      },
      { text: "Comédies", className: "adults" },
    ],
  },
  {
    id: 5,
    label: "Vous cultiver",
    title: "Plutôt policier ou docu ?",
    answers: [
      { text: "Menottes", className: "adults", genderId1: 80 },
      {
        text: "Documentaires",
        className: "adults",
      },
    ],
  },
  {
    id: 6,
    label: "Frissonner",
    title: "Tu veux stresser ou flipper  ?",
    answers: [
      {
        text: "Stresser",
        className: "adults",
      },
      {
        text: "Flipper",
        className: "adults",
      },
    ],
  },
  {
    id: 7,
    label: "Vous émouvoir",
    title: "Plutôt plus belle la vie ou salle de concert ?",
    answers: [
      {
        text: "Romance et téléfilms",
        className: "adults",
      },
      { text: "Musique", className: "adults" },
    ],
  },
];

export default allData;
