import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


function Fourth() {



    return (
        <>

            <div className="p-md-5 p-3">
                <h3 className="mb-0">Let’s pick your top skills</h3>
                <p className="small text-muted mb-5">Choose from our pre-written examples below or write your own.</p>

                <Row className="mb-md-3 align-items-center">
                    <Form.Group as={Col} md={9} controlId="">
                        <FloatingLabel controlId="" label="Skill" className="mb-3">
                            <Form.Control type="text" placeholder="" value="HTML" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                        <FloatingLabel controlId="floatingSelect" label="Rating" className="mb-3">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="" selected>7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                        <Button variant="outline-danger" size="lg"><i class="bi bi-trash"></i></Button>
                    </Form.Group>
                </Row>

                <Row className="mb-md-3">
                    <Form.Group as={Col} md={9} controlId="">
                        <FloatingLabel controlId="" label="Skill" className="mb-3">
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                        <FloatingLabel controlId="floatingSelect" label="Rating">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    
                    <Form.Group as={Col} md="auto" controlId="" className="mb-3">
                        <Button variant="outline-danger" size="lg" className="invisible"><i class="bi bi-trash"></i></Button>
                    </Form.Group>
                </Row>
                <div className="py-4">
                    <Button variant="link">+ Add more Skill</Button>
                </div>

                <h1>OR</h1>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <FloatingLabel controlId="" label="Skills" className="">

                        <Typeahead
                            allowNew
                            id="custom-selections-example"
                            multiple
                            newSelectionPrefix="Click here to add the Skill "
                            options={['HTML', 'CSS', '...']}
                            placeholder="Type Skills here.."
                            className="form-control h-auto"
                        />
                    </FloatingLabel>
                </Form.Group>


            </div>
        </>
    )
}

export default Fourth
