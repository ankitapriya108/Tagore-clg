import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./header.css"
import Bgfirst from '../Image/bg-3.jpg'
import Logo from '../Image/logo.jpeg'
import Director from '../Image/director.png'
import Bgsecond from '../Image/bg-1.jpg'
import Library from '../Image/library.jpg'
import Computer from  '../Image/computer-lab.jpg'
import Faculty from '../Image/best-faculty.jpg'
import Ncc from '../Image/ncc-img.jpg'
import Nss from '../Image/nss-img.jpg'
import Scout from '../Image/scout-img.jpg'
import Auditorium from'../Image/auditorium.jpg'
import Staff from '../Image/staff-room.jpg'
import Class from '../Image/smart-classroom.jpg'
import Bca from '../Image/bca.jpeg'
import Bba from '../Image/bba.jpg'
import Bcom from'../Image/bcom.jpg'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Container, Row , Col } from 'react-bootstrap'
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="wapper">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
            <div className="name">
              <div className="hin">
                <h3>टैगोर पी.जी महाविद्यालय,गुढ़ा गोरजी</h3>
              </div>
              <div className="eng">
                <h3>Tagore P.G College,Gudha Gorji</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
             <span> <EmailIcon color='dark'/> <a href="">tagore@gmail.com</a> </span>
                <span> <AddIcCallIcon/> <a href="">0988776665</a></span>
                <button>Login</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      {/* ...............< Second-navbar >.................. */}


      <div className="wapper-sec">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About US</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Media</Nav.Link>


                <NavDropdown title="Student panel" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">B.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">B.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">B.Com</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BCA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">BBA</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Sc</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.A</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">M.Com</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Bed</NavDropdown.Item>
                  <NavDropdown.Divider />

                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      {/* ................<slider>................. */}


      <div className="slider">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Computer}
              alt="First slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Class}
              alt="Second slide"
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={Library}
              alt="Third slide"
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      {/* ..........About college................ */}


      <div className="about-college">
        <h2>ABOUT-COLLEGE</h2> 
        <div className='college-box'>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={6}>
    <Card style={{  }}>
              <Card.Img variant="top" src={Director} />
              <Card.Body>
                <Card.Title>Director</Card.Title>
                <Card.Text>
                 <h3>Dr.Veerpal Singh Shekhawat</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asper.</p>
                </Card.Text>
               
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={6}>
    <Card style={{  }}>
              <Card.Img variant="top" src={Director} />
              <Card.Body>
                <Card.Title>Principle</Card.Title>
                <Card.Text>
                 <h3>Dr.Surender Soni</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam.</p>
                </Card.Text>
               
              </Card.Body>
            </Card>
    </Col>
   
  </Row>
</Container>
</div>
      </div>


      {/* ...............<Our-facilities>............... */}




      <div className="our-faci">
        <h2> OUR-FACILITIES</h2>

<div className='fac-box-one'>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Library} />
              <Card.Body>
                <Card.Title>Library</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Computer} />
              <Card.Body>
                <Card.Title>Computer lab</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
             
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{}}>
              <Card.Img variant="top" src={Class} />
              <Card.Body>
                <Card.Title> Smart-Classrooms</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               
              </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>
</div>

<div className='fac-box-two'>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Staff} />
              <Card.Body>
                <Card.Title>Staff-Room</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Faculty}/>
              <Card.Body>
                <Card.Title>Best-Faculty</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Auditorium}/>
              <Card.Body>
                <Card.Title>Auditorium</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               
              </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>
</div>



      </div>
  

      {/* ................,courses................. */}

      <div className="our-cour">
        <h2>OUR-COURSES </h2>
        <div className='course-box'>
<Container>
  <Row className='rows'>
    <Col className='cols' lg={4}>
    <Card style={{ }}>
              <Card.Img variant="top" src={Bca}/>
              <Card.Body>
                <Card.Title>BCA</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View details</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{  }}>
              <Card.Img variant="top" src={Bba}/>
              <Card.Body>
                <Card.Title>BBA</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View details</Button>
              </Card.Body>
            </Card>
    </Col>
    <Col className='cols' lg={4}>
    <Card style={{}}>
              <Card.Img variant="top" src={Bcom} />
              <Card.Body>
                <Card.Title>B.Com</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View details</Button>

              
              </Card.Body>
            </Card>
    </Col>
  </Row>
</Container>
</div>
        <a href="">
          <button>View All</button>
        </a>
      </div>
      {/* ................FORM..................... */}

      <Container>
      <div className="form-main">
<Row className='rows' mt-5 mb-5>
  <Col className='cols' lg={6} >
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group> */}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
  </Col>
  <Col className='cols' lg={6}>
  <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.528965756721!2d75.5213261752605!3d27.88573637608087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ccd5bd01662eb%3A0x43d184498d282d59!2sTagore%20College%20Campus!5e0!3m2!1sen!2sin!4v1702703900588!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </Col>
</Row>

      
      
      </div>
      </Container>

      {/* ...........footer.................. */}


<div className="main-footer">
<Container>
      <Row className='rows'>
        

        <Col className='cols' lg={4}>
          <h2>Tagore P.G College</h2>

          <p>Tagore PG College Gudha Gorji, <br />Jhunjhunu is a very popular college  <br />in the state of Rajasthan.It is one of  the <br /> leading colleges  in Arts,Humanities and <br /> Social Scieces,etc.</p>
          

        </Col>
       
        <Col className='cols' lg={4}>
         <h2>Contact Us</h2>
         <p>Tagore PG College Gudha Gorji-333022,Jhunjhunu,Rajasthan</p>
         <p>+919460066518</p>
         <p>+917597607102</p>
         <p>tagore@gmail.com</p>
        

        </Col>
        <Col className='cols' lg={4}>
         <h2>Social media</h2>
         <p> <EmailIcon/>tagore@gmail.com</p>
         <p> <WhatsAppIcon/>Whatsapp</p>
         <p> <FacebookIcon/>Facebook</p>
         <p><InstagramIcon/>Instagram</p>
         <p> <YouTubeIcon/>Youtube</p>
        

        </Col>
        
      </Row>
      
    </Container>
</div>
    </>
  );
}

export default Header;
