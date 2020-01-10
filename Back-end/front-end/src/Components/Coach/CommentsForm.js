import React, { Component } from 'react';
import { connect } from "react-redux";
import { CommentsAdd } from '../../actions/CommentsAction';

class CommentsForm extends Component {
    constructor(props) {
        super(props)
    }

    handleState = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <form className="comment-box">
                    <div className="form-group">
                    <label for="exampleInputEmail1">Ajouter votre nom</label>
                        <input className="form-control input-group" type="text" placeholder="Ajouter votre nom " name="name" onChange={this.handleState} />

                    </div>

                    <div className="form-group">
                        <textarea className="form-control" placeholder="Ajouter votre commentaire" name="text" onChange={this.handleState} />
                    </div>
                </form>
                <input
                    type="button"
                    value="Comment ➤"
                    onClick={() => { this.props.addcomment(this.state) }}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addcomment: comment => dispatch(CommentsAdd(comment))
    }
};


export default connect(null, mapDispatchToProps)(CommentsForm);

