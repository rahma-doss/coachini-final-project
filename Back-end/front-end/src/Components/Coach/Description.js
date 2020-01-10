import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';





class Description extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.setState(
            this.props.coachs.filter(el => el.id == this.props.match.params.id)[0]
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-4 card card-body">
                <img src={this.state.Image} className="thumbnail" alt="photo profile" width="300px" height="445px"/>
                </div>
                
                <div className="col-md-8">
                <h2 className="mb-4">Présentation De L'entraîneur</h2>
                <ul className="list-group">
                <li className="list-group-item">
                <strong>FirstName :</strong> {this.state.FirstName}
                </li>
                <li className="list-group-item">
                <strong>LastName:</strong> {this.state.LastName}
                </li>
                <li className="list-group-item">
                <strong>Age:</strong> {this.state.Age}
                </li>   
                <li className="list-group-item">
                <strong>PhoneNumber:</strong> {this.state.PhoneNumber}
                </li>
                <li className="list-group-item">
                <strong>Specialite:</strong> {this.state.Specialite}
                </li>
                <li className="list-group-item">
                <strong>Zone d'intervention:</strong> {this.state.Ville}
                </li>
                <li className="list-group-item">
                <strong>Description:</strong> {this.state.description}
                </li>
                <li className="list-group-item">
                <strong>Horaires:</strong> {this.state.Horaires}
                </li>
                <li className="list-group-item">
                <strong>Tarifs:</strong> {this.state.Tarifs}
                </li>
                </ul>
                </div>
                </div>
                <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                <div className="col-md-12">
                <Link to='/Coachs'> <strong>Retour à la liste des entraîneurs</strong> </Link>
                </div>
                </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        coachs: state.CoachReducer,
    }
}


export default connect(mapStateToProps,null)(Description);