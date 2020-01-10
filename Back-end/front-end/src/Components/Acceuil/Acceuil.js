import React from 'react'
import Navbar from  '../Navbar/Navbar'
import Main from '../Main'
import Section2 from '../sectiontest'
import '../ComponentStyle.css';

class Accueil extends React.Component {
    render() {
        return (<main>
            <div className="backgroundImg">

                <Navbar />
                {/* <video src='https://www.youtube.com/watch?v=Bdo_I-4GF5M' type='video/mp4'></video> */}
                <div className="sf-bnr-text text-center">
                    <div className="conteneur">
                        <strong class="text-uppercase"> DEVENEZ DÈS MAINTENANT LA </strong>
                        <strong> MEILLEURE VERSION DE VOUS-MÊME ! </strong>
                    </div>
                </div>

                <div className="sf-search-form-element">

                    <div className="category-select d-flex">

                        <div className="type-search">
                            <input type="submit" value="je démarre mon entrainement" class="btn btn-block btn-primary " />
                        </div>

                    </div>

                </div>

            </div>

            <Main />
            <Section2/>

        </main>
        )
    }
}

export default Accueil