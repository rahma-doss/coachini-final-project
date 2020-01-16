import {GET_COACHS} from '../actions/types';


// const initialState = [
//     {
//         id:"0",
//         FirstName: "Yossra",
//         LastName: "Antit",
//         Age:"26",
//         Email:"yossra@gmail.com",
//         PhoneNumber: "22456789",
//         Specialite: "Fitness trainer",
//         presentation: "Je donne des cours de renforcement général et spécifique (renforcement du dos, des abdos, posture), Streching, LIA, Step, Bodybalance et Zumba. J´ai commencé au sein d´un grand réseau de salles tunisiennes, renommées dans le fitness. J´ai travaillé à tunis, créé ma clientèle, pris en compte la demande de chacun afin de m´adapter au mieux à mon public.",
//         Ville: "Mahdia",
//         Image: "https://scontent.ftun3-1.fna.fbcdn.net/v/t31.0-8/p960x960/29060991_1765683203490297_5493299490560870038_o.jpg?_nc_cat=105&_nc_ohc=qHS3xjDiqRkAQkwRlzgu1dMKTg01lgDlizWf0RyIXzHLCtaCDxeqZ18WQ&_nc_ht=scontent.ftun3-1.fna&oh=1b34d51fa056802263d4a1cf4701e836&oe=5E9D9C67",
//         Video: "https://www.youtube.com/embed/jONN6Ydw92g",
//         Tarifs:"45d par seance",
//         Feedback:"J´ai 31 ans. Je n´ai jamais été très sportive, un peu de tennis, un peu de danse. J´ai commencé à courir assez tard, à 25 ans, motivée par une amie sportive et coureuse. J´ai fais un premier semi-marathon. Puis j´ai eu 2 petits garçons. Entre les deux grossesses je n´ai pas eu vraiment le temps de reprendre la course. Après mon 2ème enfant, surchargée par les obligations familiales et professionnelles, je n´arrivais pas à me motiver pour faire du sport régulièrement. J´ai donc décidé de contacter un coach. J´ai trouvé Yossra via internet.Yossra est tout le contraire, elle est à l´écoute, calme, posé et très professionnel.Elle comprend les objectifs et sais y répondre.Elle a des connaissance très pointues en matière de sport, de physiologie, de nutrition. Mais elle peut aussi parler de cinéma, de peinture, de musique!..."
//     },
//     {
//         id:"1",
//         FirstName: "Maha",
//         LastName: "Guirat",
//         Age:"28",
//         Email:"maha@gmail.com",
//         PhoneNumber: "24478969",
//         Specialite: "Dance classique trainer",
//         presentation:"Je vous propose de vous accompagner afin d’améliorer votre quotidien, peut-être emmener votre corps dans ses retranchements pour qu’il en ressorte plus fort, et ainsi vous permettre de vous surpasser.Je serai là pour vous aider à obtenir les résultats souhaités en tenant toujours compte de vos possibilités.",
//         Ville: "Monastir",
//         Image: "http://www.viptrainers.fr/images/coachsv2/kestenberg.jpg",
//         Video: "https://www.youtube.com/embed/QqekpFn_NtQ",
//         Tarifs:"45d par seance",
//         Feedback:"J´ai eu la chance de travailler avec Maha durant la saison cadet 2016-2017. Dès l´entame de la saison, Maha a fait preuve d´un engouement et d´une application énorme. Elle nous a apporté ses connaissances de préparateur physique, qu´elle a su rendre ludique et abordable à ces jeunes sportifs, dans les 40mn qui lui était impartis durant les pratiques."
//     },
//     {
//         id:"2",
//         FirstName: "Hamdi",
//         LastName: "Doss",
//         Age:"26",
//         Email:"hamdi@gmail.com",
//         PhoneNumber: "55214698",
//         Specialite: "Natation trainer",
//         presentation:"Je suis là pour vous accompagner et accomplir vos objectifs sportifs, à l´aide de cours personnalisés et adaptés. Nous travaillerons ensemble afin d´obtenir des résultats satisfaisants et rapides selon vos besoins.Mon expérience dans les métiers du sport et de l´activité physique me permet de vous proposer une gamme étendue d´exercices adaptés à vos besoins et vos envies",
//         Ville: "Monastir",
//         Image: "https://scontent.ftun3-1.fna.fbcdn.net/v/t31.0-8/p720x720/19983695_1475318942526250_1778542333863743389_o.jpg?_nc_cat=104&_nc_ohc=B7ZYMnObk6QAQn6JkqxAQS27LQdyQQBchk9rdf3il5cMKMbF4fs4dK_dQ&_nc_ht=scontent.ftun3-1.fna&oh=ae978060afa6a71828a4b8267766cb8d&oe=5E9A2D95",
//         Video: "https://www.youtube.com/embed/2dMlkmKdBS0",
//         Tarifs:"50d par seance",
//         Feedback:"Toujours Hamdi se démarque par une grande patience et une flexibilité à toute épreuve. Hamdi sait transformer un court entraînement en une séance super efficace, totalement adaptée aux besoins du moment. Son accompagnement et son expertise permettent d´atteindre de nombreux objectifs, sans le facteur stress. J´apprécie tout particulièrement ses conseils nutritionnels, sa rigueur, son optimisme ainsi que sa qualité d´écoute. La perle rare du coaching !"
//     },
//     {
//         id:"3",
//         FirstName: "Ahmed",
//         LastName: "brahim",
//         Age:"27",
//         Email:"ahmed@gmail.com",
//         PhoneNumber: "27789654",
//         Specialite: "Yoga trainer",
//         presentation:"J´enseigne et transmet cette passion avec joie, précision et pédagogie, quelque soit votre niveau, et vous aide à diminuer votre stress, assouplir votre corps, améliorer votre santé physique et mentale afin de retrouver une vie équilibrée.",
//         Ville: "Sousse",
//         Image: "https://i.pinimg.com/originals/14/5b/f7/145bf7b083b8fc842967682312e83ca9.jpg",
//         Video: "https://www.youtube.com/embed/wBQ_VTdLYUc",
//         Tarifs:"55d par seance",
//         Feedback:" Voilà ,plus de deux ans que je m´entraîne avec Ahmed... et les résultats sont là ! Ces rendez vous réguliers m´ont permis d´améliorer ma forme et de retrouver le goût pour le sport."
//     },
//     {
//         id:"4",
//         FirstName: "Mohamed",
//         LastName: "Abbes",
//         Age:"26",
//         Email:"mohamed@gmail.com",
//         PhoneNumber: "55214698",
//         Specialite: "Musculation trainer",
//         presentation:"Je donne des cours de renforcement général et spécifique (renforcement du dos, des abdos, posture), Streching, LIA, Step, Bodybalance et Zumba. J´ai commencé au sein d´un grand réseau de salles tunisiennes, renommées dans le fitness. J´ai travaillé à , créé ma clientèle, pris en compte la demande de chacun afin de m´adapter au mieux à mon public.",
//         Ville: "Monastir",
//         Image: "https://www.le-bon-coach.fr/fr/dimg/fr-coachs-coach-sportif-buchet-rodolphe//rodolphe-buchet/coach/musculation/250033-%C3%A0-villeurbanne.jpg",
//         Video: "https://www.youtube.com/embed/NH7-Dv2k09E",
//         Tarifs:"60d par seance",
//         Feedback:"J´ai rencontré Mohamed et avons commencé l´entraînement à raison d´une fois par semaine. Nous avons beaucoup travaillé la résistance à l´effort par des exercices cardio et de renforcement. En quelque mois ma forme est revenue et mon corps se remodelait visiblement. Merci Mohamed!"
//     },
//     {
//         id:"5",
//         FirstName: "Wajdi",
//         LastName: "abid",
//         Age:"26",
//         Email:"wajdi@gmail.com",
//         PhoneNumber: "55214698",
//         Specialite: "Crossfit trainer",
//         presentation:"Coach depuis 2014, J´ai vécu de grandes aventures et coaché aussi bien des sédentaires que des athlètes de haut niveau (national et international). Ceci m´a permis d´élargir mes connaissances et compétences, de rencontrer et travailler avec de grands coachs, américains notamment, et ainsi apprendre et améliorer mes techniques de travail.",
//         Ville: "Sousse",
//         Image: "https://i.pinimg.com/originals/53/93/32/539332ba1a0befaa8b495c51227555a2.jpg",
//         Video: "https://www.youtube.com/embed/3YC9Z7GheJc",
//         Tarifs:"60d par seance",
//         Feedback:"J´ai rencontré Wajdi et avons commencé l´entraînement à raison d´une fois par semaine. Nous avons beaucoup travaillé la résistance à l´effort par des exercices cardio et de renforcement. En quelque mois ma forme est revenue et mon corps se remodelait visiblement. Merci Wajdi!"
//     },
//     {
//         id:"6",
//         FirstName: "Ones",
//         LastName: "Guirat",
//         Age:"25",
//         Email:"ones@gmail.com",
//         PhoneNumber: "24456789",
//         Specialite: "Zumba trainer",
//         presentation:"J´enseigne et transmet cette passion avec joie, précision et pédagogie, quelque soit votre niveau, et vous aide à diminuer votre stress, assouplir votre corps, améliorer votre santé physique et mentale afin de retrouver une vie équilibrée.Le Yoga est là pour tous, sans compétition, C´est un moment privilégié de reconnexion avec soi même.",
//         Ville: "Sousse",
//         Image: "https://images-na.ssl-images-amazon.com/images/I/7162IP4ai6L._SX466_.jpg",
//         Video: "https://www.youtube.com/embed/JJLKX9XbCw0",
//         Tarifs:"55d par seance",
//         Feedback:"Mona: Ones est très à l écoute, c´est un fin psychologue et un sacré COACH ! elle me pousse toujours au delà de mes limites et mes efforts payent car je vois mon corps se dessiner. Elle est sérieux et surtout très professionnel!"
//     },
// ]
const CoachReducer = (state = [], action)=>{
    switch (action.type) {
        case GET_COACHS:
            return action.payload

        default:
      return state;
    }
}
export default CoachReducer;