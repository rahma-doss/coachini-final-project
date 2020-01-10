import { SEARCH_PRODUCT } from "../actions/types";
const initState = {
    items: [
        {
            id:1,
            title:'Natation :  Lunette',
            description: "Pour visages fins ou larges, quel que soit votre niveau ou votre environnement de pratique (piscine, eau libre), nos lunettes de natation anti-buée vous garantissent confort, étanchéité et stabilité durant toutes vos séances de nage.",
            price:60,
            image: "https://images-na.ssl-images-amazon.com/images/I/51lCY0C0XGL.jpg"
        },
        {
            id:2,
            title:'TRX : TRX Suspension Straps Kit',
            description: "Le TRX (Total Resistance eXercice) est un accessoire de musculation composé de deux sangles rigides et réglables reliées entre elles à une extrémité. Grâce à des systèmes d’attache adaptés, cette partie commune peut-être fixée sur différents supports tels qu’une porte, un arbre, un poteau, ou encore une barre de traction….",
            price:150,
            image: "http://www.coachfitness.com/blog/wp-content/uploads/2014/02/TRX-fitness.jpg"},
        {
            id:3,
            title:'Chaussure : Nike Zoom Pegasus ',
            description: "La chaussure de running Nike Air Zoom Pegasus 35  a été repensée avec un langage de conception rapide et une transition rapide et fluide.",
            price:180,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cpIE3sQkIQv_9dMrEvNTvOt6ROhTNGr3KLd3ggxoJ4TBoIxJ&s"},
        {
            id:4,
            title:'Whey protéine : Nitro-Tech Gold',
            description: "Whey isolate de la marque MuscleTech sans ingrédients actifs ajoutés.", 
            price:180,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2Ey3IJVV_fmc3pt99YQvA7Dw7HdPwhTMfcRsrv1nc_67LtRw&s"},
        {
            id:5,
            title:'Swiss-ball',
            description: "Pilates side bend fitball exercise workout at gym indoor swiss ball.", 
            price:30,
            image: "data:image/jpeg;base64,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"},
        {
            id:6,
            title:'Pull : Maillot de corps',
            description: "Penwom: Maillot de corps pour homme, fitness, entraînement à la course, stretch, vêtements longs à manches longues, à séchage rapide et à la mode.",
            price:60,
            image: "https://www.lecyclo.com/components/com_virtuemart/shop_image/product/sous-vetement-chaud-pour-cycliste-sous-grand-froid-wp3-outwet_full.jpg"}
    ]
};


const productReducer = (state = initState, action) => {
    switch(action.type){
        case SEARCH_PRODUCT:
            return {
                ...state,
                items: initState.items.filter(el => el.title.toUpperCase().includes(action.payload.toUpperCase().trim()))
            }
        default:
            return state;
    }
};
 
export default productReducer;