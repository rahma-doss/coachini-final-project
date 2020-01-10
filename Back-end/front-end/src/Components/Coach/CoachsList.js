import React from 'react';
import { connect } from "react-redux";
import CoachCard from './CoachCard';
import SpecialiteSearch from './SpecialiteSearch';
import Navbar from '../Navbar/Navbar'
import './Coachs.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';


const CoachList = ({ coachs, SpecialiteSearched }) => {
    return (
        <div>
            <Navbar bg={true} />
            <SpecialiteSearch />
            <h3>À votre service Notre équipe</h3>

            {
                coachs.filter(
                    coach =>
                    coach.Specialite.toLocaleLowerCase().includes(SpecialiteSearched.toLocaleLowerCase().trim())  
                    
                ).map(coach => <CoachCard coach={coach} />)
            } 
        </div>
    );

}
const mapStateToProps = state => {
    return {
        coachs: state.CoachReducer,
        SpecialiteSearched: state.SpecialiteFiterReducer,

    };
};



export default connect(mapStateToProps, null)(CoachList);


