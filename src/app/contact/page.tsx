import React from 'react'
import ContactForm from './Contact'

export default function page() {
  return (
    <div className="flex flex-col items-center p-4">
  <h1 className='text-6xl font-medium text-purple-950 w-fit staggered-reveal p-5'>Contact</h1>
  <h3 className='text-2xl'>Get In Touch</h3>
  <ContactForm></ContactForm>
</div>

  )
}
