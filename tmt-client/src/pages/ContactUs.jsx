import { ContactForm, ContactInfo } from "../components";
import TitleProvider from "../providers/TitleProvider";


const ContactUs = () => {
    return (
        <>
        <TitleProvider title="Contact"/>
            <ContactInfo />
            <ContactForm />
        </>
    );
};

export default ContactUs;