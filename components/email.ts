import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface TemplateParams {
  [key: string]: string | number;
}

const sendEmail = async (templateParams: TemplateParams): Promise<EmailJSResponseStatus> => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );
    return response;
  } catch (error) {
    console.error('Email failed to send:', error);
    throw error;
  }
};

export default sendEmail;