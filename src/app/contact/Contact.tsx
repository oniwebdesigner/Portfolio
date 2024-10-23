'use client'
import React, { useState } from 'react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setSuccessMessage('');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });

      setLoading(false);
      setSuccessMessage('Thank you for contacting us!');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('An error occurred while sending your message...');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-2xl p-6 shadow-md rounded">
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="border-purple-800 p-2 rounded w-full" 
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="border border-purple-800 p-2 rounded w-full" // Ngjyra e borderit
        />
        <textarea
          name="message"
          required
          placeholder="Enter your message"
          className="border border-purple-800 2px p-2 rounded w-full h-32" // Ngjyra e borderit
        />
        <button disabled={loading} type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
