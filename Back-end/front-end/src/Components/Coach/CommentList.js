import React from 'react';
import { connect } from "react-redux";
import CardComment from './CardComment';



const CommentList = (props) => {
    console.log(props)
    return (
        <div className="container">
            {
                props.comments
                //.filter(el => String(el.idCoach) === String(this.props.idCoach))
                .map(comment => <CardComment key={comment.id} comment={comment} />)
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