import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <NavLink href='/'>Home</NavLink>
                                <NavLink href='/about'>About</NavLink>
                                <NavLink href='/contacts'>Contacts</NavLink>
                                <NavLink href='/blog'>Blog</NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
