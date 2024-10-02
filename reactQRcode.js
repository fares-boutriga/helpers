//this code was created on modal so you can just update the code by deleting all the code related to the model or just take it as it is
// the modal and the button was imported from reac-bootstrap package so you can change it 
//this code represant a Qr code generate an he take a referance an code as parameter so you can change it
import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { QRCode } from 'react-qrcode-logo';
import logo from './qrLogo.png';

const QRCodeGenerator = ({ reference, code }) => { //update the referance and code by the new prameter exp: link of any website
  const [showModal, setShowModal] = useState(false);
  const qrRef = useRef();

  const handleGenerateQRCode = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDownloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `QRCode_${reference}_${code}.png`;//this is the name of the image of the qr code that you will downloaded 
    link.click();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleGenerateQRCode}>Generate QR Code</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div ref={qrRef}>
            <QRCode
              value={`Reference: ${reference}, Code: ${code}`}
              logoImage={logo} //the log of the website (is not necessaire)
              logoWidth={40}   // Smaller logo size
              logoHeight={40}
              size={256}       // Larger QR code size
              quietZone={10}   // Add margin around QR code
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDownloadQRCode}>
            Download QR Code
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QRCodeGenerator;
