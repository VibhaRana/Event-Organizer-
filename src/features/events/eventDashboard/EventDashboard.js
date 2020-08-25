import React from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'
import {sampleData} from '../../../app/api/sampleData'

function EventDashboard() {
    return (
        <div>
            <Grid>
            <Grid.Column width={10}>
               <EventList events = {sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
               <EventForm />
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default EventDashboard
