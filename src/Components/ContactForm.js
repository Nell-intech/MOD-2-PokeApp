import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function ContactForm() {
    return (
        <>
            <div className="formContainer">
                <form>
                    <label>
                        Name:
                        <input className="formInput" type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input className="formInput" type="text" name="email" />
                    </label>
                    <label>
                        Messaage:
                        <textarea  placeholder="Hello there, this is some text in a text area" >
                           
                        </textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

