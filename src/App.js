
import { Fragment } from 'react';
import './App.css';
import Accueil from "./pages/Accueil";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Eleve from './pages/Eleve';  
import Niveau from './pages/Niveau';
import Rapport from './pages/Rapport';
import Login from './pages/Login';
import Listeeleve from './pages/Listeeleve'
import Listeinactif from './pages/Listeinactif'
import ModifierEleve  from './pages/ModifierEleve'
import Addpaiement from './pages/Addpaiement';
import Listeniveau from './pages/Listeniveau';



function App() {
  return (
    
      <>
      <Router>
         <Navbar/>
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/eleve' component={Eleve} />
          <Route   path='/listeeleve'component={Listeeleve}/>
          <Route   path='/listeinactif'component={Listeinactif}/>
          <Route   path='/modifierEleve'component={ModifierEleve}/>
          <Route   path='/Addpaiement'component={Addpaiement}/> 
         <Route path='/listeniveau' component={Listeniveau} />
          <Route exact path='/niveau' component={Niveau} />
          <Route exact path='/rapport' component={Rapport} />
          <Route exact path='/login' component={Login} />
          </Switch>
         
      </Router>
    </>
  
  );
}

export default App;
