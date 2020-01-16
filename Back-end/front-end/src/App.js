import React from 'react';
import Accueil from './Components/Acceuil/Acceuil'
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import CoachsList from './Components/Coach/CoachsList';
import Activités from './Components/Activits/Activités';
import Blog from './Components/Blogs/Blog';
import Boutique from './Components/Boutiques/ Boutique';
//import CoachCard from './Components/Coach/CoachCard';
//import Connexion from './Components/Connex/Connexion';
// import Footer from './Components/Foter/Footer';
import Description from './Components/Coach/Description';
import Alerts from './Components/Alert/Alerts'
import Login from './Components/Login'
import Register from './Components/Register'
import Navbar from './Components/Navbar/Navbar';
import setAuthToken from './utiles/setAuthToken'
import FooterR from './Components/Foter/FooterR'
import Formulaire from './Components/Formulaire/FormulaireClient'
import Step2 from './Components/Formulaire/Step2'
import Feedback from './Components/Coach/Feedback';
// import CommentsForm from './Components/Coach/CommentsForm';

if(localStorage.token){
  setAuthToken(localStorage.token)
}


class App extends React.Component {
  render(){
    // const {email}=this.state;
  return (
    <BrowserRouter>
      {/* <Acceuil/> */}
      {/* <Navbar /> */}
      <Alerts/>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Coachs" component={CoachsList} />
        <Route path="/Description/:id" component={Description} />
        <Route exact path="/Activités" component={Activités} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Boutique" component={Boutique} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Formulaire" component={Formulaire} />
        <Route exact path="/Step2" component={Step2} />
        <Route path="/Feedback/:id" component={Feedback} />
          {/* <Route path="/CommentsForm/" component={CommentsForm}/> */}
      </Switch>
    

      <FooterR/>
    </BrowserRouter>

  )};
}

export default App;
