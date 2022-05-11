/* eslint-disable no-restricted-globals */
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(8080, () => console.log('Server Running'));

let transporter = nodemailer.createTransport({
  host: 'mail.memaldesigns.com',
  port: 465,
  secure: true,
  auth: {
    user: 'megan@memaldesigns.com',
    pass: 'U8RGtTpGUzTh3bR',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages!');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: '***************@gmail.com',
    subject: 'Contact Form Message',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
