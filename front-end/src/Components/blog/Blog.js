import React,{Component} from 'react';
import { connect } from 'react-redux';
import './Blog.css';
import { remove } from '../../actions/ActionBlog';
import { MDBNavLink } from 'mdbreact';
import Modal from '../modalBlog/Modal';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


render() {
 const {blog} = this.props ;
    return (
        <div className="blog-card shadow-lg p-3 mb-5 bg-white rounded ">
            <div className="custom-image">
                <img className="img-blog" src={blog.picture} />
            </div>
            <div className="custom-card">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
                <div className="text-center">
                    <MDBNavLink
                        exact
                        to={`/article/${blog.id}`}
                    >
                        <button type="button" className="btn btn-info btn-rounded">Blog Description</button>
                    </MDBNavLink>
                    <Modal infos={blog} editMode={true} />
                    <button onClick={() => this.props.delete(blog.id)} type="button" class="btn btn-outline-info waves-effect ">Remove</button>
                </div>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = dispatch => {
return {
    delete: id => dispatch(remove(id))
};
};
export default connect(null, mapDispatchToProps)(Blog)
