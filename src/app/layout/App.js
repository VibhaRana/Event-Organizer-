import React, {useState} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import './styles.css';
import Navbar from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  const[formOpen, setFormOpen] = useState(false)
  return (
    <>
    <Navbar 
      setFormOpen = {setFormOpen}
    />
    <Container className = 'main'> 
      <EventDashboard 
        formOpen = {formOpen}
      />
    </Container>
   
    </>
  );
}

export default App;
