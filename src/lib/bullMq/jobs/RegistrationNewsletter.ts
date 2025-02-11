import { Mail } from "../../mail";

export default {
  key: "RegistrationNewsletter",
  async handle({ data }: { data: { email: string; name: string } }) {
    const { email, name } = data;

    await Mail.sendMail({
      from: "Test <newsletter@teste.com>",
      to: `${name} <${email}>`,
      subject: "Welcome to our newsletter!",
      html: "<p>You have successfully subscribed to our newsletter!</p>",
    });
  },
};
