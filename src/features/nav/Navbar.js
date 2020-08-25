import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import '../../app/layout/styles.css'

function Navbar({setFormOpen}) {
    return (
        
            <Menu inverted fixed = 'top'>
              <Container>
                  <Menu.Item header>
                      <img src = '/Course Assets/assets/logo.png' alt = 'logo' style={{marginRight: 15}}/>
                  </Menu.Item>
                  <Menu.Item name = 'Events'/>
                  <Menu.Item>
                      <Button positive inverted content = 'Create Event'/>
                  </Menu.Item>
                  <Menu.Item position = 'right'>
                      <Button  basic inverted content = 'Login'/>
                      <Button  basic inverted content = 'Register' style={{marginLeft: '0.5em'}}/>
                  </Menu.Item>
              </Container>
            </Menu>
        
    )
}

export default Navbar
