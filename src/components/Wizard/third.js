import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function Third() {

    const [file, setFile] = useState();

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <>

            <div className="p-md-5 p-3">
                <h3 className="mb-0">Tell us about your education</h3>
                <p className="small text-muted mb-5">Tell us about any colleges, vocational programs, or training courses you took. </p>

                <Row>
                    <Col><Row className="mb-md-3">
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="School Name" className="mb-3">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} md={6} controlId="">
                            <FloatingLabel controlId="" label="Degree " className="mb-3">
                                <Form.Control type="text" placeholder="" />
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
                                <FloatingLabel controlId="" label="Location" className="mb-3">
                                    <Form.Control type="tel" placeholder="" />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Additional Qualification</Form.Label>
                            <Editor
                                editorState={editorState}
                                wrapperClassName="border"
                                onEditorStateChange={setEditorState}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="py-4">
                    <Button variant="link">+ Add more education</Button>
                </div>

            </div>
        </>
    )
}

export default Third
