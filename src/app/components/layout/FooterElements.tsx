import React from 'react';
import SocialMediaButton from '../common/SocialMediaButton';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FooterElements() {
  return (
    <div className='flex flex-col items-center'>
  <h2 className='text-center'>Feel free to connect on Social Media</h2>
  <div className="flex flex-row gap-4 mt-6 text-xl justify-center">
    <SocialMediaButton href="https://facebook.com">
      <FaFacebook className="inline-block mr-2" /> Facebook
    </SocialMediaButton>
    <SocialMediaButton href="https://twitter.com">
      <FaTwitter className="inline-block mr-2" /> Twitter
    </SocialMediaButton>
    <SocialMediaButton href="https://instagram.com">
      <FaInstagram className="inline-block mr-2" /> Instagram
    </SocialMediaButton>
  </div>

  <p className='text-center text-base m-5'>
  © 2024 Oni. All rights reserved
  </p>
</div>

  );
}
