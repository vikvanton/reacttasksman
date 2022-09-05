import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from './Footer';

export default function SignInForm({ checkingPass }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input === '') {
      toast.error('Pass field empty!');
    } else {
      checkingPass(input);
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
            <h2>SignIn</h2>
          </label>
          <div className="form-container">
            <input
              className="inp-form"
              type="password"
              placeholder="Type your pass"
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
