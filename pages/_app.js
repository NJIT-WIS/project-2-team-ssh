import  '../styles/utils.module.css'
import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react';
import globalStyles from '../components/globals.css';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-5HGHEF87SL', {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function handleAccept() {
    setCookieConsentAccepted(true);
    setShowCookieConsent(false);
  }

  function handleDecline() {
    setShowCookieConsent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Note:", note);
    // Here you can add your own code to send the form data to your server or external service.
  }

  return (
    <>
      {showCookieConsent && !cookieConsentAccepted && (
        <div className="cookie-consent">
          <p>We use cookies to provide the best experience on our website. By clicking "Accept", you consent to the use of all cookies.</p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}

      <Component {...pageProps} />

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="contact-label">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="contact-input" />

          <label htmlFor="email" className="contact-label">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="contact-input" />

          <label htmlFor="note" className="contact-label">Note:</label>
          <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} className="contact-input" />

          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </div>

      <style jsx>{`
          .contact-form {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            margin-right: 550px;
            margin-left: 550px;
          }

          .contact-label {
            margin-top: 10px;
          }

          .contact-input {
             margin-right: 1000px;
            margin-bottom: 20px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
          }

          .contact-submit-btn {
            background-color: #4CAF50;
            margin-left: 200px;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
          }
        `}</style>

      </>
    );
 }
