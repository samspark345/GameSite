import {Accordion, Button, Card, Form} from 'react-bootstrap';
import { useState, CCard, CCardBody, CCardTitle, CCardText, CCol, CRow, CCardImage } from 'react';
import { gameDesc } from './gameDesc';
import Rating from 'react-rating';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import FilterGame from './FilterGame';

const RateGames = () => {
    const [rating, setRating] = useState(2.5);
    const [confirmation, setConfirmation] = useState('');
    const [newRating, setNewRating] = useState('none');
    const [newGameList, filterGame] = useState(gameDesc);
    const [filterText, updateFilter] = useState('none');

    const filtered_games = newGameList.filter((gameCat) => {

        if (filterText === 'action'){
            return gameCat.genre ==='action';
        }else if (filterText === 'sport'){
            return gameCat.genre ==='sport';
        }else{
            return gameCat;
        }

    })


    function filterWithValue(filterValue){

        updateFilter(filterValue);

    }

    function onRate(event) {
        setNewRating(event.target.value); 
    }

    function onSubmitClicked(){
        if (newRating === 'none'){
            setConfirmation('sorry no rating was chosen');
        }else{
            if (newRating === '1'){
                setRating((rating+1)/2);
            }else if (newRating === '2'){
                setRating((rating+2)/2);
            }else if (newRating === '3'){
                setRating((rating+3)/2);
            }else if (newRating === '4'){
                setRating((rating+4)/2);
            }else if (newRating === '5'){
                setRating((rating+5)/2);
            }

            setConfirmation('Rating received thank you!!')
        }
        
    }

    return ( 
        <div className="rateGames">
            <h4 className='introText'>SHARE YOUR OPINION</h4>
            <h1>
                Rate Games
                
            </h1>
            <input className='search' placeHolder = 'search...' ></input>
            <FilterGame style={{alignItems:'center', marginLeft:"auto" , marginRight:"auto", width:"100%"}}  filterselected={filterWithValue}/>
            <Accordion
                style = {{textAlign : 'center', marginTop : '15vh',  marginRight: 'auto', marginLeft: 'auto', width:'80%'}}
            >
                {filtered_games.map((game) =>{
                    const gameName = game.title;
                    return(
                        <Accordion.Item eventKey={game.id} className = "accordion" style={{marginTop : '3px', backgroundColor : 'grey'}}>
                            <Accordion.Header className = "accordion">{game.title}</Accordion.Header>
                            <Accordion.Body>
                            <MDBCard style={{ maxWidth: '100%',  backgroundColor: 'grey', borderWidth: '0px' }}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='5'>
                                    <MDBCardImage src={game.img} alt='...' fluid />
                                    </MDBCol>
                                    <MDBCol md='7'>
                                    <MDBCardBody>
                                        <MDBCardTitle>
                                            <p>Title : {game.title}</p>

                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <Form.Group className="mb-3">
                                            <Rating
                                                initialRating={rating}
                                                fractions={10}
                                                readonly
                                            />
                                                <Form.Label>Rate</Form.Label>
                                                <Form.Select onChange={onRate}>
                                                    <option value="none">....</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button onClick={onSubmitClicked} >submit</Button>
                                            <p>{confirmation}</p>
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
 
export default RateGames;