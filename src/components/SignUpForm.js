import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Footer from './Footer';

export default function SignUpForm({ settingPass }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    toast.info('Seems your first open app in this browser');
    setTimeout(() => toast.info('To use app set up pass'), 2000);
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input === '') {
      toast.error('Pass field empty!');
    } else if (input.length < 4 ) {
      toast.error('Too short pass!');
      setTimeout(() => toast.error('Must be at least 4 characters'), 2000);
    } else {
      settingPass(input);
    }
  }

  return (
    <>
      <header id="header-signinup">
        <div>
          <label
            className="col-form-label col-form-label-lg"
            htmlFor="inputLarge"
          >
            <h2>SignUp</h2>
          </label>
          <div className="form-container">
            <input
              className="inp-form"
              type="password"
              placeholder="Set up your pass"
              id="inputLarge"
              onChange={handleChange}
              value={input}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary btn-form"
          onClick={handleClick}
        >
          Enter
        </button>
      </header>
      <Footer className="footer-signinup" />
    </>
  );
}
