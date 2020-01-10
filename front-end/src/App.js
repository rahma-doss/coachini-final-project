import React from 'react';
import Accueil from './Components/Acceuil/Acceuil'
// import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoachsList from './Components/Coach/CoachsList';
import Activités from './Components/Activits/Activités';
import BlogComponent from './Components/BlogsComponent/BlogComponent';
import Boutique from './Components/Boutiques/ Boutique';
//import CoachCard from './Components/Coach/CoachCard';
//import Connexion from './Components/Connex/Connexion';
// import Footer from './Components/Foter/Footer';
import Description from './Components/Coach/Description';
import Article from './Components/Description_Blog/Article'






function App() {
  return (
    <BrowserRouter>
        {/* <Acceuil/> */}

        {/* <div className="container"> */}
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Coachs" component={CoachsList} />
          <Route path="/Description/:id" component={Description} />
          <Route path="/article/:id" component={Article} />
          <Route exact path="/Activités" component={Activités} />
          <Route exact path="/Blog" component={BlogComponent} />
          <Route exact path="/Boutique" component={Boutique} />
        {/*<Route exact path="/Connexion" component={Connexion} />*/}
        </Switch>
        {/* </div> */}
      
    </BrowserRouter>

  );
}

export default App;
