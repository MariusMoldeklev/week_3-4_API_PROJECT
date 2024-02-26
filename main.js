
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
        // kan bruke .map istede for .forEach
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
    
    
  