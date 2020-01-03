import React from 'react';
import { Link } from 'react-router-dom';


const CoachCard = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card" style={{ width: '20rem' }}>
                        <div className="card-image" >
                            <img src={props.coach.Image} alt="personal profile" />
                        </div>
                        <div className="card-content">
                            <span className="card-title"> <h3>{props.coach.FirstName} {props.coach.LastName}</h3> </span>
                            <span className="card-title"> <h5>{props.coach.Specialite}</h5></span>
                            <span className="card-title"> <h5>{props.coach.Ville}</h5></span>
                        </div>
                        <div class="card-action">
                        <Link  to={`/Description/${props.coach.id}`}>Plus D'info </Link>
                        <Link >Feedback</Link>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CoachCard;
