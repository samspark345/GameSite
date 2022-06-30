import {Accordion, Button, Card} from 'react-bootstrap';
import { useState, CCard, CCardBody, CCardTitle, CCardText, CCol, CRow, CCardImage } from 'react';
import JSONDATA from './gameDesc.json'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import valorant from './omen_val.png'

const DiscoverGames = () => {
    // const [name, setName] = useState('Sam');

    return ( 
        <div className="discoverGames">
            <h4 className='introText'>WANT TO PLAY GAMES?</h4>
            <h1>
                Games To Play
                
            </h1>
            <input className='search' placeHolder = 'search...' ></input>
            <Accordion
                style = {{textAlign : 'center', marginTop : '15vh'}}
            >
                {JSONDATA.map((val) =>{
                    const gameName = val.title;
                    return(
                        <Accordion.Item eventKey={val.id} className = "accordion" style={{marginTop : '3px', backgroundColor : 'grey'}}>
                            <Accordion.Header className = "accordion">{val.title}</Accordion.Header>
                            <Accordion.Body>
                            <MDBCard style={{ maxWidth: '540px',  backgroundColor: 'grey', borderWidth: '0px' }}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='4'>
                                    <MDBCardImage src={valorant} alt='...' fluid />
                                    </MDBCol>
                                    <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>Card title</MDBCardTitle>
                                        <MDBCardText>
                                            <p>title: {val.title}</p>

                                        </MDBCardText>
                                        <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
     );
}
 
export default DiscoverGames;