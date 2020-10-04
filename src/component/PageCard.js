import React from 'react';
import { Card, Button, Container, Row} from 'react-bootstrap';

function PageCard(){
    return(
        <div>
        <Container>
        <Row>
            <Card style={{ width: '15rem' }}>
                <Card.Img  src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg"/>
                <Card.Body>
                    <Card.Title><b>Diego Godin Ukir Rekor Spesial Lawan Thailand</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
       
            <Card style={{ width: '15rem' }}>
                <Card.Img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg"/>
                <Card.Body>
                    <Card.Title><b>Neymar Bahas Kontrak Baru DI Paris Saint-Germain</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        
            <Card style={{ width: '15rem' }}>
                <Card.Img src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&
quality=60&w=1600"/>
                <Card.Body>
                    <Card.Title><b>Inggris Mau Jadi Tim Terbaik Di Dunia</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&
quality=60&w=1600"/>
                <Card.Body>
                    <Card.Title><b>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas U-23 Tetap Bagus</b></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Row>
        </Container>
        </div>
    )
}
export default PageCard;


