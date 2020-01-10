import React from "react";
import './Modal.css';
import { Modal, Button } from "react-bootstrap";
import { add, editBlog } from '../../actions/ActionBlog';
import { connect } from 'react-redux';
import uuid from 'uuid';

class ModalBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            picture: this.props.editMode ? this.props.infos.picture : '',
            title: this.props.editMode ? this.props.infos.title : '',
            date: this.props.editMode ? this.props.infos.date : '',
            intro: this.props.editMode ? this.props.infos.intro : '',
            description: this.props.editMode ? this.props.infos.description : '',
            generes: this.props.editMode ? this.props.infos.generes : '',
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    add = () => {
        if (this.props.editMode) {
            this.props.updateBlog({ ...this.state, id: this.props.infos.id })
            this.setState({ show: false });
        } else {
            this.props.addNewBlog({ ...this.state, id: uuid() });
            this.setState({ show: false });
        }
    };
    render() {
        return (
            <div>

                <button type="button" class="btn btn-outline-info waves-effect" className={this.props.editMode ? 'btn btn-outline-info' : 'btn-plus'} variant="primary" onClick={this.handleShow}>
                    {this.props.editMode ? 'Edit' : '+ Add New Blog'}
                </button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title className="tc">{this.props.editMode ? 'EDIT' : 'ADD'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="md-form mb-5">
                                {/* <label>Title:</label> */}
                                <input type="text" onChange={this.handleChange} name="title" value={this.state.title} placeholder="title blog" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Picture:</label> */}
                                <input type="text" onChange={this.handleChange} name="picture" value={this.state.picture} placeholder="link picture" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>Date:</label> */}
                                <input type="text" onChange={this.handleChange} name="date" value={this.state.date} placeholder="date blog" className="form-control validate" />
                            </div>
                        
                            <div className="md-form mb-5">
                                {/* <label>Description:</label> */}
                                <input type="text" onChange={this.handleChange} name="description" value={this.state.description} placeholder="Description blog" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>generes:</label> */}
                                <input type="text" onChange={this.handleChange} name="generes" value={this.state.generes} placeholder="generes blog" className="form-control validate" />
                            </div>
                            <div className="md-form mb-5">
                                {/* <label>trailer:</label> */}
                                <input type="text" onChange={this.handleChange} name="intro" value={this.state.intro} placeholder="intro blog" className="form-control validate" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                         </Button>
                        <Button onClick={this.add} variant="primary">
                            {this.props.editMode ? 'Edit Blog' : 'Add Blog'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewBlog: x => dispatch(add(x)),
        updateBlog: x => dispatch(editBlog(x))
    }
}
export default connect(null, mapDispatchToProps)(ModalBlog);