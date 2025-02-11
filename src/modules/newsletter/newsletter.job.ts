import { Mail } from "../../lib/mail";

export const jobs = {
  RegistrationNewsletter: {
    async handle({ data }: { data: { email: string; name: string } }) {
      const { email, name } = data;
      console.log(`Sending email to ${name} <${email}>`);
      await Mail.sendMail({
        from: "Test <newsletter@teste.com>",
        to: `${name} <${email}>`,
        subject: "Welcome to our newsletter!",
        html: "<p>You have successfully subscribed to our newsletter!</p>",
      });
      console.log(`Email sent to ${name} <${email}>`);
    },
  },
};
