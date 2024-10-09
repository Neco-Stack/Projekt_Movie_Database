import { movies } from "./movies";
const yearUpBtn = document.querySelector("#yearUp") as HTMLButtonElement;
const yearDownBtn = document.querySelector("#yearDown") as HTMLButtonElement; 
const bestRateBtn = document.querySelector("#bestRate") as HTMLButtonElement;
const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;
const movieCardElement = document.querySelector("#movieCard") as HTMLElement;
const searchField = document.querySelector("#searchField") as HTMLInputElement;

const displayMovies = (moviesDisplayed: any[]) => {
    movieCardElement.innerHTML= " ";
    moviesDisplayed.forEach((movie) => {
        movieCardElement.innerHTML += `
        <div>
                <h4>${movie[0]}</h4>
                <p>Jahr: ${movie[1]}</p>
                <p>Regisseur: ${movie[2]}</p>
                <p>Dauer: ${movie[3]}</p>
                <p>Genre: ${movie[4]}</p>
                <p>Bewertung: ${movie[5]}</p>
                </div>
        `;
    })
}
const sortedMoviesBestRate = [...movies].sort((a, b) => {
    // sollen wir FLOAT nicht benutzen?
    return parseFloat(b[5]) - parseFloat(a[5])
});
displayMovies(sortedMoviesBestRate);

yearUpBtn.addEventListener("click", () => {
    console.log("der User hat yearUpBtn geklickt");
    const sortedMoviesYearUp = [...movies].sort((a, b) => {
        return parseInt(a[1]) - parseInt(b[1])
    });
    displayMovies(sortedMoviesYearUp)
});

yearDownBtn.addEventListener("click", () => {
    console.log("der User hat yearDownBtn geklickt");
    const sortedMoviesYearDown = [...movies].sort((a, b) => {
        return parseInt(b[1]) - parseInt(a[1])
    });
    displayMovies(sortedMoviesYearDown)
});

bestRateBtn.addEventListener("click", () => {
    console.log("der User hat bestRateBtn geklickt");
    const sortedMoviesBestRate = [...movies].sort((a, b) => {
        // sollen wir FLOAT nicht benutzen?
        return parseFloat(b[5]) - parseFloat(a[5])
    });
    displayMovies(sortedMoviesBestRate)
});

searchBtn.addEventListener("click", () => {
    console.log("Der User hat den SearchBtn geklickt");
    const searchName = searchField.value.toLowerCase();
    console.log(searchName);
    if (searchName) {
        const searchResults = movies.filter(movie => {
            const movieTitle = movie[0].toLowerCase();
            return movieTitle.includes(searchName);
        })
        if (searchResults.length > 0) {
            displayMovies(searchResults)
        }
    }
})
