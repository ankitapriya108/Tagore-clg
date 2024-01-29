import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { context } from '../../App';
import axios from 'axios';
import '../ReceivedComplaint/ReceivedComplaint.css'

function ReceivedComplaint() {
  const { serverLink } = useContext(context)
  const [showComplain, setshowComplain] = useState([])

  useEffect(() => {
    ReceiveComplain()
  }, [])

  const ReceiveComplain = async () => {
    let result = await axios.get(`${serverLink}/Complaint/showComplain`)
    result = result.data
    console.log(result);
    setshowComplain(result)
  }




  return (
    <Container>
      {showComplain.map((Complain, index) => (
        // <div key={index} className='ReciveComplain'>
          
        //     <p>Name : {Complain.Firstname}</p>
        //     <p>Fathers name : {Complain.Fathersname}</p>
        //     <p>Email : {Complain.Email}</p>
        //     <p>Mobile No : {Complain.MobileNo}</p>
        //     <p>Complain : {Complain.Complaint}</p>
         
        // </div>
        <div>

<Container>
                <Row className="complaint-row">
                    <Col className="complaintcol" lg={4}>
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

                    <Col className="complaint-col" lg={4}>
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

                    <Col className="complaint-col" lg={4}>
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
      ))}
    </Container>
  )
}

export default ReceivedComplaint