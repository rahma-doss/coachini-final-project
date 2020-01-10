import React, { Component } from 'react'
import './Description.css';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon, MDBNavLink } from "mdbreact";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState(
            this.props.blogs.filter(el => el.id == this.props.match.params.id)[0]
        )
    }

    render() {
        return (
            <div className="blog shadow-lg p-3 mb-5 bg-white rounded d-flex ">
                <div className="custom-image">
                    <img className="img-des" src={this.state.picture} />
                </div>
                <div className="custom-card p">
                    <h3>{this.state.title}</h3>
                    <hr />
                    <p>{this.state.intro}</p>
                    <hr />
                    <p>{this.state.date}</p>
                    <hr />
                    <p>{this.state.votes}</p>
                    <div className="w-75 p-3 pl">
                        <strong> Description: </strong>
                        <p>{this.state.description}</p>
                    </div>
                    <hr />
                    <div>
                        <strong className="gen">Generes:</strong>
                        <span class="badge badge-success">{this.state.generes}</span>
                    </div>
                    <hr />
                   
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        blogs: state.ReducerBlog
    }
}
export default connect(mapStateToProps)(Article)