import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Feedback extends Component {
    constructor(props) {
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
            <div>
                <section id='' class='pt-small'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md-12 mb-medium text-center heading animated-invisible animated fadeInUp animated-visible' data-nekoanim='fadeInUp' data-nekodelay='10' style={{ 'animation-delay': '10ms;' }}>
                                <ol class='breadcrumb'>
                                    <li>
                                        <Link class="text-warning" aria-current="page" to='/Coachs'><h4>Coachs Sportifs/ </h4></Link>
                                    </li>
                                    <li>
                                        <li class='active text-muted'><h4>{this.state.FirstName} {this.state.LastName}</h4></li>                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="container centerElements">
                <div className="media mb-3">
                <i class='fa fa-comments fa-3x text-warning'></i>

                    {/* <img
                        className="mr-3 bg-light rounded"
                        width="48"
                        height="48"
                        src={`https://api.adorable.io/avatars/48/@adorable.io.png`} alt="user profile"

                    /> */}

                    <div className="media-body p-4 shadow-sm rounded bg-secondry border">
                        
                        <h5 className="mt-0 mb-1 text-muted"><h6 className="mt-0 mb-1 text-muted"></h6>{this.state.Feedback}</h5>
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


export default connect(mapStateToProps, null)(Feedback);