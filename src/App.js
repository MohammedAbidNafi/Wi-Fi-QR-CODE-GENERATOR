import React from 'react';
import { Card } from './components/Card';
import './style.css';
import logo from '../src/images/wifi.png';

function App() {
  return (
    <div className="App">
      <h1>
        <img alt="icon" src={logo} width="32" height="32" />
        &nbsp; Wi-fi QR code Genrator
      </h1>

      <p className="tag">
        After entering your Wi-Fi details
        print the card with your WiFi login details. Tape it to the wall,
        or any place. Or tape it in your store for customers to connect.
        Then just scan the QR code 
      </p>

      <p className="tag">
        No information is sent to MargsWeb nor MargsGlobal. There is no tracking in this site
        Hence the details you enter are completly safe. You can even view the{' '}
        <a href="https://github.com/MohammedAbidNafi/wifi-card">source code</a>.
      </p>

      <Card />
    </div>
  );
}

export default App;
