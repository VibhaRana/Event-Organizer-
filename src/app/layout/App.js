import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import './styles.css';
import Navbar from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
    <Navbar />
    <Container className = 'main'> 
      <EventDashboard />
    </Container>
   
    </>
  );
}

export default App;
