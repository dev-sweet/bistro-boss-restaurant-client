import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/contact/banner.jpg";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";
const Contact = () => {
  return (
    <div>
      <Cover
        img={img}
        title="Contact us"
        subtitle="Would you like to try a dish?"
        mt="80"
      />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
