import React from 'react'
import './Formulaire.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from "mdbreact";
import Navbar from '../Navbar/Navbar'

class Step2 extends React.Component {
    render() {
        return (
            <div className="step2">
                <Navbar bg={true} />
                <MDBContainer>
                    <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                        <MDBCardBody>
                            <MDBCardTitle>Quel est votre niveau de forme physique actuel ?</MDBCardTitle>
                            <MDBCardText>
                                Pour obtenir un programme d'entraînement dont le niveau de difficulté est adapté à vous, choisissez l'option qui vous correspond le mieux.
                            </MDBCardText>
                            {/* <MDBBtn color="primary">
                             </MDBBtn> */}
                            <form className="_1MSIvoFn2511">
                                <div className="_3fzkTjcGza_h">
                                        <label for="fitnessLevel_1" className="_2eZSOO7nUJjF">
                                            <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="_2QxVQ_ylS9ec" style={{display: "inline-block", height: "1em"}}f>
                                                <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                </rect>
                                                <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                </rect>
                                                <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                </rect>
                                                <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                </rect>
                                                <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                </rect>
                                                <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                </rect>
                                            </svg>
                                            <div>
                                                <strong>  Pas en forme</strong><br/>
                                                <small> Si je suis assis par terre, j'ai du mal à me relever</small>
                                            </div>
                                        </label>
                             </div>
                                    <div className="_3fzkTjcGza_h">
                                        <input type="radio" id="fitnessLevel_2" name="fitnessLevel"/>
                                            <label for="fitnessLevel_2" className="_2eZSOO7nUJjF">
                                                <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="sTfISOrRbYI1" style={{display: "inline-block", height: "1em"}}>
                                                    <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                    </rect>
                                                    <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                    </rect>
                                                    <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                    </rect>
                                                    <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                    </rect>
                                                    <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                    </rect>
                                                    <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                    </rect>
                                                </svg>
                                                <div>
                                                    <strong> Novice en fitness</strong><br/>
                                                    <small>Faire de l'exercice ne fait pas partie de mon quotidien</small>
                                                </div>
                                            </label>
                             </div>
                                        <div className="_3fzkTjcGza_h">
                                            <input type="radio" id="fitnessLevel_3" name="fitnessLevel"/>
                                                <label for="fitnessLevel_3" className="_2eZSOO7nUJjF">
                                                    <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="JZ2CRM2GvggY" style={{display: "inline-block", height: "1em"}}>
                                                        <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                        </rect>
                                                        <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                        </rect>
                                                        <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                        </rect>
                                                        <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                        </rect>
                                                        <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                        </rect>
                                                        <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                        </rect>
                                                    </svg>
                                                    <div>
                                                        <strong>
                                                            Entraînement occasionnel</strong><br/>
                                                        <small>Je fais de l'exercice de temps en temps et suffisamment pour transpirer</small>
                                                    </div>
                                                </label>
                             </div>
                                            <div className="_3fzkTjcGza_h">
                                                <input type="radio" id="fitnessLevel_4" name="fitnessLevel"/>
                                                    <label for="fitnessLevel_4" className="_2eZSOO7nUJjF">
                                                        <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="_3EtaSr1aDvEf" style={{display: "inline-block", height: "1em"}}>
                                                            <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                            </rect>
                                                            <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                            </rect>
                                                            <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                            </rect>
                                                            <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                            </rect>
                                                            <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                            </rect>
                                                            <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                            </rect>
                                                        </svg>
                                                        <div>
                                                            <strong>Entraînement régulier</strong><br/>
                                                            <small> Je fais de l'exercice au moins deux fois par semaine.</small>
                                                        </div>
                                                    </label>
                             </div>
                                                <div className="_3fzkTjcGza_h">
                                                    <input type="radio" id="fitnessLevel_5" name="fitnessLevel"/>
                                                        <label for="fitnessLevel_5" className="_2eZSOO7nUJjF">
                                                            <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="_1eaai9KHVd_n" style={{display: "inline-block", height: "1em"}}>
                                                                <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                                </rect>
                                                                <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                                </rect>
                                                                <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                                </rect>
                                                                <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                                </rect>
                                                                <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                                </rect>
                                                                <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                                </rect>
                                                            </svg>
                                                            <div>
                                                                <strong>  Le sport fait partie de ma vie</strong><br/>
                                                                <small> Je suis adepte du fitness et m'entraîne la plupart des jours</small>
                                                            </div>
                                                        </label>
                             </div>
                                                    <div className="_3fzkTjcGza_h">
                                                        <input type="radio" id="fitnessLevel_6" name="fitnessLevel" checked=""/>
                                                            <label for="fitnessLevel_6" className="_2eZSOO7nUJjF">
                                                                <svg viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg" className="-h4sLznNgBrN" style={{display: "inline-block", height: "1em"}}>
                                                                    <rect fill="currentColor" x="0" y="20" width="4" height="4">
                                                                    </rect>
                                                                    <rect fill="currentColor" x="6" y="16" width="4" height="8">
                                                                    </rect>
                                                                    <rect fill="currentColor" x="12" y="12" width="4" height="12">
                                                                    </rect>
                                                                    <rect fill="currentColor" x="18" y="8" width="4" height="16">
                                                                    </rect>
                                                                    <rect fill="currentColor" x="24" y="4" width="4" height="20">
                                                                    </rect>
                                                                    <rect fill="currentColor" x="30" y="0" width="4" height="24">
                                                                    </rect>
                                                                </svg>
                                                                <div>
                                                                    <strong> Athlète confirmé</strong><br/>
                                                                    <small> Oh, croyez-moi. Je suis très en forme</small>
                                                                </div>
                                                            </label>
                             </div>
                             </form>

                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

                                    </div>
                                    )
                                }
                            
                            
                            }
                            
export default Step2