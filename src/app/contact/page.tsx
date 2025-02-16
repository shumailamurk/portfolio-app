'use client';

import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in all required fields!');
      return;
    }
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 bg-black text-white overflow-hidden transition-colors duration-300'>
      <div className='relative z-10 w-full max-w-lg p-6 sm:p-8 rounded-xl shadow-[0_0_20px_gold] border-4 border-gold bg-black'>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Dancing_Script',cursive]">Contact Us</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} required className='flex-1 p-3 rounded-lg border-2 border-gold focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md bg-black text-white' />
            <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} className='flex-1 p-3 rounded-lg border-2 border-gold focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md bg-black text-white' />
          </div>
          <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required className='p-3 rounded-lg border-2 border-gold focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md bg-black text-white' />
          <input type='tel' name='phone' placeholder='Phone Number' value={formData.phone} onChange={handleChange} className='p-3 rounded-lg border-2 border-gold focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md bg-black text-white' />
          <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} required className='p-3 h-32 rounded-lg border-2 border-gold focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md bg-black text-white resize-none'></textarea>

          <button type='submit' className='mt-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg shadow-lg transition duration-300'>
            Send Message
          </button>
        </form>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 5px rgba(255, 215, 0, 0.7);
        }

        .border-gold {
          border-color: gold;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
