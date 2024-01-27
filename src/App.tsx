import React from "react";
import "./App.less";
import { SocialIcon } from 'react-social-icons'
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Please Verify You Are At Reaperswap.com
        </div>
      </div>
      <Routes />
      <div className="social-buttons">
        <SocialIcon url="www.twitter.com"
          href="https://twitter.com"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Visit Our Twitter"
        >
          Twitter
        </SocialIcon>
      </div>
    </div>
  );
}

export default App;
