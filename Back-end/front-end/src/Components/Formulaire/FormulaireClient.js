import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Formulaire.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';



const Formulaire = () => {
    return (
        <div>
             <Navbar bg={true}/>

            <div className='Form'>
                <MDBCol className='coll' >
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardBody>
                            <MDBCardTitle>Quel est votre sexe ?</MDBCardTitle>
                            <MDBCardText>
                                Votre Coach est prêt à développer un programme pour vous. Voici la première étape.
                             </MDBCardText>
                            <MDBBtn className='button' href="#">
                            <div style={{color:'none'}} className="_3fzkTjcGza">
                            <Link to='/Step2'>  <input type="radio" id="gender2" name="gender" /></Link>
                                    <label for="gender2" className="_1FpUlJoFHD_c">
                                        <svg viewBox="0 0 43 44" xmlns="http://www.w3.org/2000/svg" className="el5HTicLaW2H" >
                                            <path fill="currentColor" d="M39 6.652l-6.618 6.618A18.43 18.43 0 0 1 37 25.5C37 35.718 28.718 44 18.5 44S0 35.718 0 25.5 8.282 7 18.5 7c4.178 0 8.032 1.384 11.129 3.72L36.349 4h-6.474C28.839 4 28 3.105 28 2s.84-2 1.875-2h11.25a1.868 1.868 0 0 1 1.326.55A1.868 1.868 0 0 1 43 1.874v11.25C43 14.161 42.105 15 41 15s-2-.84-2-1.875V6.652zM33.3 25.5c0-8.175-6.625-14.8-14.8-14.8S3.7 17.325 3.7 25.5s6.625 14.8 14.8 14.8 14.8-6.625 14.8-14.8z">
                                            </path>
                                        </svg>
                                        <strong style={{color: 'white'}} > Homme</strong>
                                    </label>
                                </div>
                            </MDBBtn>

                            <MDBBtn className='button' href="#">
                            <form className="wYsr5qdPvChf">
                                    <div className="_3fzkTjcGza">
                                       <Link to='/Step2'> <input type="radio" id="gender1" name="gender" checked="" /></Link>
                                        <label for="gender1" className="_1FpUlJoFHD_c">
                                            <svg viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg" className="lPHglfJZph1e">
                                                <path fill="currentColor" d="M14 36v-4.124C6.107 30.892 0 24.16 0 16 0 7.163 7.163 0 16 0s16 7.163 16 16c0 8.16-6.107 14.892-14 15.876V36h4a2 2 0 0 1 0 4h-4v6a2 2 0 0 1-4 0v-6h-4a2 2 0 0 1 0-4h4zm14-20c0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12 12-5.373 12-12z">
                                                </path>
                                            </svg>
                                            <strong style={{color: 'white'}}> Femme</strong>
                                        </label>
                                    </div>

                                </form>
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        </div>
    );

}
// const mapStateToProps = state => {
//     return {
//         coachs: state.CoachReducer,
//         SpecialiteSearched: state.SpecialiteFiterReducer,

//     };
// };



export default Formulaire;
