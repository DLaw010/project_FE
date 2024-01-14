import{ Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import HeroImage from"../assets/img/hero.png";

const HomePage = () => {
    return (
     <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
                <Row className='header-box d-flex align-items-center'>
                    <Col>
                        <h1>
                            ShoesSmart <br /> <span>No. 1</span> <br />Di Bogor!
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nobis numquam, vero repellat minus eveniet quos possimus, deserunt fugit at facere dolore ducimus officia. Quo, rem? Assumenda incidunt aperiam omnis.</p>
                        <Button variant="primary roundead-1 me-2" path= "kelas">Mulai Belanja</Button>
                        <Button variant="outline-info roundead-1 me-2">Lihat Promo</Button>
                    </Col>
                    <Col>
                        <img src={HeroImage} alt="hero-img" />
                    </Col>
                </Row>
            </Container>
        </header>
        <div className="kelas w-100 min-vh-100"></div>
    </div> 

    )
};

export default HomePage;