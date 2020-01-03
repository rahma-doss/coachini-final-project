import React from 'react';
import { connect } from "react-redux";
import CoachCard from './CoachCard';
import SpecialiteSearch from './SpecialiteSearch';



const CoachList = ({ coachs,SpecialiteSearched}) => {
    return (
        <div>
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


