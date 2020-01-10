import React from 'react';
import { connect } from "react-redux";
import CardComment from './CardComment';




const CommentList = ({ comments }) => {
    return (
        <div className="container">
            {
                comments.map(comment => <CardComment key={comment.id} comment={comment} />)
            }

        </div>
    );

}



const mapStateToProps = state => {
    return {
        comments: state.CommentsReducer,

    };
};


export default connect(mapStateToProps, null)(CommentList);