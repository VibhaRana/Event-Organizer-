import React, {useState} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import './styles.css';
import Navbar from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  const[formOpen, setFormOpen] = useState(false)
  const[selectedEvent, setSelectedEvent] = useState(null)

  function handleSelectEvent(event){
    // Update the selectedEvent to whatever event user clicked to view, and then set the form open.
    setSelectedEvent(event)
    setFormOpen(true)
}

  function handleCreateFormOpen(){
    setSelectedEvent(null)
    setFormOpen(true)
  }
  return (
    <>
    <Navbar 
      setFormOpen = {handleCreateFormOpen}
    />
    <Container className = 'main'> 
      <EventDashboard 
        formOpen = {formOpen}
        setFormOpen = {setFormOpen}
        selectEvent = {handleSelectEvent}
        selectedEvent = {selectedEvent}
      />
    </Container>
   
    </>
  );
}

export default App;
