import React from 'react';
import Accueil from './Components/Acceuil/Acceuil'
// import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoachsList from './Components/Coach/CoachsList';
import Activités from './Components/Activits/Activités';
import Blog from './Components/Blogs/Blog';
import Boutique from './Components/Boutiques/ Boutique';
//import CoachCard from './Components/Coach/CoachCard';
//import Connexion from './Components/Connex/Connexion';
// import Footer from './Components/Foter/Footer';
import Description from './Components/Coach/Description';
import Feedback from './Components/Coach/Feedback';
import CommentsForm from './Components/Coach/CommentsForm';


function App() {
  return (
    <BrowserRouter>
        {/* <Acceuil/> */}

         {/* <div className="container">  */}
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Coachs" component={CoachsList} />
          <Route path="/Description/:id" component={Description} />
          <Route path="/Feedback/:id" component={Feedback} />
          <Route path="/CommentsForm/" component={CommentsForm}/>
          <Route exact path="/Activités" component={Activités} />          
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Boutique" component={Boutique} />
        {/*<Route exact path="/Connexion" component={Connexion} />*/}
        </Switch>
       {/* </div>  */}
      
    </BrowserRouter>

  );
}

export default App;
