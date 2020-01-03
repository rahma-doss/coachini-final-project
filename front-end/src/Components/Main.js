import React from 'react'
import './ComponentStyle.css';

class Main extends React.Component {
    render() {
        return (<main id='skew1' className='section-main'>
            <div className='Part1'>
                <div className='Part1-text'>
                    <p> Coacht-INI est le premier service de coaching sportif et nutrition. A partir de vos réponses à un questionnaire (objectifs,
                    capacités physiques, santé, disponibilités...)</p>
                    <h1> UN PROGRAMME SPORT ET NUTRITION PERSONNALISÉ</h1>
                </div>
                <div className='phone'>
                    <img src='https://www.stickpng.com/assets/images/5a4244f818ce7e85ae60ddef.png' />
                </div>
            </div>

            <div className='Part2'>
                <div class="carousel">
                    <img className='img1' src="https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress" alt="Lose weight" sizes="219px" srcset="https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress&amp;w=200 200w,https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress&amp;w=278 278w,https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress&amp;w=156 156w,https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress&amp;w=414 414w,https://freeletics-cdn.imgix.net/assets/main/images/lose-weight-dec54a29c7effea0c2c57c58b5de1077.jpg?auto=format%2Ccompress&amp;w=512 512w" />
                    <img className='img2' src="https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress" alt="Gain muscle" sizes="239px" srcset="https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress&amp;w=200 200w,https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress&amp;w=278 278w,https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress&amp;w=356 356w,https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress&amp;w=434 434w,https://freeletics-cdn.imgix.net/assets/main/images/gain-muscle-a81eeca71acbe33d713b6f1224ddcb51.jpg?auto=format%2Ccompress&amp;w=512 512w" ></img>
                    <img className='img3' src="https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress" alt="Stay active" sizes="239px" srcset="https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress&amp;w=200 200w,https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress&amp;w=278 278w,https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress&amp;w=356 356w,https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress&amp;w=434 434w,https://freeletics-cdn.imgix.net/assets/main/images/stay-active-cfaae0ab1e38bc73b2bef4e1f5bce0b5.jpg?auto=format%2Ccompress&amp;w=512 512w" />
                </div>
                <div className='Part2-text'>
                    <h1>Des parcours d'entraînement personnalisés pour vous</h1>
                    <p>Votre Coach analyse votre forme physique et vos objectifs. Et, plus vous vous entraînez, plus il s'adapte à vous.</p>
                <button className='Part2-button'>Choisir votre parcours</button>
                </div>
            </div>


        </main>

        )
    }
}

export default Main