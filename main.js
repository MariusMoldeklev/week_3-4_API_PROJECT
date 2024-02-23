
const endpoint = `Any?blacklistFlags=nsfw,religious,political,racist,sexist`
const url = `https://v2.jokeapi.dev/joke/${endpoint}`

const fetchJoke = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.category)
    
}

fetchJoke()


const jokeDisplay = document.getElementById("jokeDisplay");
const randomBtn = document.getElementById("randomBtn");
const categoryBtn = document.getElementById("categoryBtn");
const generateBtn = document.getElementById("generateBtn");

randomBtn.addEventListener("click", getRandomJoke);
categoryBtn.addEventListener("click", getCategories);
generateBtn.addEventListener("click", generateJoke);

function getRandomJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then(response => response.json())
    .then(data => {
          jokeDisplay.innerHTML = `<p><strong>${data.setup}</strong></p>
                                    <p>${data.delivery}</p>`;
        })
        .catch(error => {
              jokeDisplay.innerHTML = "<p>Failed to fetch joke. Please try again.</p>";
    });
}

function getCategories() {
  fetch("https://v2.jokeapi.dev/categories")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        jokeDisplay.innerHTML = "<p><strong>Categories:</strong></p>";
        // this code does not want tu run cant find out why
        data.categories.forEach(category => {
            const categoryBtn = document.createElement("button");
            categoryBtn.textContent = category;
            categoryBtn.addEventListener("click", () => getJokeByCategory(category));
            jokeDisplay.appendChild(categoryBtn);
          });
        })
        .catch(error => {
              jokeDisplay.innerHTML = "<p>Failed to fetch categories. Please try again.</p>";
            });
        }
        
        function getJokeByCategory(category) {
              fetch(`https://v2.jokeapi.dev/joke/${category}?type=twopart`)
    .then(response => response.json())
    .then(data => {
      jokeDisplay.innerHTML = `<p><strong>${data.setup}</strong></p>
                                <p>${data.delivery}</p>`;
    })
    .catch(error => {
          jokeDisplay.innerHTML = "<p>Failed to fetch joke. Please try again.</p>";
        });
    }
    
    function generateJoke() {
          fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then(response => response.json())
    .then(data => {
      jokeDisplay.innerHTML = `<p><strong>${data.setup}</strong></p>
                                <p>${data.delivery}</p>`;
    })
    .catch(error => {
          jokeDisplay.innerHTML = "<p>Failed to generate joke. Please try again.</p>";
        });
    }
    
    // Initially, load a random joke when the page loads
    getRandomJoke();








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