import "../../app/globals.css";
import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with me through the contact form or connect on LinkedIn. I'm open to questions, collaborations, and opportunities.",
};

const page = () => {
  return (
    <>
      <ContactContent />
    </>
  );
};

export default page;
