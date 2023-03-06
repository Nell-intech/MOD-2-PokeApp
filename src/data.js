// poke' function
export async function pokeData(pokemonName) {

    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    let pokeDataRes;
    //fetch requests return a promise. promises can be resolved or rejected
    // .then allows you to fire a fucntion when the fetch request has been resolved
    // .catch will fire call back function when there is an error
    // the fetch API returns a response object that it creates when we get data and it is returned
    //  to see the data you have to look into the proto to find a method for the object - .json
    // .json is a method that you can use on the response object to get the data. it will get the response data and parse it so we can use it inside of our code


    try {
        let response1 = await fetch(pokeUrl)
        //will wait until the url is found, API will respond with a promise stored in response
        pokeDataRes = await response1.json()
        console.log(pokeDataRes)
        // when the response is finished then we wait for the data in response.jason that gets stored in data
    } catch (error) {
        console.log(error)
    }
    return pokeDataRes
}



// giphy function
export async function giphyData() {

    let giphyKey = 'jcFixpEcM8ke9YCcCbCTNZYv61B8C7SA'
    let giphySearchUrl = `http://api.giphy.com/v1/gifs/search?api_key=${giphyKey}`; // needs API key , needs search query &q=______ to be a search for the giph and return it
    let giphyDataRes;


    try {
        let response2 = await fetch(giphySearchUrl)
        //will wait until the url is found, API will respond with a promise stored in response
        giphyDataRes = await response2.json()
        console.log(giphyDataRes)
        // when the response is finished then we wait for the data in response.jason that gets stored in data
    } catch (error) {
        console.log(error)
    }
    return giphyDataRes

}

// export async function pokeAbilities(){
//     let url = 'https://pokeapi.co/api/v2/ability/{id or name}/'
// }
