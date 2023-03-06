import ContactForm from "../Components/ContactForm";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer"; 

export default function Contact() {
    return (
        <>
        <Nav />
        <div className="container ">
        <ContactForm /> 
        </div>
        <Footer />
        </>
    );
}