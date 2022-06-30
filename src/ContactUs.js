import {Accordion, Button, Card, Form, Row, Container, Col} from 'react-bootstrap';
import { useState, CCard, CCardBody, CCardTitle, CCardText, CCol, CRow, CCardImage } from 'react';
import JSONDATA from './gameDesc.json'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import valorant from './omen_val.png'

const ContactUs = () => {
    // const [name, setName] = useState('Sam');

    return ( 
        <div className="contactUs">
            <h4 className='introText'>For MORE INFORMATION</h4>
            <h1>
                Contact Us
                
            </h1>
            <Container>
                <Row className='info' style={{backgroundColor: 'lightgreen', textAlign:'center', padding: '20px'}}>
                    <Col sm={12} lg={4}>
                        <h5 style={{paddingTop:"10px", fontWeight:'bold'}}>Address:</h5>
                        <p>Sawmill street, ottawa K1C 4P9</p> 
                    </Col>

                    <Col sm={12} lg={4}>
                        <h5 style={{paddingTop:"10px", fontWeight:'bold'}}>Phone:</h5>
                        <p>613-555-999</p> 
                    </Col>

                    <Col sm={12} lg={4}>
                        <h5 style={{paddingTop:"10px", fontWeight:'bold'}}>Email:</h5>
                        <p>GameHome12@gmail.com</p>                         
                    </Col>
                </Row>

                <Row>
                    <Form style={{color:'white', marginTop:'50px'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{color:'white'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label style={{color:'white'}}>Comments</Form.Label>
                            <Form.Control type="text" placeholder="comment" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
     );
}
 
export default ContactUs;