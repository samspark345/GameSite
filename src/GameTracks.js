import {Accordion, Button, Card, CardImg} from 'react-bootstrap';
import { gameDesc } from './gameDesc';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Game from './Game';
import { useState } from 'react';
import FilterGame from './FilterGame';

const Soundtracks = () => {
    // const [name, setName] = useState('Sam');
    // const size = {
    //     width: "100%",
    //     height: 300
    //   };
    // const view = "list"; // or 'coverart'
    // const theme = "black"; 

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
        <div className="soundtracks">
            <h4 className='introText'>BORED AND NEED NEW SONGS?</h4>
            <h1>
                Game Soundtracks
                
            </h1>
            <input className='search' placeHolder = 'search...' ></input>
            <FilterGame style={{alignItems:'center', marginLeft:"auto" , marginRight:"auto", width:"100%"}}  filterselected={filterWithValue}/>
            <Accordion
                style = {{textAlign : 'center', marginTop : '15vh', marginRight: 'auto', marginLeft: 'auto', width: '80%'}}
            >
                {filtered_games && filtered_games.map(game =>{
                    // const image_base = require('./images/'+game[img])
                    return(
                        <Accordion.Item eventKey={game.id} className = "accordion" style={{marginTop : '3px', backgroundColor : 'grey'}}>
                            <Accordion.Header className = "accordion">{game.title}</Accordion.Header>
                            <Accordion.Body>
                            <MDBCard style={{ maxWidth: '100%',  backgroundColor: 'grey', borderWidth: '0px' }}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='5'>
                                    <MDBCardImage src={game.img} alt='...' fluid  style={{height:"380px", width:"676px", marginTop:"15px", borderRadius:"12px"}}/>
                                    </MDBCol>
                                    <MDBCol md='7' style={{textAlign : 'center', marginRight: 'auto', marginLeft: 'auto', alignItems: 'center'}}>
                                    <MDBCardBody style={{textAlign : 'center', marginRight: 'auto', marginLeft: 'auto'}}>

                                        <iframe style={{borderRadius:"12px", width : "100%", height : "380px" ,frameBorder : "0"} } 
                                        src= {game.spotify}
                                        
                                        allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


                                        {/* <Spotify link = ""https://open.spotify.com/embed/artist/3wrFoI9EVjWg6m8xXeWr5t?utm_source=generator"" */}
{/* 
                                        <SpotifyPlayer
                                        uri="spotify:show:https://open.spotify.com/embed/artist/3wrFoI9EVjWg6m8xXeWr5t"
                                        size={size}
                                        view={view}
                                        theme={theme}
                                        /> */}
                                            
                                        <MDBCardTitle style={{textAlign : 'center', marginRight: 'auto', marginLeft: 'auto'}}>
                                        </MDBCardTitle>
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
 
export default Soundtracks;