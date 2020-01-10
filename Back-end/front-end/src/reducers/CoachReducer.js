const initialState = [
    {
        id:"0",
        FirstName: "Yossra",
        LastName: "Antit",
        Age:"26",
        Email:"yossra@gmail.com",
        PhoneNumber: "22456789",
        Specialite: "Fitness trainer",
        Ville: "Mahdia",
        Image: "http://s14.favim.com/orig/160728/adidas-black-fit-girl-fitness-Favim.com-4562264.jpeg",
        Video: "https://www.youtube.com/watch?v=Rc6whZXIZuo",
        description: "Je donne des cours de renforcement général et spécifique (renforcement du dos, des abdos, posture), Streching, LIA, Step, Bodybalance et Zumba.",
        Horaires:"Lundi (8h-13h / 16h-18h), mardi (8h-21h), mercredi (8h-19h), jeudi (8h-21h)",
        Tarifs:"Séance: 45d"
    },
    {
        id:"1",
        FirstName: "Mohamed",
        LastName: "Abbes",
        Age:"26",
        Email:"hamdi@gmail.com",
        PhoneNumber: "55214698",
        Specialite: "Musculation trainer",
        Ville: "Monastir",
        Image: "https://www.copakabana.com/2157-large_default/debardeur-musculation-homme-superman-bleu.jpg",
        Video: ""
    },
    {
        id:"2",
        FirstName: "Fares",
        LastName: "talbi",
        Age:"26",
        Email:"fares@gmail.com",
        PhoneNumber: "22214698",
        Specialite: "Musculation trainer",
        Ville: "Mahdia",
        Image: "",
        Video: ""
    },
    {
        id:"3",
        FirstName: "Nour",
        LastName: "yossfi",
        Age:"24",
        Email:"Nour@gmail.com",
        PhoneNumber: "55214698",
        Specialite: "Fitness trainer",
        Ville: "Sousse",
        Image: "https://img.kyodonews.net/english/public/images/posts/6e18fc63ccfcd0c85b9c6b8e5e0ba83d/image_l.jpeg",
        Video: ""
    }
]

const CoachReducer = (state = initialState, action)=>{
    switch (action.type) {
        default:
      return state;
    }

}

export default CoachReducer;