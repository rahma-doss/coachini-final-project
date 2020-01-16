import React from 'react';


const CardComment = props => {
    return (
        <div className="media mb-3">
            <div >
                <h6 >{props.comment.name}</h6>
                {props.comment.text}
            </div>
        </div>
    );

}

export default CardComment;