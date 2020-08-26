import React , {useState}from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'
import {sampleData} from '../../../app/api/sampleData'

function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}) {
    const[events, setEvents] = useState(sampleData)
   

    // Create handler to create events
    function handleCreateEvent(event){
        //This gonna add additional event along with sampleData which is currently stored in state - 'events'
        setEvents([...events, event])

    }

    

    return (
        <div>
            <Grid>
            <Grid.Column width={10}>
               <EventList 
                events = {events}
                selectEvent = {selectEvent}
               />
            </Grid.Column>
            <Grid.Column width={6}>
              {formOpen ?  
              <EventForm 
                setFormOpen = {setFormOpen}
                setEvents = {setEvents}
                createEvent = {handleCreateEvent}
                selectedEvent = {selectedEvent}
                key = {selectedEvent ? selectedEvent.id : null}
              /> : null}
              
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default EventDashboard
