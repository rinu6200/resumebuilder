import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function Fifth() {

    return (
        <>
            <div className="p-md-5 p-3">
                <h3 className="mb-0">Add More Details</h3>
                <p className="small text-muted mb-5">This is an opportunity to highlight qualifications that don't fit into standard resume sections.</p>
                <Row>
                    <Col>
                        <h5>Awards  </h5>
                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col} controlId="">
                                <FloatingLabel controlId="" label="Type awards.." className="mb-3">
                                    <Form.Control type="text" placeholder="" value="Awarded best employer of the year 2022" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                                <Button variant="outline-danger" size="lg"><i class="bi bi-trash"></i></Button>
                            </Form.Group>

                        </Row>
                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col}  controlId="">
                                <FloatingLabel controlId="" label="Type awards.." className="">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                                <Button variant="outline-danger" size="lg" className="invisible"><i class="bi bi-trash"></i></Button>
                            </Form.Group>


                        </Row>
                        <div className="pb-4">
                            <Button variant="link">+ Add more Awards</Button>
                        </div>
                        <h5>Hobbies</h5>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <FloatingLabel controlId="" label="Hobbies" className="">

                                <Typeahead
                                    allowNew
                                    id="custom-selections-example"
                                    multiple
                                    newSelectionPrefix="Click here to add the Hobby "
                                    options={['Reading', 'Drawing', '...']}
                                    placeholder="Type Hobbies here.."
                                    className="form-control h-auto"
                                />
                            </FloatingLabel>
                        </Form.Group>


                        <div className="pb-4">
                            <Button variant="link">+ Add more Awards</Button>
                        </div>
                        <h5>Languages</h5>

                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col} md={8} controlId="">
                                <FloatingLabel controlId="" label="Language" className="mb-3">
                                    <Form.Control type="text" placeholder="" value="English" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="">
                                <FloatingLabel controlId="floatingSelect" label="Level" className="mb-3">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>--Select Level--</option>
                                        <option value="1">Beginner</option>
                                        <option value="2" selected>Intermediate</option>
                                        <option value="3">Advanced</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                                <Button variant="outline-danger" size="lg"><i class="bi bi-trash"></i></Button>
                            </Form.Group>
                        </Row>

                        <Row className="mb-md-3 align-items-center">
                            <Form.Group as={Col} md={8} controlId="" className="mb-3">
                                <FloatingLabel controlId="" label="Language" className="">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="" className="mb-3">
                                <FloatingLabel controlId="floatingSelect" label="Level">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>--Select Level--</option>
                                        <option value="1">Beginner</option>
                                        <option value="2">Intermediate</option>
                                        <option value="3">Advanced</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                                <Button variant="outline-danger" size="lg" className="invisible"><i class="bi bi-trash"></i></Button>
                            </Form.Group>
                        </Row>

                        <div className="py-4">
                            <Button variant="link">+ Add more Language</Button>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default Fifth
