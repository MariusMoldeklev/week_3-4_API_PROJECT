

// const API_key = "3e6fc0d6a2844fb8bce282198b367e1f";
// const apiKey = '86dcfe9aa32f49658a242a93037ef96e';
// const apiUrl = 'https://api.humorapi.com/jokes/search';

// function fetchJokes() {
//   const keywords = 'horse,man'; // Example keywords
//   const number = 3; // Number of jokes to fetch

//   const url = `${apiUrl}?keywords=${keywords}&number=${number}&api-key=${apiKey}`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       displayJokes(data.jokes);
//     })
//     .catch(error => {
//       console.error('There was a problem fetching the jokes:', error);
//     });
// }

// function displayJokes(jokes) {
//   const jokesContainer = document.getElementById('jokes-container');

//   jokesContainer.innerHTML = ''; // Clear previous jokes

//   jokes.forEach(joke => {
//     const jokeElement = document.createElement('div');
//     jokeElement.classList.add('joke');
//     jokeElement.textContent = joke.joke;
//     jokesContainer.appendChild(jokeElement);
//   });
// }

// // Call fetchJokes when the page loads or when a button is clicked, etc.

// console.log(fetchJokes)




// const apiFetch = async ()=>{
//     const response = await fetch(apiUrl)
//     const data = await response.json()
//     console.log(data)
    // console.log(data.data)
    // const jokeHTML = data.data.map(jokes) => `
    // <div class ="">
    //     <div> class="joke-text">
    //     <h2>
    //     `

// }

// apiFetch()

const endpoint = `Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist`
const url = `https://v2.jokeapi.dev/joke/${endpoint}`

const fetchJoke = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

}

fetchJoke()