import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../App';
import '../ReceiveNotice/ReceiveNotice.css'
import axios from 'axios';

function ReceiveNotice() {
    const { serverLink } = useContext(context);
    const [notice, setNotice] = useState({});

    useEffect(() => {
        showNotice();
    }, []);

    const showNotice = async () => {
        try {
            let result = await axios.get(`${serverLink}/AdminNotice/showNotice`);
            result = result.data;
            console.log(result);
            setNotice(result);
        } catch (error) {
            console.error('Error fetching notice:', error);
            // Handle error, show a message, or set a default value for notice
        }
    };

    return (
        <Container>
        {notice.length > 0 ? (
            notice.map((notices, index) => (
                <div className='notice'  key={index}>
                    <p>{notices.Content}</p>
                </div>
            ))
        ) : (
           
            <div className='notice-box'>
                <Container>
                <Row className="notice-row">
                    <Col className="notice-col" lg={4}>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>

                    <Col className="notice-col" lg={4}>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>

                    <Col className="notice-col" lg={4}>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )}
    </Container>
    );
}

export default ReceiveNotice;
