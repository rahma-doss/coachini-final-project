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
import Alerts from './Components/Alert/Alerts'
import Login from './Components/Login'
import Register from './Components/Register'






function App() {
  return (
    <BrowserRouter>
      {/* <Acceuil/> */}
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
      </Switch>
    

    </BrowserRouter>

  );
}

export default App;
