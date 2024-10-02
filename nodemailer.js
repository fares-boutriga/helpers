//gmail configuration 
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAIL,
    pass: process.env.NODEPASS,
  },
});

//privet mail server 
const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter1 = nodemailer.createTransport({
    host: 'domain name', //exep:thermo.xaere.io
    port: 587, // Port 587 is commonly used for secure SMTP with STARTTLS
    secure: false, // Use `true` for port 465, `false` for port 587 or other ports
    auth: {
        user: process.env.NODEMAIL,
        pass: process.env.NODEPASS,
    },
    tls: {
        rejectUnauthorized: false // Allows self-signed certificates if needed
    }
});

//exeample of sending mail function 
async function sendMail(receivers, checkin, checkout, client, reference, nombreChambres) {
    const htmlForm = `
      <div
        style="
          height: auto !important;
          max-width: 600px !important;
          font-family: Helvetica, Arial, sans-serif !important;
          margin-bottom: 40px;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        "
      >
        <img src="cid:logo" alt="logo" style="width: 128px; margin-bottom: 30px; clear: both; display: inline-block" />
        <h2 style="font-size: 24px; color: #333;">Nouvelle Réservation</h2>
        <p style="font-size: 16px; color: #555;">
          Bonjour,
        </p>
        <p style="font-size: 16px; color: #555;">
          Nous avons le plaisir de vous informer qu'une nouvelle réservation a été effectuée.
        </p>
        <table style="width: 100%; font-size: 16px; color: #555; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Client</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${client}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Date d'arrivée</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${checkin}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Date de départ</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${checkout}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Nombre de chambres</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${nombreChambres}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Référence</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${reference}</td>
          </tr>
        </table>
        <p style="font-size: 16px; color: #555; margin-top: 20px;">
          Cordialement,<br/>
          Djerba Sun Travel
        </p>
      </div>
    `;
  
    try {
      const info = await transporter.sendMail({
        from: {
          name: 'Djerba Sun Travel',
          address: process.env.NODEMAIL,
        },
        to: receivers,
        subject: 'Nouvelle Réservation',
        text: `Bonjour,\n\nNous avons le plaisir de vous informer qu'une nouvelle réservation a été effectuée.\n\nClient: ${client}\nDate d'arrivée: ${checkin}\nDate de départ: ${checkout}\nNombre de chambres: ${nombreChambres}\nRéférence: ${reference}\n\nCordialement,\nDjerba Sun Travel`,
        html: htmlForm,
        attachments: [
          {
              filename: 'logo.jpg',
              path: './logo.jpg',
              cid: 'logo'
          }
      ]
      });
  
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email: ', error);
      throw error;
    }
  }
  