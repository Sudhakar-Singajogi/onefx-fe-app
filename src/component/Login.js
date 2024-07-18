import React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
  return (
    <div style={{marginTop:'20px'}}>
        <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3"
        justify="true"
        variant="pills"
        fill="true"
        >
        <Tab eventKey="login" title="Login">
            <div style={{padding:"10px" }} >
                <h2  className="mb-10">Enter with valid OneFX credentials</h2>
                <Row>
                    <Col xs lg="6">
                            <Form className="mb-3"> 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    </Col>
                </Row>
                
            </div>
        </Tab>
        <Tab eventKey="signup" title="Signup">
        <div style={{padding:"10px" }} >
            <h2 className="mb-10">Get register with OneFX </h2>
                <Row>
                    <Col xs lg="6">
                            <Form className="mb-3"> 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" />
                                        
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    </Col>
                </Row>
                
            </div>
        </Tab>
        </Tabs>
    </div>
  )
}

export default Login