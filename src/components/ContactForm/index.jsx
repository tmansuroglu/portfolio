import React, { useState } from 'react';
import './index.css';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';

const ContactForm = ({ setModalVisibility, modalVisibility }) => {
    const [loading, setLoading] = useState(false);
    const [emailStatus, setEmailStatus] = useState();
    init('user_oNgyWxSIi4RmaCad8IwY4');
    const { register, handleSubmit } = useForm();
    const handleClose = () => {
        setModalVisibility(false);
        setEmailStatus(false);
    };
    const onSubmit = data => {
        setLoading(true);
        emailjs
            .send('portfolioService', 'template_zrfyuoi', {
                name: data.name,
                email: data.email,
                message: data.message,
            })
            .then(resp => {
                setLoading(false);
                setEmailStatus(true);
            })
            .catch(err => {
                alert('Sending email failed!');
                setLoading(false);
                setEmailStatus(false);
            });
    };

    return (
        <Modal
            show={modalVisibility}
            onHide={handleClose}
            backdrop='static'
            className='contactModal'
        >
            <Modal.Header closeButton>
                <Modal.Title>Contact Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)} className='contactForm'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <Form.Group>
                        <Form.Label for='name'>Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            ref={register({ required: true })}
                            placeholder='John Doe'
                        />
                    </Form.Group>

                    {/* include validation with required or other standard HTML validation rules */}
                    <Form.Group>
                        <Form.Label for='email'>Email</Form.Label>
                        <Form.Control
                            name='email'
                            type='email'
                            placeholder='name@example.com'
                            ref={register({ required: true })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for='message'>Message</Form.Label>
                        <Form.Control
                            name='message'
                            placeholder='Type here...'
                            as='textarea'
                            rows={3}
                            ref={register({ required: true })}
                        />
                    </Form.Group>
                    <div className='sendDiv'>
                        <Button type='submit' className='sendButton'>
                            Send{'  '}{' '}
                            {loading ? (
                                <Spinner
                                    as='span'
                                    animation='border'
                                    size='sm'
                                    role='status'
                                    aria-hidden='true'
                                />
                            ) : (
                                ''
                            )}
                            {emailStatus ? (
                                <i class='far fa-check-circle'></i>
                            ) : (
                                ''
                            )}
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ContactForm;
