//main.js

import { getBreeds, searchDogsByBreed, favoriteDog } from "./api.js";
import { renderBreeds, renderDogs } from "./ui.js";

const breedSelect = document.querySelector("#breedSelect");
const searchBtn = document.querySelector("#searchBtn");
const resultsDiv = document.querySelector("#results");

//Load breed on start
async function init() {
    const breeds = await getBreeds();
    renderBreeds(breeds, breedSelect);
}

init();

//search button click
searchBtin.addEventListener("click", async () => {
const breedId = breedSelect.value;
const dogs = await searchDogsByBreed(breedId);
renderDogs(dogs, resultsDiv);
});

//Favorite button click
resultsDiv.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
        const imageId = e.target.dataset.id;
        await favoriteDog(imageId);
        alert("Added to favorites");
    }
});
