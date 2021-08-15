import React from 'react';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ContactInfo from '../ContactInfo';

const ContactModal = ({
  loading,
  register,
  modalVisibility,
  handleClose,
  shouldShowAllContactOpt,
  onSubmit,
  handleSubmit,
  emailStatus,
}) => (
  <Modal
    show={modalVisibility}
    onHide={handleClose}
    className="contactModal"
    id="contact"
  >
    <Modal.Header closeButton>
      <Modal.Title>
        {shouldShowAllContactOpt ? <ContactInfo /> : ''}
        <br />
        Contact Form
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
        {/* register your input into the hook by invoking the "register" function */}
        <Form.Group>
          <Form.Label for="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            ref={register({ required: true })}
            placeholder="John Doe"
          />
        </Form.Group>

        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group>
          <Form.Label for="email">Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            ref={register({ required: true })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="message">Message</Form.Label>
          <Form.Control
            name="message"
            placeholder="Type here..."
            as="textarea"
            rows={3}
            ref={register({ required: true })}
          />
        </Form.Group>
        <div className="sendDiv">
          <Button type="submit" className="sendButton">
            Send
            {'  '}
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              ''
            )}
            {emailStatus ? <i className="far fa-check-circle"></i> : ''}
          </Button>
        </div>
      </form>
    </Modal.Body>
  </Modal>
);

ContactModal.propTypes = {
  loading: PropTypes.bool,
  register: PropTypes.func,
  modalVisibility: PropTypes.bool,
  handleClose: PropTypes.func,
  shouldShowAllContactOpt: PropTypes.bool,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  emailStatus: PropTypes.bool,
};

ContactModal.defaultProps = {
  loading: false,
  register: () => 'register',
  modalVisibility: false,
  handleClose: () => 'close',
  shouldShowAllContactOpt: false,
  onSubmit: () => 'onsubmit',
  handleSubmit: () => 'handle submit',
  emailStatus: false,
};

export default ContactModal;
