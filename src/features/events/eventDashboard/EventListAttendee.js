import React from 'react'
import { List, Image } from 'semantic-ui-react'

function EventListAttendee({attendee}) {
    return (
        <div>
        <List.Item>
          <Image size = 'mini' circular src = {attendee.photoURL} />
        </List.Item>
        </div>
    )
}

export default EventListAttendee
