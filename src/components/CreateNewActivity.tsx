import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Form, Row} from "react-bootstrap";
import {ActivityInterface} from "../Interfaces/ActivityInterface";
import {ActivityPostInterface} from "../Interfaces/ActivityPostInterface";

function CreateNewActivity() {

    const [show, setShow] = useState(false);
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
        let postData: ActivityPostInterface = {
            "Activity_code" : code,
            "Activity_title" : title,
            "Activity_description" : description,
            "Activity_type" : type,
            "Activity_city" : city,
            "Activity_location" : location,
            "Activity_start" : start,
            "Activity_end" : end,
        };


        PostActivity(postData);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Activity
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="create-new-activity" onSubmit={submitForm}>
                        <Row>
                            <Col>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Activity Code
                            </Form.Text>
                        </Form.Group>
                            </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Activity title
                            </Form.Text>
                        </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Activity description
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Activity type
                            </Form.Text>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        Activity city
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter email"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        Activity location on map
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>start date</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        placeholder="Start date"
                                        value={start}
                                        onChange={(e) => setStart(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        Start date and time
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>End</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        placeholder="Enter End date and time"
                                        value={end}
                                        onChange={(e) => setEnd(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        End
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button form="create-new-activity" >Submit</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
function PostActivity(data : ActivityPostInterface) {

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 3|n0uFYFYKMgEYeu9sch5Zwd6gga7hPk9B7U2PYydd");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("X-CSRF-TOKEN", '{{ csrf_token() }}');

    const urlencoded = new URLSearchParams();
    urlencoded.append("code", data.Activity_code);
    urlencoded.append("title", data.Activity_title);
    urlencoded.append("description", data.Activity_description);
    urlencoded.append("type_id", data.Activity_type);
    urlencoded.append("city", data.Activity_city);
    urlencoded.append("location", data.Activity_location);
    urlencoded.append("start", data.Activity_start);
    urlencoded.append("end", data.Activity_end);
    let requestOptions : RequestInit;
    requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/Activities",
        requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default CreateNewActivity;

