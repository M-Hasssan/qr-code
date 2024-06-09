import React from "react";
import QRCode from "react-qr-code";


function App() {
  return (
    <center>
    <div style={{ background: 'white', padding: '40px', justifyContent: 'center',   }}>
    <h2 style={{fontSize: '40px',}}>QR Code</h2>
    <QRCode value="Acha ap main chlta hon" />
    <p style={{fontSize: '40px',}} >Scan Me Now</p>
    </div>
    </center>
  );
}

export default App;
