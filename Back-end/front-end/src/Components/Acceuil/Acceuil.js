import React from 'react'
import Navbar from  '../Navbar/Navbar'
import Main from '../Main'
import Section2 from '../sectiontest'
import '../ComponentStyle.css';
import {connect} from 'react-redux'
import { loadUser } from '../../actions/AuthenAction';
import { Link } from 'react-router-dom';

class Accueil extends React.Component {
    componentDidMount (){
        this.props.loadUser()
    }
    render() {
        return (<main>
            <div className="backgroundImg">

                <Navbar bg={false}/>
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
                         <Link to={`/Formulaire`} >  <input type="button" value="je démarre mon entrainement" class="btn btn-block btn-primary " /> </Link>
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

export default connect (null, {loadUser}) (Accueil)