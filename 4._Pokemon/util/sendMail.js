import nodemailer from "nodemailer";

export async function sendMail(mailTo, aboutText) {
  return new Promise(async (resolve, reject) => {

    var transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'keadat2021@hotmail.com',
        pass: 'V5Pj#fZISd0kCwZL.'
      }
    });

    var mailOptions = {
      from: 'keadat2021@hotmail.com',
      to: mailTo,
      subject: 'Sending Email using Node.js',
      text: aboutText
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject("Mail error: " + error);
      } else {
        resolve("Mail has been sent")
      }
    });
  });
}
