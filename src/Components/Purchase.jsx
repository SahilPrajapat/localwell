import React from 'react'
import img from '../../public/images/img.jpg'
import '../css/Purchase.scss'
import { Mail, PhoneCall } from 'lucide-react';

function Purchase() {
  return (
    <div className="account-manager-card">
      <p className="title">My Account Manager</p>
      <p className="subtitle">Feel free to reach out to them for any queries</p>

      <p className="badge">LEVEL 1 MANAGER</p>

      <div className="profile">
        <img
          src={img}
          alt="Account Manager"
          className="avatar"
        />
        <div>
          <p className="name">Pallavi Rai</p>
          <p className="role">Customer Excellence Officer</p>
        </div>
      </div>

      <p className="greeting"><strong>Hi, I'm Pallavi. Your L1 Account Manager</strong></p>
      <p className="hint">Talk to me on how to get the best out of LocalWell</p>

      <p className="description">
        Since 2019, I’ve helped over 300 pharmacies across Andhra Pradesh, Telangana, and other regions digitize their daily operations.
      </p>

      <p className="language">Can speak: <strong>English and Hindi</strong>.</p>
      <p className="availability">Available: 9:30 am to 7:30 pm (Mon–Sat)</p>

      <div className="email">
        <Mail size={16} className="icon" />
        <a href="mailto:pallavi.rai@localwell.in">pallavi.rai@localwell.in</a>
      </div>

      <button className="call-button">
        <PhoneCall size={16} className="icon" />
        Call Now
      </button>
    </div>
  )
}

export default Purchase