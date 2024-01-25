"use client"
import React, { useState, useEffect } from 'react';
import Script from 'next/script';

const FacebookPage = () => {
  const [isConnected, setIsConnected] = useState(false);


  return (
    <div>
      
      <h1>Facebook Page</h1>
      <div><a target="_blank" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FePy1ySzJvTEPasvp8" class="fb-xfbml-parse-ignore">Share</a></div>


    </div>
  );
};

export default FacebookPage;
