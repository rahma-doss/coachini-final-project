import { ADD_BLOG, DELETE, SEARCH, EDIT_BLOG } from "../actions/types";
import uuid from 'uuid'

let blogs = [
    {
        picture: "https://www.nafeusemagazine.com/photo/art/default/23342872-25664142.jpg?v=1530200825",
        title: " Les bienfaits du sport sur la santé",
        date: "2019-10-11",
        intro:"Faire du sport est bon pour la santé. Sans doute, puisque cette « vérité » nous est régulièrement rappelée. Mais pourquoi ? Pourquoi une activité physique régulière améliorerait-elle notre santé et nous maintiendrait-elle en forme ? Avant d’expliquer pourquoi, rappelons que diverses études ont montré, entre autres, que bouger régulièrement réduit le risque de développer un diabète, de mourir d’un accident vasculaire cérébral ou d’une crise cardiaque, prévient certains cancers, améliore le moral, fortifie les os, renforce les muscles, augmente les capacités respiratoires, réduit les risques de chutes et de fractures chez la personne âgée, aide à contrôler l’excès de poids, etc. !",
        id: uuid(),
        description: "150 minutes d’activité modérée par semaine: Des études sont aussi menées pour savoir comment les divers systèmes de l’organisme – cardiovasculaire, digestif, endocrinien, nerveux, etc. – sont modifiés par l’exercice physique. Elles suggèrent que les bénéfices résulteraient d’une petite amélioration de nombreux aspects physiologiques et non d’un effet important limité à quelques processus biologiques. Bon pour la mémoire : Dans un premier temps, l’organisme brûle les molécules de glucose stockées dans le foie et les muscles sous forme d’un composé nommé glycogène. Au cours de l’activité physique, le stock de glycogène disponible diminue et les molécules de triglycérides (ils contiennent des acides gras) deviennent la source principale de carburant. La combustion donne certains sous-produits, tels l’acide lactique et le dioxyde de carbone, qui, des muscles, passent dans le sang. La concentration accrue de ces composés provoque des réactions biochimiques dans le cerveau, les poumons et le cœur, lesquelles facilitent leur élimination. Un meilleur transport du cholestérol: D’autres analyses ont montré que l’exercice physique agit sur les lipoprotéines LDL davantage en modifiant leurs propriétés qu’en diminuant leur concentration dans le sang. En fait, les lipoprotéines LDL (et HDL) sont des particules constituées de protéines et de lipides qui transportent le cholestérol, un lipide, dans le sang. Produites dans le foie, les particules LDL acheminent le cholestérol jusqu’aux tissus, où il participe à la fabrication des membranes cellulaires (les particules HDL, quant à elles, transportent le surplus de cholestérol vers le foie, d’où il est excrété dans la bile). Les particules de LDL peuvent présenter différentes tailles. Un moyen de lutter contre le diabète : Quand l’exercice physique est quotidien, les muscles deviennent plus sensibles aux effets de l’insuline. Le pancréas travaille donc moins à la régulation de la glycémie : une concentration plus faible d’insuline fournit les mêmes résultats que les quantités supérieures auparavant. Diverses études suggèrent en outre que l’activité physique favoriserait l’absorption du glucose par une autre voie, indépendante de l’insuline.",
        generes:"Life Style",
        
        
    },
    {
        picture: "https://oppq.qc.ca/wp-content/uploads/Maux-de-dos-au-bureau.jpg",
        title: "Des exercices pour se muscler et detendre le dos au travail ",
        date: "2019-05-15",
        intro:"Pas facile de trouver du temps de faire du sport lorsque l’on a un emploi du temps surbooké. Vous passez votre temps au bureau et n’avez pas le temps de vous rendre à la salle de sport ou d’aller courir après le travail ? Il existe une solution toute simple pour rester en forme : se muscler et se détendre au bureau. Oui on vous le dit, c’est c’est possible !",
        id: uuid(),
        description: "Pour vos jambes et vos abdos : Asseyez vous sur le bord de votre chaise avec un dos droit, tendez vos jambes et levez les 10 secondes puis relâchez. Répétez plusieurs fois. Pour vos pectoraux : Saisissez un carnet, et placez le entre vos mains en position de prière. Pressez-le le plus fort possible pendant 5 secondes puis relâchez.Pour vos abdos : Asseyez vous dos droit, les épaules détendues et essayer de toucher votre cheville avec votre main en vous baissant d’un coté puis de l’autre. Alternez plusieurs fois. Pour vos fesses : Contractez vos fesses pendant 10 secondes et relâchez. Pour les chevilles : Tendez vos jambes et faites des cercles avec votre pied, cela détendra votre jambe. Qui n’a jamais été sujet de maux de dos, qu’il lève la main ? A force de rester assis toute la journée, tout le monde s’est déjà senti tendu même rien qu’un peu ! Pour votre nuque et vos épaules : Restez droit sur votre chaise et inclinez votre tête du côté droit. Vous pouvez vous aider de vos mains pour appuyer légèrement sur votre tête. Recommencez de l’autre côté . Pour votre dos : Mettez vous au bord de votre chaise et baissez vous de sorte à faire comme si vous voulez attraper le plus loin possible devant vous.",
        generes:"Musculation & Travail",
        
    },
    {
        picture: "https://i.ytimg.com/vi/myDccluDzPo/maxresdefault.jpg",
        title: "Comment calculer ses besoins énergétiques ? ",
        date: "2019-09-04", 
        intro:"Besoins énergétiques (BE) = Métabolisme de base (MB) x facteur d’activité (FA)   ",
        id: uuid(),
        description: "Pour calculer les besoins énergétiques d’une femme de 38 ans, mesurant 1,71 m, pesant 69 kg et qui s’entraîne 3 fois 2 h par semaine de façon intense, nous avons utilisé la formule suivante : MB=247-(2,67 X âge) + (401,5 X taille (m))+ (8,6 X poids kg) , BE=MB x FAFA=1,75, MB= 1425,51 kcal/ BE=1425,51*1,75/ BE= 2495 kcalories par jour ; Facteur d’activité (FA) : 1,35 = sédentaire/ 1,55 = faiblement actif/ 1,75 = actif/ 1,95 = très actif ; Chez l'homme : MB=293- (3,8 X âge) + (456,4 X taille m) + (10,12 X poids kg) ",
        generes:"Sport & Santé",
    },
    {
        picture: "http://www.salondessolidarites.org/wp-content/uploads/2018/04/perdre-du-poids.jpg",
        title: "POUR PERDRE DU POIDS ? gérer mieux le pic de glycémie",
        date: "2008-07-16",
        intro:"On entend souvent dire que les glucides font grossir. En réalité, ce n'est pas toujours vrai...",
        id: uuid(),
        description: "Quand \n on consomme des aliments contenant des glucides, les sucres qu'ils contiennent sont stockés soit sous forme de réserves musculaires (qui ne font pas grossir), soit sous forme de graisses. Cela dépend de l'intensité du pic de glycémie qui fait suite à la consommation de l'aliment glucidique. \r Plus il est élevé, plus l'organisme va stocker de graisses. Pour éviter les pics de glycémie, c'est simple, il faut savoir choisir les bons glucides et quand et comment les consommer. Saviez-vous par exemple qu'une pâtisserie consommée loin des repas n'aura pas du tout le même effet sur l'organisme que si elle est consommée à la fin d'un repas ou juste après une activité sportive ? De même, consommer des pâtes avec des légumes fait moins grossir que des pâtes seules. Ou encore, il vaut mieux manger une pomme entière que boire son jus seul..",
        generes:"Nutrition ",
        
    },
    {
        picture: "https://static.wixstatic.com/media/d2f9e7aeaf354863844dcbada87ee98b.jpg/v1/fill/w_542,h_330,al_c,q_80,usm_0.66_1.00_0.01/CrossFit%20Class.webp",
        title: "CROSSFIT : LES EFFETS CARDIOVASCULAIRES",
        date: "2019-12-01",
        intro:"Le CrossFit est une méthode de conditionnement physique, inspiré des camps d’entraînement militaire, à la mode. Il fait partie des activités en plein développement à l’image du cross-training, du circuit-training… Il combine des activités d’exercices fractionnés à haute intensité",        id: uuid(),
        description: "Le CrossFit s’articule autour de nombreuses séquences répétitives s’étalant de quelques secondes à plusieurs dizaines de minutes : pompes (pushup), fentes avants (lunges), squats, abdominaux (crunches) ou encore burpees. Au total, une séance complète peut durer de 20 minutes à 1 heure. Sur un cœur sain et/ou en l’absence de risque cardiovasculaire, le CrossFit, en plus d’améliorer les capacités physiques, a un effet préventif sur le plan cardiovasculaire, mais a également des bénéfices sur le plan psychologique , Avant de se lancer, il est aussi indispensable d’avoir été conseillé sur la bonne pratique de l’activité. En effet, le risque principal est de se mettre à ce type de pratique intense sans préparation ni évaluation préalable, en particulier chez le sédentaire ou inactif pouvant cumuler des facteurs de risque cardiovasculaires",
        generes:"Crossfit",
        },
        
    
]

const ReducerBlog = (state = blogs, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [
                ...state,
                action.payload
            ]
        case DELETE:
            return (
                state.filter(el => el.id !== action.payload)
            )
        case SEARCH:
            return blogs.filter(el => el.title.toUpperCase().includes(action.payload.toUpperCase().trim()))
        case EDIT_BLOG:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state;
    }
};

export default ReducerBlog;