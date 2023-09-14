import React, {useState} from 'react'
import {images} from '../../constants'

import {AppWrap, MotionWrap} from '../../Wrapper'
import {client} from '../../client'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Ways to <span>contact</span> me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.gmail} alt="email" />
          <a target="_blank" href="mailto:yugalkishore59@gmail.com" className="p-text">yugalkishore59@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="phone" />
          <a target="_blank" href="tel:+917018886305" className="p-text">+91 7018886305</a>
        </div>
        <div className="app__footer-card">
          <img src={images.github} alt="phone" />
          <a target="_blank" href="https://github.com/yugalkishore59/" className="p-text">GitHub</a>
        </div>
        <div className="app__footer-card">
          <img src={images.linkedin} alt="phone" />
          <a target="_blank" href="https://www.linkedin.com/in/yugalkishore/" className="p-text">LinkedIn</a>
        </div>
        <div className="app__footer-card">
          <img src={images.instagram} alt="phone" />
          <a target="_blank" href="https://www.instagram.com/mr.yugalkishore/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="p-text">Instagram</a>
        </div>
      </div>

      <br />
      <h1 style={{color: 'white'}}>Thanks for stopping by!</h1>

      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
    </>
  );
};

// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// );
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__newSecbg',
);