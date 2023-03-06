// General Homepage for App
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <div className="container homepage-hero">
                {/* <div className="homepage-text-content">
                <p>Welcome to my Pokemon App</p>
                <h1>Poke' Perfect</h1>
                <p>Welcome to my Pokemon App</p>
                </div> */}
            </div>
            <Footer/>
        </>
    );
}
// display: flex;
//   flex-direction: column;
//   margin: auto 50%;
//   border: 1px solid white;
//   width: 300px;
//   height: 300px; 