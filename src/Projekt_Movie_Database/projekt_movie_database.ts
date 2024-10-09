import { movies } from "./movies";
console.log(movies);
const yearUpBtn = document.querySelector("#yearUp") as HTMLButtonElement;
const yearDownBtn = document.querySelector("#yearDown") as HTMLButtonElement; 
const bestRateBtn = document.querySelector("#bestRate") as HTMLButtonElement;
const searchBtn = document.querySelector("#searchBtn") as HTMLButtonElement;
console.log(searchBtn);
const movieCardElement = document.querySelector("#movieCard") as HTMLElement;
console.log(movieCardElement);
const searchField = document.querySelector("#searchField") as HTMLInputElement;
console.log(searchField);

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
    const outputMovies = sortedMoviesYearUp.map((movie: [string, string, string, string, string[], string]): string => {
        return `title: ${movie[0]}, jahr: ${movie[1]}, regisseur: ${movie[2]}, dauer: ${movie[3]}, genre: ${movie[4]}, bewertung: ${movie[5]}`;
    });
    console.log(outputMovies);
    displayMovies(sortedMoviesYearUp)
});

yearDownBtn.addEventListener("click", () => {
    console.log("der User hat yearDownBtn geklickt");
    const sortedMoviesYearDown = [...movies].sort((a, b) => {
        return parseInt(b[1]) - parseInt(a[1])
    });
    const outputMovies = sortedMoviesYearDown.map((movie: [string, string, string, string, string[], string]): string => {
        return `title: ${movie[0]}, jahr: ${movie[1]}, regisseur: ${movie[2]}, dauer: ${movie[3]}, genre: ${movie[4]}, bewertung: ${movie[5]}`;
    });
    console.log(outputMovies);
    displayMovies(sortedMoviesYearDown)
});

bestRateBtn.addEventListener("click", () => {
    console.log("der User hat bestRateBtn geklickt");
    const sortedMoviesBestRate = [...movies].sort((a, b) => {
        // sollen wir FLOAT nicht benutzen?
        return parseFloat(b[5]) - parseFloat(a[5])
    });
    const outputMovies = sortedMoviesBestRate.map((movie: [string, string, string, string, string[], string]): string => {
        return `title: ${movie[0]}, jahr: ${movie[1]}, regisseur: ${movie[2]}, dauer: ${movie[3]}, genre: ${movie[4]}, bewertung: ${movie[5]}`;
    });
    console.log(outputMovies);
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
