import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function Second() {

    return (
        <>
            <div className="p-md-5 p-3">
                <h3 className="mb-0">Let’s work on your experience</h3>
                <p className="small text-muted mb-5">Start with your most recent job first.</p>

                <Row>
                    <Col><Row className="mb-md-3">
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="Job Title " className="mb-3">
                                <Form.Control type="text" placeholder="Job Title " />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="Employer " className="mb-3">
                                <Form.Control type="text" placeholder="Employer" />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                        <Row className="mb-md-3">
                            <Form.Group as={Col} md={3} controlId="">
                                <FloatingLabel controlId="" label="Start Date" className="mb-3">
                                    <Form.Control type="date" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="">
                                <FloatingLabel controlId="" label="End Date" className="mb-3">
                                    <Form.Control type="date" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md={6} controlId="">
                                <FloatingLabel controlId="" label="Role" className="mb-3">
                                    <Form.Control type="tel" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col}  controlId="">
                                <FloatingLabel controlId="" label="Type your roles.." className="mb-3">
                                    <Form.Control type="text" placeholder=" " value="Responsible for wirefrmae designing" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                                <Button variant="primary" size="lg"><i class="bi bi-plus-lg"></i></Button>{' '}
                                <Button variant="outline-danger" size="lg"><i class="bi bi-trash"></i></Button>
                            </Form.Group>
                        </Row>

                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col} controlId="">
                                <FloatingLabel controlId="" label="Type your roles.." className="mb-3">
                                    <Form.Control type="text" placeholder=" " />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="auto"controlId="" className="mb-3">
                                <Button variant="primary" size="lg"><i class="bi bi-plus-lg"></i></Button>{' '}
                                <Button variant="outline-danger" size="lg" className="invisible"><i class="bi bi-trash"></i></Button>
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <FloatingLabel controlId="" label="Technologies used" className="">

                                <Typeahead
                                    allowNew
                                    id="custom-selections-example"
                                    multiple
                                    newSelectionPrefix="Click here to add the technology "
                                    options={['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'JAVA', 'Python']}
                                    placeholder="Type Technologies used here.."
                                    className="form-control h-auto"
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I currently work here" />
                        </Form.Group>


                    </Col>
                </Row>

                <div className="py-4">
                    <Button variant="link">+ Add more experience</Button>
                </div>
            </div>
        </>
    )
}

export default Second
