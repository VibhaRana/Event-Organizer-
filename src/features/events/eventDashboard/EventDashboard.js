import React , {useState}from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'
import {sampleData} from '../../../app/api/sampleData'

function EventDashboard({formOpen, setFormOpen}) {
    const[events, setEvents] = useState(sampleData)

    return (
        <div>
            <Grid>
            <Grid.Column width={10}>
               <EventList 
                events = {sampleData}

               />
            </Grid.Column>
            <Grid.Column width={6}>
              {formOpen ?  <EventForm 
                  setFormOpen = {setFormOpen}
              /> : null}
              
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default EventDashboard
