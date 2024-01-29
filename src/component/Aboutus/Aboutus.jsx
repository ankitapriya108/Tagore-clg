import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Aboutus/Aboutus.css'
import {Container ,Row, Col} from 'react-bootstrap' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Director from '../Image/director.png'
import Vision from '../Image/our-vision.jpg'
import Mission from '../Image/Mission.jpg'


import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';




function BasicExample() {
  useEffect(()=>{
    AOS.init({duration:2000});
  })



  return (
    <>
    <div className="image">
    <div className='heading'>
      <h1>ABOUT US</h1><hr />
      <h2>
        "Welcome to Tagore Group Of Institutions"
      </h2>
  
  </div>
  
    

{/* <Col className ='cols' lg={2}>

</Col>
<Col className ='cols' lg={8} data-aos = "fade-left">
 
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui enim, tempora provident sunt iste molestias accusantium illum autem. Alias voluptas hic repudiandae libero perspiciatis odit eaque aperiam laboriosam eum officiis quo ad ipsum cupiditate provident aspernatur temporibus blanditiis, ab earum minus autem incidunt consequuntur ut dolor vitae? Iste, quos perferendis?</p>
</Col> */}
{/* <Col className ='cols' lg={2}>

</Col> */}


<div className='about-director'>
<Container>
      <Row className='about-row'>
<Col className='about-col' lg={4} data-aos = "fade-left">
<img src={Director} alt="" />
<h4>Dr.Veerpal Singh Shekhawat</h4>
</Col>

<Col className='about-col' lg={1}>
</Col>

<Col className='about-col' lg={7} data-aos = "fade-right">
  <h3>Chairman’s Message : </h3>
  <h6>‘The journey of a thousand miles begins with a single step.'</h6>
  <p>
  The magnificent journey of the Tagore Group of Institutions began in 1998. In the words of the Founder and Chairman of the Group, Dr. Veerpal Singh Shekhawat , “In spite of being from a business class family, I was working as a trainer because the need to strengthen the Youth was always in the back of my mind. Even in the 5th decade of India’s independence, young graduates were struggling to even get a job. Specialization in every sector was being introduced in India.
  </p>
  <p>I figured out that the lack of significant and innovative programs were the reasons for poor employment. My heart cried out to see that the Youth with so much potential are not getting what they deserve."</p>

</Col>
</Row>
      </Container>
</div>



<div className='about-principle'>
<Container>
      <Row className='about-row'>
<Col className='about-col' lg={7} data-aos = "fade-left">
<h3>Principle’s Message : </h3>
  <h6>‘The journey of a thousand miles begins with a single step.'</h6>
  <p>
  The magnificent journey of the Tagore Group of Institutions began in 1998. In the words of the Founder and Chairman of the Group, Dr. Surender Sharma, “In spite of being from a business class family, I was working as a trainer because the need to strengthen the Youth was always in the back of my mind. Even in the 5th decade of India’s independence, young graduates were struggling to even get a job. Specialization in every sector was being introduced in India.
  </p>
  <p>I figured out that the lack of significant and innovative programs were the reasons for poor employment. My heart cried out to see that the Youth with so much potential are not getting what they deserve."</p>

</Col>
                      
<Col className='about-col' lg={1}>
</Col>

<Col className='about-col' lg={4} data-aos = "fade-right">

<img src={Director} alt="" />
<h4>Dr.Surender Sharma</h4>

</Col>
</Row>
      </Container>
</div>

<div className='future'>
  <Container>
  <h2>"Get future ready with Tagore Group"</h2>
  <p>Since its inception in 1998, Tagore Group of Institutions has come a long way and is a conglomerate of 6 institutions imparting knowledge in different disciplines. Having more than 12000+ students from different backgrounds, the college has unfurled its potential through the establishment of 5 Institutes, guiding youth across the length & breadth of the states. Tagore International College has been awarded as “Best Private College in Rajasthan by ICCI”. Tagore P.G college and Tagore B.Ed College is offering UG & PG programs affiliated to Pandit Deendayal upadhyay University and approved by AICTE. It is treated as one of the best colleges in Rajasthan.</p>
  </Container>
</div>


<div className='signs'>
  <Container>
    <Row className='sign-row'>
      <Col className='sign-col' lg={2}>
        <h1><EmojiEventsIcon/></h1>
        
        <h5>25+</h5>
        <h5>Years of Experience</h5>

      </Col>
      <Col className='sign-col' lg={2}>
        <h1><GroupsIcon/></h1>
        <h5>24,000+</h5>
        <h5>Students</h5>
      </Col>
      <Col className='sign-col' lg={2}>
        <h1><SchoolIcon/></h1>
        <h5>575+</h5>
        <h5>Campus Drive</h5>
      </Col>
      <Col className='sign-col' lg={2}>
        <h1><LocalLibraryIcon/></h1>
        <h5>15+</h5>
        <h5>Major Courses</h5>
      </Col>
      <Col className='sign-col' lg={2}>
        <h1><JoinFullIcon/></h1>
        <h5>20+</h5>
        <h5>Collaborations</h5>
      </Col>
      <Col className='sign-col' lg={2}>
        <h1><AccountBalanceIcon/></h1>
        <h5>5</h5>
        <h5>Institutes</h5>
      </Col>
    </Row>
  </Container>
</div>


<div className='vision-box'>
  <h2>Vision Of Our College</h2>
  <div className='vision'>
    <Container>
      <Row className='vision-row'>
        <Col className='vision-col' lg={7} data-aos = "fade-left">
        
          <h3>Tagore PG College Stands for:</h3>
          <ul>
            <li>Provide a sound education in basic science and humanities</li>
            <li>Inculcate high values through liberal education</li>
            <li>Promote research and learning at the PG level and beyond</li>
            <li>Provide a broad range of non-formal educational services</li>
            <li>Provide inexpensive educational services to the weaker sections of the society and reinvent itself in response to the changing demands of society.</li>
            <li>Develop responsible  leaders for the future.</li>
          </ul>
        </Col>
        <Col className='vision-col' lg={1}>
        </Col>
        <Col className='vision-col' lg={4} data-aos = "fade-right">
     
          <img src={Vision} alt="" />
        </Col>
      </Row>
    </Container>
  </div>

   <div className='mission-box'>
    <h2>Mission Of  Our College</h2>
    <div className='mission'>
    <Container>
      <Row className='mission-row'>
        <Col className='mission-col' lg={4} data-aos = "fade-left">
        <img src={Mission} alt="" />
        </Col>
        <Col className='mission-col' lg={1}>
        </Col>
        <Col className='mission-col' lg={7} data-aos = "fade-right">
      
          <h3>Our mission is :</h3>
          <ul>
            <li>To provide quality higher education to girl students to enable them to face the challenges of the world with courage and confidence and mould them to be socially responsible citizens.</li>
            <li>To transform the student into a balanced personality through a wide variety of curricular, co-curricular, and extra-curricular activities.</li>
           
            <li>To develop socially responsible, sensitive and committed citizens capable of delivering value added services to the society at large.</li>
            <li>To motivate the faculty members in academic research and extension activities so as to equip the students with sophisticated techniques and help them to find solutions to the current problems of society.</li>
          </ul>
        
        </Col>
      </Row>
    </Container>
    </div>
   </div>

</div>
    

</div>
</>

  );
}

export default BasicExample;


    

 









   