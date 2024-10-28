'use client';

import React, { useState } from 'react';
import { validateContactForm } from './validateContactForm'; // Import the validation function

const ContactForm: React.FC = () => {
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State to hold validation errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Call the validation function
    const newErrors = validateContactForm(name, email, message);
    setErrors(newErrors);

    // Check if there are no errors before processing the form
    if (Object.keys(newErrors).length === 0) {
      // Here you can add logic to send the form data
      console.log('values:',{ name, email, message });

      // Set success message
      setSuccessMessage('Your message has been sent successfully!');

      // After sending, you might want to reset the form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto p-8">
      <form className="w-full max-w-3xl p-8 shadow-md rounded-lg space-y-6" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            placeholder=" "
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            className={`w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'border-purple-800'} focus:ring-purple-800 placeholder-transparent text-xl bg-transparent hover:shadow-lg transition duration-200`}
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
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} {/* Display name error */}
        </div>
        
        <div className="relative w-full mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            className={`w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-purple-900'} focus:ring-purple-800 placeholder-transparent text-xl bg-transparent hover:shadow-lg transition duration-200`}
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} {/* Display email error */}
        </div>

        <div className="relative w-full mb-4">
          <textarea
            id="message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" "
            onFocus={() => setFocusMessage(true)}
            onBlur={() => setFocusMessage(false)}
            className={`w-full p-3 mb-5 border-2 rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500' : 'border-purple-900'} focus:ring-purple-800 placeholder-transparent text-xl bg-transparent hover:shadow-lg transition duration-200`}
          />
          <label
            htmlFor="message"
            className={`absolute left-3 transition-all duration-200 transform ${
              message || focusMessage ? '-translate-y-7 text-purple-800' : 'top-3 text-white text-lg'
            }`}
          >
            Message
          </label>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>} {/* Display message error */}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Send
        </button>

        {/* Display success message */}
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
