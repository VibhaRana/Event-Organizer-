import React, {useState} from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'
import cuid from 'cuid'

function EventForm({setFormOpen, setEvents, createEvent, selectedEvent}) {
    const initialValues = selectedEvent ?? {
        
        title : '',
        category : '',
        description : '',
        city: '',
        venue: '',
        date: ''

        
    }
    const[values, setValues] = useState(initialValues)

    function handleFormSubmit(){
        
        // Create event on submitting a form. Add all these properties along with the initialValues
       createEvent({...values, 
        id: cuid(), 
        hostedBy: 'Bob', 
        attendees: [], 
        hostPhotoURL: '/Course Assets/assets/user.png'}
        )
       setFormOpen(false)    //once submit button is pressed, close the form
    //    console.log(values)
    }
    
    //Function to handle various inputs by hooks. Consider it a snippet too.
    function handleInputChange(e){
        const{name, value} = e.target
        setValues({...values, [name] : value})
       
    }
    

    function cancelForm(){
        setFormOpen(false)
    }
    return (
       
        <Segment clearing>
            <Header content = {selectedEvent ? 'Edit the event':'Create new event'}/>
            <Form onSubmit = {handleFormSubmit}>
            <Form.Field>
              <input 
              type = 'text' 
              placeholder = 'Event Title' 
              name = 'title' 
              value={values.title} 
              onChange={(e) => handleInputChange(e)}
              />
            </Form.Field>

            <Form.Field>
              <input 
              type = 'text' 
              placeholder = 'Category'
              name = 'category' 
              value={values.category} 
              onChange={(e) => handleInputChange(e)}
              />
            </Form.Field>

            <Form.Field>
              <input 
              type = 'text' 
              placeholder = 'Description'
              name = 'description' 
              value={values.description} 
             onChange={(e) => handleInputChange(e)}
              />
            </Form.Field>

            <Form.Field>
              <input type = 'text' 
              placeholder = 'City'
              name = 'city' 
              value={values.city} 
              onChange={(e) => handleInputChange(e)}   
              />
            </Form.Field>

            <Form.Field>
              <input type = 'text' 
              placeholder = 'Venue'
              name = 'venue' 
              value={values.venue} 
              onChange={(e) => handleInputChange(e)}    
              />
            </Form.Field>

            <Form.Field>
              <input type = 'date' 
              placeholder = 'Date'
              name = 'date' 
              value={values.date} 
              onChange={(e) => handleInputChange(e)}    
              />
            </Form.Field>

            <Button type = 'submit' floated = 'right' positive content = 'Submit'/>
            <Button onClick = {cancelForm} type = 'submit' floated = 'right' content = 'Cancel'/>
            </Form>
           
        </Segment>
    )
}

export default EventForm
