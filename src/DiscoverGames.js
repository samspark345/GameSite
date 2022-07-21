import {Accordion} from 'react-bootstrap';
import { useState} from 'react';
import { gameDesc } from './gameDesc';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Game from './Game';
import FilterGame from './FilterGame';

const DiscoverGames = () => {
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


    return ( 
        <div className="discoverGames">
            <h4 className='introText'>WANT TO PLAY GAMES?</h4>
            <h1>
                Games To Play
                
            </h1>
            <input className='search' placeHolder = 'search...' ></input>
            <FilterGame style={{alignItems:'center', marginLeft:"auto" , marginRight:"auto", width:"100%"}}  filterselected={filterWithValue}/>
            <Accordion
                style = {{textAlign : 'center', marginTop : '15vh', marginRight: 'auto', marginLeft: 'auto', width: '80%'}}
            >
                <ul>
                {filtered_games && filtered_games.map(game =>{
                    // const image_base = require('./images/'+game[img])
                    return(
                        <Accordion.Item eventKey={game.id} className = "accordion" style={{marginTop : '3px', backgroundColor : 'grey'}}>
                            <Accordion.Header className = "accordion">{game.title}</Accordion.Header>
                            <Accordion.Body>
                            <MDBCard style={{ maxWidth: '100%',  backgroundColor: 'grey', borderWidth: '0px' }}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='5'>
                                    <MDBCardImage src={game.img} alt='...' fluid style={{height:"400px", width : "712px", borderRadius:"12px"}} />
                                    </MDBCol>
                                    <MDBCol md='7' style={{textAlign : 'center', marginRight: 'auto', marginLeft: 'auto', alignItems: 'center'}}>
                                    <MDBCardBody style={{textAlign : 'left', marginRight: 'auto', marginLeft: 'auto'}}>
                                        <MDBCardTitle style={{textAlign : 'center', marginRight: 'auto', marginLeft: 'auto'}}>
                                            <Game title={game.title} genre={game.genre} 
                                            release={game.release_date} img={game.img} description={game.description} />
                                            
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            <strong>Description: </strong>{game.description}
                                        </MDBCardText>
                                    </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
                </ul>
            </Accordion>
        </div>
     );
}
 
export default DiscoverGames;