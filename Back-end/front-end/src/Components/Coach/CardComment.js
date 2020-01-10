import React from 'react';


const CardComment = props => {
    return (
        <div className="media mb-3">
            <div className="media-body p-2 shadow-sm rounded bg-light border">
                <h6 className="mt-0 mb-1 text-muted">{props.comment.name}</h6>
                {props.comment.text}
            </div>
        </div>
    );

}

export default CardComment;