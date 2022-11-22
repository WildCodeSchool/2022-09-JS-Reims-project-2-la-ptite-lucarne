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
        genderId1: 28,
        genderId2: 12,
        genderId3: 10759,
        genderId4: 37,
      },
      {
        text: "Blaster",
        className: "adults",
        genderId1: 14,
        genderId2: 878,
        genderId3: 10765,
      },
    ],
  },
  {
    id: 4,
    label: "Vous divertir",
    title: "Plutôt animés et familiaux ou comédies ?",
    answers: [
      {
        text: "Animés et familiaux",
        className: "adults",
        genderId1: 16,
        genderId2: 10751,
        genderId3: 10762,
      },
      { text: "Comédies", className: "adults", genderId1: 35 },
    ],
  },
  {
    id: 5,
    label: "Vous cultiver",
    title: "Plutôt Pierre Bellemare ou Arte ?",
    answers: [
      { text: "Pierre Bellemare", className: "adults", genderId1: 80 },
      {
        text: "Arte",
        className: "adults",
        genderId1: 99,
        genderId2: 10768,
      },
    ],
  },
  {
    id: 6,
    label: "Frissonner",
    title: "Tu veux stresser ou flipper  ?",
    answers: [
      {
        text: "stresser",
        className: "adults",
        genderId1: 18,
        genderId2: 9648,
      },
      {
        text: "flipper",
        className: "adults",
        genderId1: 27,
        genderId2: 53,
      },
    ],
  },
  {
    id: 7,
    label: "Vous émouvoir",
    title: "Plutôt romance et téléfilms ou musique ?",
    answers: [
      {
        text: "romance et téléfilms",
        className: "adults",
        genderId1: 10749,
        genderId2: 10770,
        genderId3: 10766,
      },
      { text: "musique", className: "adults", genderId1: 10402 },
    ],
  },
];

export default allData;
