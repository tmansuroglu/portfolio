import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';
import ContactModal from '../../components/ContactModal';

const Contact = ({ setModalVisibility, modalVisibility }) => {
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState();
  const [shouldShowAllContactOpt, setShouldShowAllContactOpt] = useState(false);
  init('user_oNgyWxSIi4RmaCad8IwY4');
  const { register, handleSubmit } = useForm();
  const handleClose = () => {
    setModalVisibility(false);
    setEmailStatus(false);
  };
  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send('portfolioService', 'template_zrfyuoi', {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(() => {
        setLoading(false);
        setEmailStatus(true);
        setTimeout(() => {
          setModalVisibility(false);
          setEmailStatus(false);
        }, 1250);
      })
      .catch(() => {
        setLoading(false);
        setEmailStatus(false);
      });
  };

  // why not use css
  useEffect(() => {
    if (window.outerWidth < 578) {
      setShouldShowAllContactOpt(true);
    }
    setShouldShowAllContactOpt(false);
  }, [modalVisibility]);

  return (
    <ContactModal
      modalVisibility={modalVisibility}
      onSubmit={onSubmit}
      shouldShowAllContactOpt={shouldShowAllContactOpt}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      register={register}
      emailStatus={emailStatus}
      loading={loading}
    />
  );
};

Contact.propTypes = {
  setModalVisibility: PropTypes.func,
  modalVisibility: PropTypes.bool,
};

Contact.defaultProps = {
  setModalVisibility: () => 'set modal visibility',
  modalVisibility: false,
};

export default Contact;
