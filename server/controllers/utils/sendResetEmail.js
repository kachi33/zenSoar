import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (Gmail, Outlook, etc.)
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or application-specific password
    },
});

/**
 * Sends a password reset email to the user.
 * @param {string} email - The recipient's email address.
 * @param {string} resetUrl - The URL with the reset token.
 */
const sendResetEmail = (email, resetUrl) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: email, // Recipient address
        subject: 'Password Reset Request', // Subject line
        text: `You requested a password reset. Please click the link below to reset your password:\n\n${resetUrl}`, // Plain text body
        html: `<p>You requested a password reset. Please click the link below to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`, // HTML body
    };

    return transporter.sendMail(mailOptions)
        .then(info => console.log('Email sent: ' + info.response))
        .catch(error => console.error('Error sending email: ', error));
};

export default sendResetEmail;
