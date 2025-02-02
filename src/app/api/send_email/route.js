import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.eu.mailgun.net",
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received request body:", body); // Debugging

    const { email, name, message } = body;
    if (!email || !name || !message) {
      console.error("Missing email, name, or message");
      return new Response(JSON.stringify({ error: "Missing email, name, or message" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Contact Form <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: [email],
      subject: "Thanks for Contacting Us!",
      text: `Hello ${name}, thanks for your message: ${message}`,
      html: `<h1>Hello ${name}</h1><p>Thanks for your message:</p><blockquote>${message}</blockquote>`,
    });

    console.log("Mailgun response:", response);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
