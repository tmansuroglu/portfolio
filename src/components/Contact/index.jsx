import React, { useState, useEffect } from 'react';
import './index.css';
import {
    Modal,
    Form,
    Button,
    Spinner,
    OverlayTrigger,
    Popover,
    Row,
    Col,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';

const Contact = ({ setModalVisibility, modalVisibility }) => {
    const [loading, setLoading] = useState(false);
    const [emailStatus, setEmailStatus] = useState();
    const [shouldShowAllContactOpt, setShouldShowAllContactOpt] = useState(
        false
    );
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
                setTimeout(() => {
                    setModalVisibility(false);
                    setEmailStatus(false);
                }, 1250);
            })
            .catch(err => {
                alert('Sending email failed!');
                setLoading(false);
                setEmailStatus(false);
            });
    };

    useEffect(() => {
        window.outerWidth < 578
            ? setShouldShowAllContactOpt(true)
            : setShouldShowAllContactOpt(false);
    }, [modalVisibility]);

    const phonePopover = (
        <Popover id='popover-basic'>
            <Popover.Content>
                <Button href='tel:+905523600893' variant='link'>
                    +90 552 360 08 93
                </Button>
            </Popover.Content>
        </Popover>
    );

    const emailPopover = (
        <Popover id='popover-basic'>
            <Popover.Content>
                <Button href='mailto: mansuroglu99@gmail.com' variant='link'>
                    mansuroglu99@gmail.com
                </Button>
            </Popover.Content>
        </Popover>
    );

    const contactInfo = (
        <Row className='contactInfo'>
            <Col xs={4}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/tarkanmansuroglu/'
                >
                    <i className='fab fa-linkedin-in fa-3x contactLinkedIn'></i>
                </a>
            </Col>
            <Col xs={4}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/tmansuroglu'
                >
                    <i className='fab fa-github fa-3x contactGithub'></i>
                </a>
            </Col>
            <Col xs={4}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.instagram.com/tarkanmansuroglu/'
                >
                    <i className='fab fa-instagram fa-3x contactInstagram'></i>
                </a>
            </Col>
            <Col xs={4}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://twitter.com/T_Mansuroglu'
                >
                    <i className='fab fa-twitter fa-3x contactTwitter'></i>
                </a>
            </Col>
            <Col xs={4}>
                <OverlayTrigger
                    trigger='click'
                    placement='bottom'
                    overlay={phonePopover}
                    rootClose={true}
                    rootCloseEvent='click'
                >
                    <i className='fas fa-mobile-alt fa-3x'></i>
                </OverlayTrigger>
            </Col>
            <Col xs={4}>
                <OverlayTrigger
                    trigger='click'
                    placement='bottom'
                    overlay={emailPopover}
                    rootClose={true}
                    rootCloseEvent='click'
                >
                    <i className='far fa-envelope fa-3x'></i>
                </OverlayTrigger>
            </Col>
        </Row>
    );

    return (
        <Modal
            show={modalVisibility}
            onHide={handleClose}
            className='contactModal'
            id='contact'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {shouldShowAllContactOpt ? contactInfo : ''}
                    <br />
                    Contact Form
                </Modal.Title>
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

export default Contact;
