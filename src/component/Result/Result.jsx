import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import './result.css'

function Result() {
  return (
    <>
      <div className='result-box'>
        <h1>STUDENT'S RESULT</h1>

        <div className='select'>

          <Container>
            <Row className='drop'>
              <Col className='drop-col' lg={2}>
              </Col>
              <Col className='drop-col' lg={4}>
              <Form.Group as={Col} md="5">
                                <Form.Label className='std'>Select Course</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" >
                                    <option >Course</option>
                                    <option value="B.A-1st">B.A-1st</option>
                                    <option value="B.A-2nd">B.A-2nd</option>
                                    <option value="B.A-3rd">B.A-3rd</option>

                                    <option value="B.SC-1st">B.SC-1st</option>
                                    <option value="B.SC-2nd">B.SC-2nd</option>
                                    <option value="B.SC-3rd">B.SC-3rd</option>

                                    <option value="BCA-1st">BCA-1st</option>
                                    <option value="BCA-2nd">BCA-2nd</option>
                                    <option value="BCA-3rd">BCA-3rd</option>

                                    <option value="BBA-1st">BBA-1st</option>
                                    <option value="BBA-2nd">BBA-2nd</option>
                                    <option value="BBA-3rd">BBA-3rd</option>

                                    <option value="M.Sc-1st">M.Sc-1st</option>
                                    <option value="M.Sc-2nd">M.Sc-2nd</option>
                                    <option value="M.Sc-3rd">M.Sc-3rd</option>

                                    <option value="M.A-1st">M.A-1st</option>
                                    <option value="M.A-2nd">M.A-2nd</option>
                                    <option value="M.A-3rd">M.A-3rd</option>

                                    <option value="M.Com-1st">M.Com-1st</option>
                                    <option value="M.Com-2nd">M.Com-2nd</option>
                                    <option value="M.Com-3rd">M.Com-3rd</option>


                                </Form.Select>
                            </Form.Group>

              </Col>
              <Col className='drop-col' lg={4}>
              
              <Form.Group as={Col} md="5">
                                <Form.Label className='std'>Select Semester</Form.Label>
                                <Form.Select md="4" aria-label="Default select example" >
                                    <option >Course</option>
                                    <option value="Semester-1st">Semester-1st</option>
                                    <option value="Semester-2nd">Semester-2nd</option>
                                    <option value="Semester-3rd">Semester-3rd</option> 
                                </Form.Select>
                            </Form.Group>
                          </Col>
                          
              <Col className='drop-col' lg={2}>
              </Col>
              
            </Row>
          </Container>
        </div>

        <div className='open-btn'>
          <Container>
            <Row className='opn-btn'>
              <Col className='opn-col'lg={4}>
              </Col>
              <Col className='opn-col'lg={4}>
                <button className='open'>
                  SUBMIT
                </button>
              </Col>
              <Col className='opn-col'lg={4}>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>

  )
}

export default Result