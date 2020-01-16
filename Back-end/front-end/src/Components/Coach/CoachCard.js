import React from 'react';
import { Link } from 'react-router-dom';
import './stylecoach.css';
const CoachCard = props => {
    return (
        <div className="container cardContainer">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: '20rem'}}>
                        <div className="card-image" >
                            <img src={props.coach.Image} alt="personal profile"  className='image-card'/>
                        </div>
                        <div className="card-content">
                            <span className="card-title"> <h3>{props.coach.FirstName} {props.coach.LastName}</h3> </span>
                            <span className="card-title"> <h5>{props.coach.Specialite}</h5></span>
                            <span className="card-title"> <h5>{props.coach.Ville}</h5></span>
                        </div>
                        <div className="card-action">
                        <Link  to={`/Description/${props.coach._id}`}>Plus D'info </Link>
                        <Link  to={`/Feedback/${props.coach._id}`}> Feedback</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoachCard;