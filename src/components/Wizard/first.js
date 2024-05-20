import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Image from 'react-bootstrap/Image';
import avatar from '../../assets/img/avatar.jpg';
import { EditorState } from 'draft-js';

function First() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );


    return (
        <>
            <div className="p-md-5 p-3">

                <h3 className="mb-0">Let’s start with your header</h3>
                <p className="small text-muted mb-5">Include your full name and at least one way for employers to reach you.</p>
                <Row>
                    {/* <Col md="auto" className="text-center">


                        <div className="mb-2 position-relative">
                            <Image src={avatar} width={100} height={100} className="object-fit-cover position-absolute" />
                            <Image src={file} width={100} height={100} className="object-fit-cover position-relative" />
                        </div>
                        <input type="file" id="upload" onChange={handleChange} hidden />
                        <p className="small text-muted">Add a photo to your resume</p>
                        <label for="upload" className="btn btn-outline-primary mb-3">Upload Photo</label>

                    </Col> */}
                    <Col><Row className="mb-md-3">
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="Last Name" className="mb-3">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                        <Row className="mb-md-3">
                            <Form.Group as={Col} md={6} controlId="">
                                <FloatingLabel controlId="" label="Email" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md={6} controlId="">
                                <FloatingLabel controlId="" label="Phone No." className="mb-3">
                                    <Form.Control type="tel" placeholder="+91 9876543210" />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mb-md-3">
                            <Form.Group as={Col} controlId="">
                                <FloatingLabel controlId="" label="Job Title" className="mb-3">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <FloatingLabel controlId="floatingTextarea2" label="Objective" className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Type here.."
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>


                    </Col>
                </Row>


            </div>
        </>
    )
}

export default First
