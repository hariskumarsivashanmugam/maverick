import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import SuspectInteraction from './pages/suspectInteraction';
import SuspectAssociationVideos from './pages/suspectAssociationVideos';

const $ = window.$;
function App() {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"/>
      </head>
      <body>

      <Switch>
         <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/suspectInteraction" component={SuspectInteraction}/> 
          <Route exact path="/suspectAssociationVideos" component={SuspectAssociationVideos}/>
        </Switch>

      </body>
    </html>
  );
}

export default App;
