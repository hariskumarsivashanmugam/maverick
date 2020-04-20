import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard';
import SuspectInteraction from './pages/suspectInteraction';
import SuspectAssociationVideos from './pages/suspectAssociationVideos';

function App() {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
      </head>
      <body>
        <SuspectInteraction></SuspectInteraction>
      </body>
    </html>
  );
}

export default App;
