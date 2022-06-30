import {Button} from 'react-bootstrap';
import { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    const [name, setName] = useState('Sam');
    const handleClick = () => {
        console.log('hello ninjas')
    }

    const handleClickName = (myName, e) =>{ //e is event
        console.log('hello' + myName, e);
    }
    return ( 
        <div className="home">
            <h1>
                Welcome to  Game Author
            </h1>
            <h4 className='introText'>We provide you with the best content to start gaming</h4>
            <p
                style = {{textAlign : 'center'}}
            >
                <Link to='/aboutUs'>
                    <Button>learn more</Button>
                </Link>

                <Link to='/discoverGames'>
                    <Button 
                        onClick={(e) => handleClickName('Sam', e)}
                        style = {{textAlign : 'center', marginLeft : '5px'}}>
                            Discover games
                    </Button>
                </Link>
            </p>
        </div>
     );
}
 
export default Home;