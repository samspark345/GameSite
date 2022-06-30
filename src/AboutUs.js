import {Accordion, Button, Card, Form, Row, Container, Col} from 'react-bootstrap';
import { useState, CCard, CCardBody, CCardTitle, CCardText, CCol, CRow, CCardImage } from 'react';
import JSONDATA from './gameDesc.json'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import valorant from './omen_val.png'

const About = () => {
    // const [name, setName] = useState('Sam');

    return ( 
        <div className="aboutUs">
            <h4 className='introText'>WHO WE ARE</h4>
            <h1>
                About Us
                
            </h1>
            <Container>
                <Row style={{marginTop : '90px'}}>
                    <Col sm={12} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={valorant} />
                            <Card.Body>
                                <Card.Title>Our Mission</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={valorant} />
                            <Card.Body>
                                <Card.Title>The team</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={valorant} />
                            <Card.Body>
                                <Card.Title>Acheivements</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default About;