import React from 'react'
import { List, Image } from 'semantic-ui-react'

function EventListAttendee() {
    return (
        <div>
        <List.Item>
          <Image size = 'mini' circular src = '/Course Assets/assets/user.png' />
        </List.Item>
        </div>
    )
}

export default EventListAttendee
