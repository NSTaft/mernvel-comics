const md5 = require("blueimp-md5");

export async function getMarvelComics(search, offset, limit){
    let BASE_URL = `https://gateway.marvel.com`
    let API_KEY = 'c51223db7fb9b72a6ac9b2947734448f'
    let PRIVATE = `75ac0b3c5d100bb75cb86dc1964102f006b93fc1`
    let TIMESTAMP = 'sussybaka'
    let HASH = md5(`${TIMESTAMP}${PRIVATE}${API_KEY}`)
    let OFFSET = offset
    let LIMIT = limit
    
    let URL = `${BASE_URL}/v1/public/comics?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${OFFSET}`
    const response = await fetch(URL)
    if (response.ok) {
        return response.json()
    }
    else {
        throw new Error("Invalid Request")
    }

}