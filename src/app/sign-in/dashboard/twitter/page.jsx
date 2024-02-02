"use client"
import React from 'react'

const page = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'width=1000,height=800');
  };

  return (
    <div>
       <h1>Welcome to My Twitter App</h1>
        <a class="twitter-share-button"
          onClick={() =>  openInNewWindow("https://twitter.com/intent/tweet?url=https%3A%2F%2Fmaps.app.goo.gl%2FePy1ySzJvTEPasvp8&text=Hello%20world")}>
            Tweet</a>
    </div>
  );
}

export default page