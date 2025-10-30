import React from "react";
import "../App.css";

const Cards = ({ email, subject, message, setEmail, setSubject ,handleSend ,setMessage}) => {
  return (
    <div className="card_lay">
      <h1 className="card_header">Email Sender</h1>
      <div className="form">
        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
        />
        <button onClick={handleSend} className="card_button">
          Send Email
        </button>
      </div>
   
    </div>
  );
};

export default Cards;
