// This Pokeindex shows all of the Pokemon that the Pokemon Master has

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import IndexSidebar from "../Components/IndexSidebar";

// import {pokeData,giphyData} from './data';

export default function PokeIndex() {
    return (
        <>
            <Nav />
            <div className="container">
            <IndexSidebar />
            <div className="right">
            This is my poke index list!
            </div>
            </div>
            <Footer />
        </>

    );
}