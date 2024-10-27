'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message,setMessage] = useState('')

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto p-8">
      <form className="w-full max-w-3xl p-8 shadow-md rounded-lg space-y-6">
        <div className="relative w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName((e.target! as HTMLInputElement).value)}
            placeholder=" "
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            className="w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-transparent text-xl bg-transparent border-purple-800 hover:shadow-lg hover:border-purple-600 transition duration-200"
            style={{ fontFamily: 'Anton' }}
          />
          <label
            htmlFor="name"
            className={`absolute left-3 transition-all duration-200 transform ${
              name || focusName ? '-translate-y-7 text-purple-800' : 'top-3 text-white text-lg'
            }`}
          >
            Name
          </label>
        </div>
        <div className="relative w-full mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            className="w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-transparent text-xl bg-transparent border-purple-900 hover:shadow-lg hover:border-purple-600 transition duration-200"
            style={{ fontFamily: 'Anton' }}
          />
          <label
            htmlFor="email"
            className={`absolute left-3 transition-all duration-200 transform ${
              email || focusEmail ? '-translate-y-7 text-purple-800' : 'top-3 text-white text-lg'
            }`}
          >
            Email
          </label>
        </div>

        <div className="relative w-full mb-4">
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder=" "
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocusMessage(true)}
            onBlur={() => setFocusMessage(false)}
            className="w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-transparent text-xl bg-transparent border-purple-900 hover:shadow-lg hover:border-purple-600 transition duration-200"
          />
          <label
            htmlFor="message"
            className={`absolute left-3 transition-all duration-200 transform ${
             message || focusMessage ? '-translate-y-7  text-purple-800' : 'top-3 text-white text-lg'
            }`}
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
