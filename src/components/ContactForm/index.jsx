import React, { useState } from 'react';
import './index.css';
import { Modal } from 'react-bootstrap';

const ContactForm = ({ setModalVisibility, modalVisibility }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    });

    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    const handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...contact }),
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => {
        console.log(e.target.name, e.target.value);
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleClose = () => setModalVisibility(false);
    return (
        <Modal
            show={modalVisibility}
            onHide={handleClose}
            backdrop='static'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Contact Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Your Name:{' '}
                            <input
                                type='text'
                                name='name'
                                value={contact.name}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email:{' '}
                            <input
                                type='email'
                                name='email'
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:{' '}
                            <textarea
                                name='message'
                                value={contact.message}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <button type='submit'>Send</button>
                    </p>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ContactForm;
