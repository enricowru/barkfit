import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send email using EmailJS
 * @param {Object} formData - The form data containing name, email, and message
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendEmail = async (formData) => {
  try {
    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'info@barkfit.com', // Your business email
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    };
  }
};

/**
 * Send a confirmation email to the user
 * @param {string} userEmail - The user's email address
 * @param {string} userName - The user's name
 * @returns {Promise} - Promise that resolves when confirmation email is sent
 */
export const sendConfirmationEmail = async (userEmail, userName) => {
  try {
    const templateParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'BarkFit Team',
      message: `Hi ${userName},\n\nThank you for reaching out to BarkFit! We've received your message and will get back to you within 24 hours.\n\nBest regards,\nThe BarkFit Team`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'confirmation_template_id', // You'll need to create this template
      templateParams
    );

    console.log('Confirmation email sent successfully:', response);
    return { success: true };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false };
  }
};

