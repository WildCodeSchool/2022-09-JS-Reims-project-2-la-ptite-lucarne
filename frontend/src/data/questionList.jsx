const allData = [
  {
    label: "age",
    title: "Film entre adultes ou enfants à bord ?",
    answers: [
      {
        text: "Entre Adultes",
        className: "adults",
      },
      {
        text: "Avec des enfants",
        className: "adults",
        answerData: "hello, je veux un film pour enfants",
      },
    ],
  },
  {
    label: "genres",
    title: "Vous voulez ...",
    answers: [
      { text: "Vibrer", className: "adults" },
      { text: "Vous divertir", className: "adults" },
      { text: "Vous cultiver", className: "adults" },
      { text: "Frissonner", className: "adults" },
      { text: "Vous émouvoir", className: "adults" },
    ],
  },
  {
    label: "Vibrer",
    title: "Ouh! on a pas froid aux yeux! = plutôt fusil à pompe ou blaster ?",
    answers: [
      { text: "Fusil à pompe", className: "adults" },
      { text: "Blaster", className: "adults" },
    ],
  },
  {
    label: "Vous divertir",
    title: "Comedies famille animation",
    answers: [
      { text: "Animation/famille", className: "adults" },
      { text: "Comédies", className: "adults" },
    ],
  },
  {
    label: "Vous cultiver",
    title: "Pierre Bellemare ou Arte?",
    answers: [
      { text: "Crimes", className: "adults" },
      { text: "documentaires/guerre/histoire", className: "adults" },
    ],
  },
  {
    label: "Frissonner",
    title: "Tu veux flipper ou flipper ++ ?",
    answers: [
      { text: "suspens/horreur", className: "adults" },
      { text: "drames/mystères", className: "adults" },
    ],
  },
  {
    label: "Vous emouvoir",
    title: "Musique ou téléfilms?",
    answers: [
      { text: "romance/telefilms", className: "adults" },
      { text: "musique", className: "adults" },
    ],
  },
];

export default allData;
