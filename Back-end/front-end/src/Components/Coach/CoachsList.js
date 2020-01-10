import React from 'react';
import { connect } from "react-redux";
import CoachCard from './CoachCard';
import SpecialiteSearch from './SpecialiteSearch';
import './stylecoach.css'
const CoachList = ({ coachs, SpecialiteSearched }) => {
    return (
        <div>
            <SpecialiteSearch />
            <div class='row'>
                <div class='col-md-12 text-center text-warning font-weight-boldheading  '>
                    <h2 className="font-weight-bold" ><span>&Agrave; Votre Service</span> Notre &eacute;quipe</h2>
                </div>
            </div>
            <div className="listCoachs">
                {
                    coachs.filter(
                        coach =>
                            coach.Specialite.toLocaleLowerCase().includes(SpecialiteSearched.toLocaleLowerCase().trim())
                    ).map(coach => <CoachCard coach={coach} />)
                }
            </div>
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
