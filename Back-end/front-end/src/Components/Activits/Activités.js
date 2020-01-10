import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Activites.css'


// import { connect } from 'react-redux';



class Activités extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <section id='' class='pt-small navMenu' >
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md-12 mb-medium text-center heading animated-invisible animated fadeInUp animated-visible' data-nekoanim='fadeInUp' data-nekodelay='10' style={{ 'animation-delay': '10ms;' }}>
                                <ol class="text-warning" class='breadcrumb'>
                                    <li>
                                        <Link class="text-warning" aria-current="page" to='/'><h4>Accueil/ </h4></Link>
                                    </li>
                                    <li class='active text-muted' ><h4>Activités</h4></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container centerElements    ">
                    <Carousel className="miniImages">
                        <div>
                            <img src=" http://fr.web.img3.acsta.net/newsv7/19/02/14/10/38/5992914.jpg" />
                            <p className="legend font-weight-bold">Dance classique</p>
                        </div>
                        <div>
                            <img src="https://d2l0wy9lsui5uy.cloudfront.net/c/u/f67894297b6134a6b759b3a9ec15b6cb/2018/06/26064759/y3.jpg" />
                            <p className="legend font-weight-bold">Yoga</p>
                        </div>
                        <div>
                            <img src="http://www.equipement-fitness-musculation.com/wp-content/uploads/2017/04/gym.jpg" />
                            <p className="legend font-weight-bold">Fitness</p>
                        </div>
                        <div>
                            <img src="https://joinfcf.com/wp-content/uploads/2017/08/Zumba.jpg" />
                            <h1 className="legend  font-weight-bold"> Zumba</h1>
                        </div>

                        <div>
                            <img src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/9/c/a/9cab65eb39_117048_crossfit-moyenne.jpg" />
                            <p className="legend font-weight-bold">Crossfit</p>
                        </div>
                        <div>
                            <img src="https://cache.cosmopolitan.fr/data/photo/w1000_ci/1bi/femme-exercices-fitness.jpg" />
                            <p className="legend font-weight-bold">Musculation</p>
                        </div>
                        <div>
                            <img src="https://static.lexpress.fr/medias_2354/w_480,h_270,c_fill,g_north/v1375956994/natation-muscler-vos-fessiers_1205415.jpg" />
                            <p className="legend font-weight-bold">Natation</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         ActiviteCoach: state.ActivitesReducer,
//     }
// }


export default Activités;