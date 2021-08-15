import React from 'react';
import { Modal } from 'react-bootstrap';
import './index.scss';
import PropTypes from 'prop-types';

const ContactModal = ({ modalVisibility, setModalVisibility }) => (
  <Modal
    show={modalVisibility}
    onHide={() => setModalVisibility(false)}
    contentClassName="contact-modal"
    centered
    size="lg"
  >
    <Modal.Header closeButton>
      <Modal.Title>
        <h2 className="contact-modal__h2">Contact</h2>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="fa fa-whatsapp fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+905523600893/?text=Hello+Tarkan!"
          >
            +90 552 360 08 93
          </a>
        </div>
      </div>

      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="fas fa-mobile-alt fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a target="_blank" rel="noreferrer" href="tel:+905523600893">
            +90 552 360 08 93
          </a>
        </div>
      </div>

      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="far fa-envelope fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto: mansuroglu99@gmail.com"
          >
            mansuroglu99@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="fab fa-linkedin-in fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tarkanmansuroglu/"
          >
            https://www.linkedin.com/in/tarkanmansuroglu
          </a>
        </div>
      </div>

      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="fab fa-github fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tmansuroglu"
          >
            https://github.com/tmansuroglu
          </a>
        </div>
      </div>

      <div className="contact-modal__row">
        <div className="contact-modal__row__icon-container">
          <i className="fab fa-instagram fa-3x"></i>
        </div>
        <div className="contact-modal__row__link-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/tarkanmansuroglu/"
          >
            https://www.instagram.com/tarkanmansuroglu
          </a>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

ContactModal.propTypes = {
  modalVisibility: PropTypes.bool,
  setModalVisibility: PropTypes.func,
};

ContactModal.defaultProps = {
  modalVisibility: false,
  setModalVisibility: () => 'close modal',
};

export default ContactModal;
