import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './stylecoach.css';
import CommentsForm from './CommentsForm';


class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.setState(
            this.props.coachs.filter(el => el._id == this.props.match.params.id)[0]
        )
    }
    render() {
        return (
            <div>
                <section id='' class='pt-small'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md-12 mb-medium text-center heading animated-invisible animated fadeInUp animated-visible' data-nekoanim='fadeInUp' data-nekodelay='10' style={{ 'animation-delay': '10ms;' }}>
                                <ol class="text-warning" class='breadcrumb'>
                                    <li>
                                        <Link class="text-warning" aria-current="page" to='/Coachs'><h4>Coachs Sportifs/ </h4></Link>
                                    </li>
                                    <li class='active text-muted' ><h4>{this.state.FirstName} {this.state.LastName}</h4></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container centerElements">
                    <div class='row'>
                        <div class='col-md-6'>
                            <img class='img-responsive img-thumbnail img' src={this.state.Image} alt='Coach Coachini' width= "540px" height="540px"/>
                            <div >

                            {/* <Link className="btn btn-info" to ='/CommentsForm'>Ajouter votre avis</Link> */}
                        </div>
                        </div>
                        <div class='col-md-6'>
                            <h2 class='no-mt font-weight-bold'>Pr&eacute;sentation</h2>
                            <p class="text-justify font-weight-normal ">{this.state.presentation}</p>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>FirstName :</strong> {this.state.FirstName}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark "><strong>LastName :</strong>{this.state.LastName}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>Age :</strong> {this.state.Age}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>Email :</strong> {this.state.Email}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>PhoneNumber :</strong> {this.state.PhoneNumber}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>Ville :</strong> {this.state.Ville}</h5>
                                </li>
                                <li className="list-group-item">
                                    <h5 class="text-dark"><strong>Tarifs :</strong> {this.state.Tarifs}</h5>
                                </li>
                            </ul>
                            <li className="list-group-item">
                                <div class='col-md-12 pt-small pb-small'>
                                    <div class='embed-responsive embed-responsive-16by9'>
                                        <iframe class='embed-responsive-item' width="560" height="315" src={this.state.Video} frameborder="1" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </li>

                            <CommentsForm coachId={this.props.match.params.id}/>
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
export default connect(mapStateToProps, null)(Description);
