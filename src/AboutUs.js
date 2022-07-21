import { Button, Card,Row, Container, Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./i18next";
import ChooseLang from './ChooseLang';
import valorant from './omen_val.png'

const About = () => {
    // const [name, setName] = useState('Sam');
    const { t, i18n } = useTranslation();

	function handleChangeLng(theLang) {
		i18n.changeLanguage(theLang);
		localStorage.setItem("lng", theLang);
	};

    return ( 
        <div className="aboutUs">
                <ChooseLang handleLang= {handleChangeLng}/>
            <h4 className='introText'>{t("intro")}</h4>
            <h1>
                {t("header")}
                
            </h1>
            <Container>
                <Row style={{marginTop : '90px'}}>
                    <Col sm={12} lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={valorant} />
                            <Card.Body>
                                <Card.Title>{t("mission")}</Card.Title>
                                <Card.Text>
                                    <p>{t("missionText")}</p>
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
                                {t("hello")}
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
                                {t("hello")}
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