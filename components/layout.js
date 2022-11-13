import { Navbar, Container, Nav, Button, Col, ListGroup, NavDropdown, Form, FormControl, Badge } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import { ConnectButton } from '@web3uikit/web3'


export default function Layout({ children }) {

    return (
        <>
            <Head>
                <link
                    href="../assets/fonts/static/Nunito-Regular.ttf"
                    rel="preconnect"
                />
            </Head>


            <Navbar bg="light" sticky="top" className='border-bottom' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Raffle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Item className='nav-item-top-bu' ><Link legacyBehavior href="/" passHref><a className='text-dark'>Home</a></Link></Nav.Item>

                            <Nav.Item className='nav-item-top-bu' ><Link legacyBehavior href="/about" passHref><a className='text-dark'>About</a></Link></Nav.Item>

                            <NavDropdown title="Works" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">art</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">science</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">commercial</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item className='nav-item-top-bu' ><Link legacyBehavior href="/test" passHref><a className='text-dark'>test</a></Link></Nav.Item>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                            <Badge bg="success" className='pt-3 me-3'>
                            </Badge>




                        </Form>
                    </Navbar.Collapse>
                    <ConnectButton moralisAuth={false} />

                </Container>
            </Navbar>
            <main>{children}</main>

            <Container style={{ height: '400px' }} fluid={true} className='border-top mt-5 bg-dark p-5'>
                <Col md={4}>
                    <ListGroup variant='flush' className='bg-dark'>
                        <ListGroup.Item action className='bg-dark text-light'><Link legacyBehavior href="/about" passHref><a className='text-white'>About</a></Link></ListGroup.Item>
                        <ListGroup.Item action className='bg-dark text-light' ><Link legacyBehavior href="/about" passHref><a className='text-white'>About</a></Link></ListGroup.Item>
                        <ListGroup.Item action className='bg-dark text-light' ><Link legacyBehavior href="/about" passHref><a className='text-white'>About</a></Link></ListGroup.Item>
                        <ListGroup.Item action className='bg-dark text-light' ><Link legacyBehavior href="/about" passHref><a className='text-white'>About</a></Link></ListGroup.Item>
                        <ListGroup.Item action className='bg-dark text-light' ><Link legacyBehavior href="/about" passHref><a className='text-white'>About</a></Link></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Container>
        </>
    )


}